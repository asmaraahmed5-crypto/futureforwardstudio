// GA4 event tracking (the gtag.js snippet is already in every page <head>).
// Events: generate_lead (form submitted), mailto_click, audit_cta_click, pricing_cta_click, booking_click.
// Mark them as key events in GA4 > Admin > Events.
import { BOOKING_URL } from './siteConfig'

export function track(name, params = {}) {
  try {
    if (typeof window.gtag === 'function') window.gtag('event', name, params)
  } catch { /* never break the page for analytics */ }
}

export function initAnalytics() {
  if (typeof document === 'undefined' || window.__ffsAnalytics) return
  window.__ffsAnalytics = true
  document.addEventListener('click', (e) => {
    const a = e.target instanceof Element ? e.target.closest('a') : null
    if (!a) return
    const href = a.getAttribute('href') || ''
    const where = window.location.pathname
    if (href.startsWith('mailto:')) track('mailto_click', { link_url: href, page_path: where })
    else if (BOOKING_URL && href.startsWith(BOOKING_URL)) track('booking_click', { link_url: href, page_path: where })
    if (a.hasAttribute('data-audit')) track('audit_cta_click', { page_path: where, link_text: a.textContent.trim().slice(0, 60) })
    if (href === '/pricing' || a.closest('.pricing-card, .pp-plan')) track('pricing_cta_click', { page_path: where, link_text: a.textContent.trim().slice(0, 60) })
  }, true)
}
