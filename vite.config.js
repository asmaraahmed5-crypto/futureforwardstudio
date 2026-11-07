import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import seoPrerender from './seo-prerender.js'

export default defineConfig({
  plugins: [
    react(),
    seoPrerender(),
    {
      // Dev only: serve service.html for /services/<slug> (the Worker does this in production)
      name: 'service-route',
      configureServer(server) {
        server.middlewares.use((req, _res, next) => {
          if (req.url && /^\/services\/[^/?]+\/?(\?.*)?$/.test(req.url)) req.url = '/service.html'
          else if (req.url && /^\/about\/?(\?.*)?$/.test(req.url)) req.url = '/about.html'
          else if (req.url && /^\/pricing\/?(\?.*)?$/.test(req.url)) req.url = '/pricing.html'
          else if (req.url && /^\/blog(\/[^/?]*)?\/?(\?.*)?$/.test(req.url)) req.url = '/blog.html'
          else if (req.url && /^\/(generative-engine-optimization|ai-marketing-for-small-business|ai-marketing-for-ecommerce)\/?(\?.*)?$/.test(req.url)) req.url = '/service.html'
          next()
        })
      },
    },
  ],
  server: {
    port: parseInt(process.env.PORT || '5174'),
    strictPort: false,
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        contact: resolve(import.meta.dirname, 'contact.html'),
        thankyou: resolve(import.meta.dirname, 'thank-you.html'),
        service: resolve(import.meta.dirname, 'service.html'),
        about: resolve(import.meta.dirname, 'about.html'),
        pricing: resolve(import.meta.dirname, 'pricing.html'),
        blog: resolve(import.meta.dirname, 'blog.html'),
      },
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
