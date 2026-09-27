import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('@paper-design/shaders-react')) return 'vendor-shaders'
          if (id.includes('node_modules/gsap'))           return 'vendor-gsap'
          if (id.includes('node_modules/react-dom'))      return 'vendor-react'
          if (id.includes('node_modules/react/'))         return 'vendor-react'
          if (id.includes('node_modules/lucide-react') || id.includes('node_modules/radix-ui')) return 'vendor-ui'
        },
      },
    },
  },
})
