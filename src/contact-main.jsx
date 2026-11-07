import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { initAnalytics } from './analytics'
import ContactPage from './ContactPage.jsx'

initAnalytics()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContactPage />
  </StrictMode>,
)
