import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Served from GitHub Pages at https://heyhapps.github.io/mystuff-web/
export default defineConfig({
  base: '/mystuff-web/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        index: resolve(import.meta.dirname, 'index.html'),
        privacy: resolve(import.meta.dirname, 'privacy.html'),
        learn: resolve(import.meta.dirname, 'learn.html'),
        terms: resolve(import.meta.dirname, 'terms.html'),
        refund: resolve(import.meta.dirname, 'refund.html'),
        delivery: resolve(import.meta.dirname, 'delivery.html'),
        contact: resolve(import.meta.dirname, 'contact.html'),
      },
    },
  },
})
