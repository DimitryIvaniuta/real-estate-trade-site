#!/usr/bin/env node
// dev-with-links.mjs
import { spawn } from 'child_process';
import readline from 'readline';
import path from 'path';

const cwd = process.cwd();
const proc = spawn('pnpm', ['exec', 'vite'], {
  cwd,
  shell: true,
  stdio: ['inherit', 'pipe', 'pipe'],
});

// 1) Matches Windows absolute paths like "J:/.../src/App.tsx:13:21"
// 2) Use [^\s:]+? for the path so it stops at the colon before the row
const pathRegex = /([A-Za-z]:[\/][^\s:]+?\.(?:ts|tsx|js|jsx)):(\d+):(\d+)/g;

// Helper to strip ANSI escape sequences (color, cursor moves, etc.)
function stripAnsi(s) {
  return s.replace(/\x1B\[[0-9;]*[A-Za-z]/g, '');
}

const CYAN_BG = '\x1b[46m';
const RESET = '\x1b[0m';

for (const stream of [proc.stdout, proc.stderr]) {
  const rl = readline.createInterface({ input: stream });
  rl.on('line', (rawLine) => {
    // 1. Remove ANSI sequences
    const line = stripAnsi(rawLine);
    // 2. Replace every path:row:col with an OSC 8 hyperlink
    if (line.match(pathRegex)) {
      const linked = line.replace(pathRegex, (_, filePath, row, col) => {
        // Resolve to absolute and normalize slashes
        const abs = path.isAbsolute(filePath)
          ? filePath
          : path.resolve(cwd, filePath);
        const urlPath = abs.replace(/\\/g, '/');
        const fileUrl = `file:///${urlPath}:${row}:${col}`;
        console.log(`${CYAN_BG} FILE ${RESET}: ${fileUrl}`);
        // OSC 8 hyperlink around the original text (filePath:row:col)
        return fileUrl;
        //`\u001B]8;;${fileUrl}\u0007${filePath}:${row}:${col}\u001B]8;;\u0007`;
      });
    } else {
      console.log(rawLine);
    }
  });
}

proc.on('exit', (code) => process.exit(code));
