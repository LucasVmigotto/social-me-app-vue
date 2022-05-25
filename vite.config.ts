import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: import.meta.env.VITE_APP_VUE_HOST ?? '0.0.0.0',
    port: import.meta.env.VITE_APP_VUE_PORT ?? 8080
  },
  plugins: [vue()]
})
