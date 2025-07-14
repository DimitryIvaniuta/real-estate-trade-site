import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';
import path from 'path';

export default defineConfig({
  plugins: [
    react({ jsxRuntime: 'automatic' }),
    checker({
      typescript: {
        tsconfigPath: './tsconfig.json',
      }
    }),
  ],
  resolve: {
    alias: { '@': path.resolve(__dirname, 'src') },
  },
  css: {
    devSourcemap: true,
  },
  build: {
    target: 'esnext',
    outDir: 'dist',
    emptyOutDir: true,
  },
  server: {
    port: 5173,
    proxy: {
      // any request starting with /api will be forwarded...
      '/api': {
        target: 'http://localhost:3001',   // <-- your Express backend
        changeOrigin: true,
        secure: false,
      },
    },
  },
});