import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  server: {
    open: true,
  },
  build: {
    outDir: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname),
    },
  },
});
