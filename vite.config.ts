import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// GitHub Pages project site: https://<user>.github.io/span-contests/
export default defineConfig({
  plugins: [react()],
  base: '/span-contests/',
})
