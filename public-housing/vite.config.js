import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@css': path.resolve(__dirname, './src/css'),
      '@cssBase': path.resolve(__dirname, './src/css/base'),
      '@cssCommon': path.resolve(__dirname, './src/css/common'),
      '@cssComponents': path.resolve(__dirname, './src/css/components'),
      '@cssLayout': path.resolve(__dirname, './src/css/layout'),
      '@cssPage': path.resolve(__dirname, './src/css/page'),
      '@cssMixin': path.resolve(__dirname, './src/css/mixin'),
      '@cssEvent': path.resolve(__dirname, './src/css/event'),
      '@cssServices': path.resolve(__dirname, './src/css/services'),
      '@cssAdmin': path.resolve(__dirname, './src/css/admin'),
      '@cssMypage': path.resolve(__dirname, './src/css/mypage'),
      
      // jsx
      '@components': path.resolve(__dirname, './src/jsx/components'),
      '@layouts': path.resolve(__dirname, './src/jsx/layouts'),
      '@pages': path.resolve(__dirname, './src/jsx/pages'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@store': path.resolve(__dirname, './src/store'),
      '@utils': path.resolve(__dirname, './src/utils'),

      // api
      '@api': path.resolve(__dirname, './src/api'),
    },
  },
  server: {
    port: 3000, // 포트 번호 변경 가능
  },
})
