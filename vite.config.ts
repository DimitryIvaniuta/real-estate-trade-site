import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

// ------------------------------------------------------------
// Vite 7 • React 19 • TypeScript
// ------------------------------------------------------------
// • React plugin gives fast refresh & SWC transform
// • Alias "@" → /src  so imports look like "@/components/Button"
// • Vitest section picks up jsdom + globals automatically
// • PostCSS / Tailwind handled via postcss.config.cjs
// ------------------------------------------------------------

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic', // React 19 shorthand (no need to import React)
    }),
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },

  css: {
    devSourcemap: true, // easier debugging in devtools
  },

  build: {
    target: 'esnext',
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false,
  },

  // Vitest configuration (vite v7 reads this block natively)
  test: {
    environment: 'jsdom',
    globals: true,
    css: true,
    setupFiles: './src/test/setupTests.ts', // create if you need extra polyfills
    coverage: {
      reporter: ['text', 'html'],
    },
  },
});
