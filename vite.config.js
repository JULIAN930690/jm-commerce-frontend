import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ignoreAutolinkerSourcemapWarnings from './vite-plugin-ignore-warnings.js';

export default defineConfig({
  plugins: [
    react(),
    ignoreAutolinkerSourcemapWarnings(),
  ],
  build: {
    sourcemap: false,
  },
  esbuild: {
    sourcemap: false,
  },
  optimizeDeps: {
    exclude: ['swagger-ui-react', 'autolinker', 'remarkable'],
  },
  server: {
    open: true,
    strictPort: true,
    host: '0.0.0.0',         // <---- aquí, para que sea accesible en red
    port: 5173,
    fs: {
      strict: false,
    },
    watch: {
      ignored: [
        '**/node_modules/**',
        '**/.git/**',
        '**/dist/**',
        '**/swagger-ui-react/swagger-ui.css.map',
        '**/worker.js.map', // ← AÑADIDO PARA EVITAR EL WARNING
      ],
    },
  },
  logLevel: 'info',
});
