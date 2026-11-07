import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { initAnalytics } from './analytics'
import BlogPage from './BlogPage.jsx'

initAnalytics()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BlogPage />
  </StrictMode>,
)
