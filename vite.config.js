import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Catch any request starting with /api
      '/api': {
        target: 'https://quotation-ph3n.onrender.com', // Your Render Backend
        changeOrigin: true,
        secure: false,
      }
    }
  }
})