import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  server: {
    open: true, // 运行后自动在浏览器中打开应用程序
    port: 8090
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import './src/styles/mixin.scss';`
      }
    }
  }
})
