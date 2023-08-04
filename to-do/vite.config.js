import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://viteclearjs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/todo-react-vite-deploy"
})
