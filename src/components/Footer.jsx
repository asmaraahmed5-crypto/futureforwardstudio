import { SpotButton } from './SpotButton'
import { AUDIT_HREF, AUDIT_LABEL_SHORT, SOCIAL } from '../siteConfig'

export default function Footer({ base = '', contactHref = '/contact' }) {
  return (
  <footer className="site-footer">
    <div className="footer-top">
      <div className="footer-brand">
        <img src="/logo-new.webp" alt="Future Forward Studio" className="footer-logo" width="300" height="100" />
        <p className="footer-desc">
          AI-powered marketing agency helping ambitious businesses turn artificial intelligence into better marketing, smarter decisions, and real growth.
        </p>
        <div className="footer-social">
          {SOCIAL.linkedin && <a href={SOCIAL.linkedin} className="social-link" aria-label="LinkedIn" rel="noopener" target="_blank">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>}
          {SOCIAL.instagram && <a href={SOCIAL.instagram} className="social-link" aria-label="Instagram" rel="noopener" target="_blank">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          </a>}
          {SOCIAL.x && <a href={SOCIAL.x} className="social-link" aria-label="X / Twitter" rel="noopener" target="_blank">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.258 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>}
        </div>
      </div>

      <div className="footer-links">
        <div className="footer-col">
          <span className="footer-col__heading label">Services</span>
          <ul>
            <li><a href="/services/ai-marketing-strategy">AI Marketing Strategy</a></li>
            <li><a href="/services/ai-content-marketing">AI Content Marketing</a></li>
            <li><a href="/services/ai-powered-seo">AI-Powered SEO</a></li>
            <li><a href="/services/ai-advertising">AI Advertising</a></li>
            <li><a href="/services/marketing-automation">Marketing Automation</a></li>
            <li><a href="/services/ai-website-design">AI Website Design</a></li>
            <li><a href="/services/ai-presentation-design">AI Presentation Design</a></li>
            <li><a href="/services/growth-marketing">Growth Marketing</a></li>
          </ul>
          <span className="footer-col__heading label" style={{ marginTop: 24, display: 'block' }}>Solutions</span>
          <ul>
            <li><a href="/generative-engine-optimization">Generative Engine Optimization</a></li>
            <li><a href="/ai-marketing-for-small-business">AI Marketing for Small Business</a></li>
            <li><a href="/ai-marketing-for-ecommerce">AI Marketing for eCommerce</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <span className="footer-col__heading label">Company</span>
          <ul>
            <li><a href={`${base}#home`}>Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href={`${base || '/'}#case-studies`}>Case Studies</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <span className="footer-col__heading label">Get in Touch</span>
          <ul className="footer-contact">
            <li>
              <span className="label">Email</span>
              <a href="mailto:hello@futureforwardstudio.com">hello@futureforwardstudio.com</a>
            </li>
            <li>
              <span className="label">Availability</span>
              <span className="footer-status">
                <span className="status-dot" />
                Open for new projects
              </span>
            </li>
            <li>
              <span className="label">Based</span>
              <span>Worldwide · Remote-First</span>
            </li>
          </ul>
          <SpotButton href={AUDIT_HREF} data-audit className="spot-btn--primary spot-btn--sm footer-cta">{AUDIT_LABEL_SHORT} →</SpotButton>
        </div>
      </div>
    </div>

    <div className="footer-bottom">
      <span>© {new Date().getFullYear()} Future Forward Studio. All rights reserved.</span>
      <span className="footer-bottom__tagline">AI-powered marketing. Human-powered ideas. Forward-thinking growth.</span>
      <div className="footer-legal">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
      </div>
    </div>
  </footer>
  )
}
