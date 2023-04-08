import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';


export default defineConfig({
  base: undefined,
  build: {
    target: 'es2020',
    outDir: 'dist',
    sourcemap: true,
    minify: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  plugins: [react()],
});
