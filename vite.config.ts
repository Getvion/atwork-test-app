import path from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react()],
  base: '',
  resolve: {
    alias: {
      types: path.resolve(__dirname, './src/types'),

      store: path.resolve(__dirname, './src/store'),
      components: path.resolve(__dirname, './src/compoents'),
      shared: path.resolve(__dirname, './src/shared'),
      widgets: path.resolve(__dirname, './src/widgets'),
      assets: path.resolve(__dirname, './src/assets'),
      pages: path.resolve(__dirname, './src/pages')

      // components: `${path.resolve(__dirname, './src/components/')}`,
      // public: `${path.resolve(__dirname, './public/')}`,
    }
  }
});
