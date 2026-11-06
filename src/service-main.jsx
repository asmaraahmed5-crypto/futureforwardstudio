import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ServicePage from './ServicePage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ServicePage />
  </StrictMode>,
)
