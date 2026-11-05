import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'/my-react-app/',
  server:{
    proxy:{
      '/feedback':{
        target:'http://localhost:5000',
        changeOrigin:true,
        
      }
    }
  }
})
