import { useState } from 'react'
import './App.css'
import './ContactPage.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { ChevronDown, Globe, Clock, Mail, Phone, Gift } from 'lucide-react'
import { SpotButton } from './components/SpotButton'

const EMAIL = 'hello@futureforwardstudio.com'
const PHONE = '' // e.g. '+1 555 000 0000' — the phone row stays hidden until this is set

const HELP_OPTIONS = [
  { label: 'A brand-new website' },
  { label: 'A website glow-up' },
  { label: 'AI-powered marketing' },
  { label: 'Branding & design' },
  { label: 'More leads & growth' },
  { label: "I'm not sure yet" },
]

const STEPS = [
  { num: '01', img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=480&h=300&fit=crop&q=75&fm=webp', title: 'You tell us what’s up.',     desc: 'Fill in the form. A few details are all we need to get started.' },
  { num: '02', img: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=480&h=300&fit=crop&q=75&fm=webp', title: 'We do a little digging.',    desc: 'We’ll look at your business, your goals, and where you are right now.' },
  { num: '03', img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=480&h=300&fit=crop&q=75&fm=webp', title: 'We come back with ideas.',   desc: 'No confusing tech talk. Just clear ideas that make sense for your business.' },
  { num: '04', img: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=480&h=300&fit=crop&q=75&fm=webp', title: 'We make it happen.',         desc: 'Once you’re happy with the direction, we get to work.' },
]

const FREE_POINTS = [
  { title: 'Like it?',           desc: 'Let’s build it.' },
  { title: 'Want changes?',      desc: 'Tell us what you’d like to tweak.' },
  { title: 'Not feeling it?',    desc: 'No hard feelings.' },
]

const IMG = {
  notSure: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=900&h=760&fit=crop&q=75&fm=webp',
  free:    'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&h=520&fit=crop&q=75&fm=webp',
  final:   'https://images.unsplash.com/photo-1551434678-e076c223a692?w=900&h=820&fit=crop&q=75&fm=webp',
}

const EMPTY = { name: '', business: '', email: '', phone: '', website: '', message: '' }

export default function ContactPage() {
  const [values, setValues] = useState(EMPTY)
  const [help, setHelp] = useState('')
  const [sent, setSent] = useState(false)

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
    <>
      <NavBar base="/" contactHref="#form" />

      <main className="ct">
        {/* ── Hero (dark) ── */}
        <section className="section section--dark ct-hero">
          <video className="ct-hero__video" autoPlay muted loop playsInline preload="auto" aria-hidden="true">
            <source src="/video/contact-hero.mp4" type="video/mp4" />
          </video>
          <div className="ct-hero__shade" aria-hidden="true" />
          <div className="ct-hero__inner">
            <div className="hero__eyebrow">
              <span className="rule" />
              <span className="label">Contact Us</span>
              <span className="rule" />
            </div>
            <h1 className="ct-hero__title">let’s make something awesome.</h1>
            <p className="ct-hero__lead">
              Got an idea? A website that needs a little love? Or just curious about what AI can do for your business?
              <strong> You’re in the right place.</strong>
            </p>
            <p className="ct-hero__sub">
              Tell us what you’re working on, what’s bugging you, or what you’d love to improve. You don’t need a fancy brief or a perfectly planned idea. Just give us the basics and we’ll help you figure out the rest.
            </p>
          </div>
        </section>

        {/* ── Form (light) ── */}
        <section className="section section--light ct-form-section" id="form">
          <div className="ct-form-layout">
          <aside className="ct-info">
            <span className="label ct-info__eyebrow">Get in touch</span>
            <h2 className="ct-info__title">talk to a real human.</h2>
            <p className="ct-info__lead">Tell us what you’re working on and we’ll come back with clear ideas, not confusing tech talk.</p>
            <ul className="ct-info__list">
              <li><Globe size={18} aria-hidden="true" /><span><strong>Available worldwide</strong>Remote-first, working with businesses everywhere.</span></li>
              <li><Clock size={18} aria-hidden="true" /><span><strong>Open 24/7</strong>Send a message any time, day or night.</span></li>
              <li><Mail size={18} aria-hidden="true" /><span><strong>Email</strong><a href={`mailto:${EMAIL}`}>{EMAIL}</a></span></li>
              {PHONE && (
                <li><Phone size={18} aria-hidden="true" /><span><strong>Phone</strong><a href={`tel:${PHONE.replace(/[^+\d]/g, '')}`}>{PHONE}</a></span></li>
              )}
            </ul>
            <div className="ct-info__free"><Gift size={18} aria-hidden="true" /> Your first website design is free</div>
          </aside>
          <div className="ct-form-wrap">
            <h2 className="ct-form__heading">Still “thinking about” that website? 👀 Let’s fix that.</h2>
            <p className="ct-form__sub">Tell us what you’re building and let’s turn the idea into something real. 🚀</p>

            {sent ? (
              <div className="ct-success" role="status">
                <h3>your email app should be open.</h3>
                <p>
                  Hit send on the message we’ve prepared and it’ll land straight in our inbox. Didn’t open? Email us at{' '}
                  <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
                </p>
                <button type="button" className="ct-link-btn" onClick={() => setSent(false)}>
                  ← Edit my details
                </button>
              </div>
            ) : (
              <form className="ct-form" onSubmit={onSubmit}>
                <div className="ct-grid">
                  <label className="ct-field">
                    <span className="ct-field__label">Name</span>
                    <input type="text" required autoComplete="name" placeholder="Your name" value={values.name} onChange={set('name')} />
                  </label>
                  <label className="ct-field">
                    <span className="ct-field__label">Business Name</span>
                    <input type="text" autoComplete="organization" placeholder="Your business" value={values.business} onChange={set('business')} />
                  </label>
                  <label className="ct-field">
                    <span className="ct-field__label">Email Address</span>
                    <input type="email" required autoComplete="email" placeholder="you@company.com" value={values.email} onChange={set('email')} />
                  </label>
                  <label className="ct-field">
                    <span className="ct-field__label">Phone Number <em>(optional)</em></span>
                    <input type="tel" autoComplete="tel" placeholder="+1 555 000 0000" value={values.phone} onChange={set('phone')} />
                  </label>
                  <label className="ct-field ct-field--full">
                    <span className="ct-field__label">Website URL</span>
                    <input type="text" inputMode="url" autoComplete="url" placeholder="yourwebsite.com" value={values.website} onChange={set('website')} />
                  </label>
                </div>

                <label className="ct-field ct-field--full">
                  <span className="ct-field__label">What can we help with?</span>
                  <span className="ct-select">
                    <select required value={help} onChange={(e) => setHelp(e.target.value)}>
                      <option value="" disabled>Choose an option</option>
                      {HELP_OPTIONS.map(({ label }) => (
                        <option key={label} value={label}>{label}</option>
                      ))}
                    </select>
                    <ChevronDown size={16} aria-hidden="true" />
                  </span>
                </label>

                <label className="ct-field ct-field--full">
                  <span className="ct-field__label">Tell us what’s on your mind</span>
                  <textarea rows="5" required placeholder="What are you trying to build, fix, improve, or grow?" value={values.message} onChange={set('message')} />
                </label>

                <SpotButton type="submit" className="spot-btn--primary ct-submit">Let’s make it happen →</SpotButton>
              </form>
            )}
          </div>
          </div>
        </section>

        {/* ── Not sure (dark) ── */}
        <section className="section section--dark ct-notsure">
          <div className="ct-split">
            <div className="ct-split__copy">
              <span className="label section-eyebrow">No Pressure</span>
              <h2>not sure what you need? no biggie.</h2>
              <p className="ct-notsure__lead">You don’t have to walk in knowing all the answers.</p>
              <p>
                Maybe your website looks like it belongs in 2015. Maybe you’re tired of marketing that gets likes but not customers. Maybe you’ve heard everyone talking about AI and thought, “Okay… but how can it actually help my business?”
              </p>
              <p className="ct-notsure__close">Tell us what’s going on. We’ll help you find the smart way forward.</p>
            </div>
            <figure className="ct-photo">
              <img src={IMG.notSure} alt="Laptop and coffee on a desk, ready to talk through ideas" width="900" height="760" loading="lazy" />
            </figure>
          </div>
        </section>

        {/* ── Free first design (light) ── */}
        <section className="section section--light ct-free">
          <div className="ct-free__inner">
            <div className="ct-free__copy">
              <span className="label section-eyebrow">Thinking About a New Website?</span>
              <h2>see it before you buy it.</h2>
              <p className="ct-free__lead">
                Yep, your first website design is <strong>completely free.</strong>
              </p>
              <p>
                We’ll create the first design so you can actually see what your new website could look like before spending a penny.
              </p>
            </div>
            <div className="ct-free__card">
              <img className="ct-free__img" src={IMG.free} alt="Colour palettes and design sketches for a new website" width="900" height="520" loading="lazy" />
              <span className="ct-free__badge">Free</span>
              <ul className="ct-free__list">
                {FREE_POINTS.map((p) => (
                  <li key={p.title}>
                    <strong>{p.title}</strong> {p.desc}
                  </li>
                ))}
              </ul>
              <p className="ct-free__note">No buying based on promises. No guessing. Just see it first.</p>
            </div>
          </div>
        </section>

        {/* ── What happens next (dark) ── */}
        <section className="section section--dark ct-steps">
          <div className="ct-steps__inner">
            <h2>so, what happens after you hit send?</h2>
            <ol className="ct-steps__grid">
              {STEPS.map((s) => (
                <li key={s.num} className="ct-step">
                  <img className="ct-step__img" src={s.img} alt="" width="480" height="300" loading="lazy" />
                  <span className="ct-step__num">{s.num}</span>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── Final CTA (light) ── */}
        <section className="section section--light ct-final">
          <div className="ct-split ct-split--rev">
            <div className="ct-split__copy">
              <h2>your next big idea could start here.</h2>
              <p className="ct-final__lead">
                A better website. Smarter marketing. More customers. A brand that finally feels like you.
              </p>
              <p>Whatever you’re thinking about, let’s talk.</p>
              <SpotButton href="#form" className="spot-btn--dark">Let’s get started →</SpotButton>
            </div>
            <figure className="ct-photo">
              <img src={IMG.final} alt="A designer working at a laptop in a bright studio" width="900" height="820" loading="lazy" />
            </figure>
          </div>
        </section>
      </main>

      <Footer base="/" contactHref="#form" />
    </>
  )
}
