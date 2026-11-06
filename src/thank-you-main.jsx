import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ThankYouPage from './ThankYouPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThankYouPage />
  </StrictMode>,
)
