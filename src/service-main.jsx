import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { initAnalytics } from './analytics'
import ServicePage from './ServicePage.jsx'

initAnalytics()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ServicePage />
  </StrictMode>,
)
