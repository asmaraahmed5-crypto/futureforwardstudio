import { useEffect, useState } from 'react'
import { X, Gift, ChevronDown } from 'lucide-react'
import { SpotButton } from './SpotButton'
import './ContactPopup.css'

const EMAIL = 'hello@futureforwardstudio.com'

const HELP_OPTIONS = [
  { label: 'A brand-new website' },
  { label: 'A website glow-up' },
  { label: 'AI-powered marketing' },
  { label: 'Branding & design' },
  { label: 'More leads & growth' },
  { label: "I'm not sure yet" },
]

const EMPTY = { name: '', business: '', email: '', phone: '', website: '', message: '' }

export function ContactPopup({ open, onClose }) {
  const [values, setValues] = useState(EMPTY)
  const [help, setHelp] = useState('')
  const [sent, setSent] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  const set = (key) => (e) => setValues((v) => ({ ...v, [key]: e.target.value }))

  const onSubmit = (e) => {
    e.preventDefault()
    const body = [
      `Name: ${values.name}`,
      `Business: ${values.business}`,
      `Email: ${values.email}`,
      `Phone: ${values.phone || '—'}`,
      `Website: ${values.website || '—'}`,
      `Looking for: ${help || '—'}`,
      '',
      values.message,
    ].join('\n')
    const link = document.createElement('a')
    link.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      `New enquiry from ${values.name || 'the website'}`
    )}&body=${encodeURIComponent(body)}`
    link.click()
    setSent(true)
    setTimeout(() => window.location.assign('/thank-you'), 700)
  }

  return (
    <div className="cp-backdrop" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose() }}>
      <div className="cp-dialog" role="dialog" aria-modal="true" aria-labelledby="cp-title">
        <button type="button" className="cp-close" onClick={onClose} aria-label="Close">
          <X size={18} />
        </button>

        {/* ── Left: phone mockup ── */}
        <div className="cp-visual">
          <img
            src="/img/free-design-phone.jpg"
            alt="A person holding a phone showing a freshly designed website"
            width="900" height="1200"
          />
          <div className="cp-visual__shade" />
          <div className="cp-visual__copy">
            <span className="cp-visual__badge">Free</span>
            <p className="cp-visual__free">Your First Website Design Is Free</p>
            <p className="cp-visual__sub">See it before you buy it. No guessing, just a real design for your business.</p>
          </div>
        </div>

        {/* ── Right: form ── */}
        <div className="cp-panel">
          <div className="cp-banner">
            <Gift size={16} aria-hidden="true" />
            Your First Website Design Is Free
          </div>

          {sent ? (
            <div className="cp-success" role="status">
              <h2 id="cp-title">your email app should be open.</h2>
              <p>
                Hit send on the message we’ve prepared and it’ll land in our inbox. Didn’t open? Email{' '}
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
              </p>
              <button type="button" className="cp-link" onClick={() => setSent(false)}>← Edit my details</button>
            </div>
          ) : (
            <form className="cp-form" onSubmit={onSubmit}>
              <span className="cp-eyebrow">Contact Us</span>
              <h2 id="cp-title" className="cp-title">let’s make something awesome.</h2>
              <p className="cp-lead">Tell us a little about you. The basics are plenty.</p>

              <div className="cp-grid">
                <label className="cp-field">
                  <span className="cp-label">Name</span>
                  <input type="text" required autoComplete="name" placeholder="Your name" value={values.name} onChange={set('name')} />
                </label>
                <label className="cp-field">
                  <span className="cp-label">Business Name</span>
                  <input type="text" autoComplete="organization" placeholder="Your business" value={values.business} onChange={set('business')} />
                </label>
                <label className="cp-field">
                  <span className="cp-label">Email Address</span>
                  <input type="email" required autoComplete="email" placeholder="you@company.com" value={values.email} onChange={set('email')} />
                </label>
                <label className="cp-field">
                  <span className="cp-label">Phone Number <em>(optional)</em></span>
                  <input type="tel" autoComplete="tel" placeholder="+1 555 000 0000" value={values.phone} onChange={set('phone')} />
                </label>
                <label className="cp-field cp-field--full">
                  <span className="cp-label">Website URL</span>
                  <input type="text" inputMode="url" autoComplete="url" placeholder="yourwebsite.com" value={values.website} onChange={set('website')} />
                </label>
                <label className="cp-field cp-field--full">
                  <span className="cp-label">What can we help with?</span>
                  <span className="cp-select">
                    <select value={help} onChange={(e) => setHelp(e.target.value)} required>
                      <option value="" disabled>Choose an option</option>
                      {HELP_OPTIONS.map(({ label }) => (
                        <option key={label} value={label}>{label}</option>
                      ))}
                    </select>
                    <ChevronDown size={16} aria-hidden="true" />
                  </span>
                </label>
                <label className="cp-field cp-field--full">
                  <span className="cp-label">Tell us what’s on your mind</span>
                  <textarea
                    className="cp-textarea" rows="3" required
                    placeholder="What are you trying to build, fix, improve, or grow?"
                    value={values.message} onChange={set('message')}
                  />
                </label>
              </div>

              <SpotButton type="submit" className="spot-btn--dark cp-submit">Let’s make it happen →</SpotButton>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
