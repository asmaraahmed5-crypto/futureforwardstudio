import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { initAnalytics } from './analytics'
import ThankYouPage from './ThankYouPage.jsx'

initAnalytics()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThankYouPage />
  </StrictMode>,
)
