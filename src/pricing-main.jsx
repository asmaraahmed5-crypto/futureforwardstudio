import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { initAnalytics } from './analytics'
import PricingPage from './PricingPage.jsx'

initAnalytics()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PricingPage />
  </StrictMode>,
)
