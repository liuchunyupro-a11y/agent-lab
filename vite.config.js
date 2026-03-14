import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// For GitHub Pages project site (https://<user>.github.io/<repo>/), set base to your repo name, e.g. '/agent-lab/'
// For user/org site (https://<user>.github.io/) or custom domain, use '/'
export default defineConfig({
  plugins: [vue()],
  base: process.env.VITE_BASE_URL || '/',
})
