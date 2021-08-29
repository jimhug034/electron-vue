import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

const outDir = path.join(__dirname, 'dist/render')

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue()],
  build: {
    outDir,
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src/render'),
    }
  }
})
