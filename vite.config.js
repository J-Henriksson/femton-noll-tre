import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/femton-noll-tre/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        visningar: resolve(__dirname, 'visningar.html'),
      },
    },
  },
})
