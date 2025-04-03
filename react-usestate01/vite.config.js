import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@css': path.resolve(__dirname, './src/css'),
      '@cssBase': path.resolve(__dirname, './src/css/base'),
      '@cssCommon': path.resolve(__dirname, './src/css/common'),
      '@cssComponent': path.resolve(__dirname, './src/css/component'),
      '@cssLayout': path.resolve(__dirname, './src/css/layout'),
      '@cssPage': path.resolve(__dirname, './src/css/page'),
      '@cssMixin': path.resolve(__dirname, './src/css/mixin'),
      '@cssEvent': path.resolve(__dirname, './src/css/event'),
      '@cssTeachear': path.resolve(__dirname, './src/css/teachear'),
    },
  },
})
