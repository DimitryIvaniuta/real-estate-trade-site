#!/usr/bin/env node
import { spawn } from 'child_process';
import path from 'path';
import readline from 'readline';

// 1) Command to run Vite through your package manager
const cmd = 'pnpm';            // or 'npx' if you prefer
const args = ['exec', 'vite', '--clearScreen=false'];

// 2) Spawn with shell: true so Windows can resolve pnpm/npx from PATH
const vite = spawn(cmd, args, {
  cwd: process.cwd(),
  shell: true,
  stdio: ['inherit', 'pipe', 'pipe'],
});

// 3) Regex to find file paths with line/column
const fileRegex = /([A-Za-z]:[\\/][^\s:]+|\.[\\/][^\s:]+|\/[^\s:]+):(\d+):(\d+)/g;

// Helper to strip ANSI escape sequences (color, cursor moves, etc.)
function stripAnsi(s) {
  return s.replace(/\x1B\[[0-9;]*[A-Za-z]/g, '');
}

// 4) Wrap matches in OSC8 hyperlinks: file://path
function linkify(rawLine) {
  const line = stripAnsi(rawLine);
  if (line.match(fileRegex)) {
    return line.replace(fileRegex, (match) => {
      return `file:///${match.replace(/\\/g, '/')}`;
    });
  } else if(rawLine) {
    console.log(rawLine);
  }
}

// 5) Pipe & parse stdout
readline.createInterface({ input: vite.stdout })
  .on('line', (l) => {
    const ln = linkify(l);
    if(ln) {
      console.log(ln);
    }
  });

// 6) Pipe & parse stderr
readline.createInterface({ input: vite.stderr })
  .on('line', (l) => {
    const ln = linkify(l);
    if(ln) {
      console.error(ln);
    }
  });

// 7) Exit when Vite exits
vite.on('close', (code) => process.exit(code));
