import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Relative base so the build works whether it's served from the domain
  // root (https://site.com/) OR a sub-path (https://host/pr-1/, GitHub
  // Pages /repo/, Netlify/Vercel preview URLs, etc). Absolute "/assets"
  // paths 404 on a sub-path and leave a blank page.
  base: './',
  plugins: [react()],
})
