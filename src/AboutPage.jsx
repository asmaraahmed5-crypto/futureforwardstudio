import './App.css'
import './ServicePage.css'
import './AboutPage.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { ContactPopupHost } from './components/ContactPopupHost'
import { SpotButton } from './components/SpotButton'
import { sentenceCase } from './sentenceCase'
import { useReveal } from './useReveal'
import { Check, ArrowRight, Sparkles, UserCheck, Eye, Lightbulb, Gauge, HeartHandshake, Globe, Clock, Gift, Layers } from 'lucide-react'

const PROMISES = [
  'Clear ideas, not confusing tech talk',
  'AI only where it creates real value',
  'A real person behind every piece of work',
  'See the design before you buy it',
]

const VALUES = [
  { icon: Lightbulb,      title: 'Ideas first, tools second', desc: 'AI is powerful, but it is a tool. We start with your goals and pick the tools that serve them.' },
  { icon: UserCheck,      title: 'Humans in the loop',        desc: 'AI does the heavy lifting. People shape the strategy, check the quality and keep everything sounding like you.' },
  { icon: Eye,            title: 'Show, don’t promise',       desc: 'You should be able to see the work before you commit to it. That is why your first website design is free.' },
  { icon: Gauge,          title: 'Speed without shortcuts',   desc: 'We use AI to move faster, never to cut corners. Fast, and still sharp.' },
  { icon: HeartHandshake, title: 'Plain-speaking partners',   desc: 'No jargon, no smoke and mirrors. We explain what we are doing and why it matters.' },
  { icon: Layers,         title: 'Built to grow with you',    desc: 'Everything we build is meant to keep working as your business changes and scales.' },
]

const STEPS = [
  { title: 'Listen',  desc: 'We start by understanding your business, your customers and what you want to change.' },
  { title: 'Plan',    desc: 'We turn that into a clear plan with priorities you can actually follow.' },
  { title: 'Create',  desc: 'AI speeds up the work, our team makes sure it looks and sounds right.' },
  { title: 'Grow',    desc: 'We measure what happens, learn from it and keep moving your business forward.' },
]

const WHO = [
  { label: 'Startups',               desc: 'Build your marketing engine without building a massive department.' },
  { label: 'Growing Businesses',     desc: 'Scale your marketing without scaling the chaos.' },
  { label: 'eCommerce Brands',       desc: 'Improve acquisition, content, personalisation, and retention.' },
  { label: 'Service Businesses',     desc: 'Turn visitors into conversations and conversations into customers.' },
  { label: 'B2B Companies',          desc: 'Build smarter lead-gen, content, nurturing, and conversion systems.' },
  { label: 'Established Businesses', desc: 'Modernise your marketing and bring AI where it creates real value.' },
]

export default function AboutPage() {
  useReveal('.sv')

  return (
    <>
      <NavBar base="/" />

      <main className="sv">
        {/* ── Hero (dark) ── */}
        <section className="section section--dark sv-hero">
          <div className="sv-hero__glow" aria-hidden="true" />
          <div className="sv-hero__grid" aria-hidden="true" />
          <span className="sv-hero__num sv-hero__num--word" aria-hidden="true">About</span>

          <div className="sv-hero__layout">
            <div className="sv-hero__inner">
              <nav className="sv-crumb" aria-label="Breadcrumb">
                <a href="/">Home</a><span>/</span><span aria-current="page">About Us</span>
              </nav>
              <h1 className="sv-hero__title">AI-powered marketing. <span style={{ whiteSpace: 'nowrap' }}>Human-powered</span> ideas.</h1>
              <p className="sv-hero__lead">
                We’re Future Forward Studio, an AI-powered marketing agency helping ambitious businesses turn artificial intelligence into better marketing, smarter decisions and real growth.
              </p>
              <div className="sv-hero__cta">
                <SpotButton href="#contact" className="spot-btn--primary">Work with us →</SpotButton>
                <SpotButton href="/#services" className="spot-btn--ghost">See our services</SpotButton>
              </div>
            </div>

            <aside className="sv-hero__card" aria-label="Future Forward Studio at a glance">
              <span className="sv-hero__card-tag">At a glance</span>
              <ul>
                <li><span className="sv-ico"><Globe size={16} aria-hidden="true" /></span>Remote-first, working worldwide</li>
                <li><span className="sv-ico"><Clock size={16} aria-hidden="true" /></span>Open 24/7 for new projects</li>
                <li><span className="sv-ico"><Sparkles size={16} aria-hidden="true" /></span>8 AI marketing services</li>
                <li><span className="sv-ico"><Gift size={16} aria-hidden="true" /></span>First website design is free</li>
              </ul>
            </aside>
          </div>
        </section>

        {/* ── Story (light) ── */}
        <section className="section section--light sv-overview">
          <div className="sv-split">
            <div className="sv-split__copy" data-reveal>
              <span className="label section-eyebrow">Our story</span>
              <h2>Marketing is a lot. We make it lighter.</h2>
              <p className="sv-lead">SEO. Social. Content. Paid ads. Email. Analytics. Automation. And somehow you’re expected to keep up with every new AI tool that launches this Tuesday.</p>
              <p>Future Forward Studio exists to take that weight off your shoulders. We combine AI, strategy, creativity and automation with a little human magic, so your marketing works harder without burning out your team.</p>
              <p>We’re not here to bury you in buzzwords. We’re here to find where AI genuinely helps your business, put it to work, and explain it in plain language along the way.</p>
              <SpotButton href="#contact" className="spot-btn--dark">Tell us what you’re building →</SpotButton>
            </div>
            <div className="sv-fit" data-reveal>
              <span className="sv-fit__tag">Our promise</span>
              <ul>
                {PROMISES.map((p) => (
                  <li key={p}><span className="sv-fit__tick"><Check size={14} aria-hidden="true" /></span>{p}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── What we believe (dark) ── */}
        <section className="section section--dark sv-included">
          <div className="sv-wrap">
            <div className="sv-head" data-reveal>
              <span className="label section-eyebrow">What we believe</span>
              <h2>The way we think about the work.</h2>
            </div>
            <ul className="sv-cards">
              {VALUES.map(({ icon: Icon, title, desc }, i) => (
                <li key={title} className="sv-card" data-reveal style={{ '--d': `${i * 70}ms` }}>
                  <span className="sv-card__ico"><Icon size={22} aria-hidden="true" /></span>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── How we work (light) ── */}
        <section className="section section--light sv-process">
          <div className="sv-wrap">
            <div className="sv-head sv-head--dark" data-reveal>
              <span className="label section-eyebrow">How we work</span>
              <h2>Simple, from first hello to real growth.</h2>
            </div>
            <ol className="sv-steps">
              {STEPS.map((s, i) => (
                <li key={s.title} className="sv-step" data-reveal style={{ '--d': `${i * 90}ms` }}>
                  <span className="sv-step__num">{String(i + 1).padStart(2, '0')}</span>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── Who we work with (dark) ── */}
        <section className="section section--dark sv-more ab-who">
          <div className="sv-wrap">
            <div className="sv-head" data-reveal>
              <span className="label section-eyebrow">Who we work with</span>
              <h2>Built for businesses ready to move forward.</h2>
            </div>
            <ul className="ab-who__grid">
              {WHO.map((w, i) => (
                <li key={w.label} className="ab-who__item" data-reveal style={{ '--d': `${i * 60}ms` }}>
                  <h3>{sentenceCase(w.label)}</h3>
                  <p>{w.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Tagline band ── */}
        <section className="sv-outcomes ab-band">
          <div className="sv-wrap sv-outcomes__inner">
            <div data-reveal>
              <span className="sv-outcomes__tag">The Future Forward way</span>
              <h2>Smart tech. Real people. Forward-thinking growth.</h2>
            </div>
            <ul>
              <li data-reveal><span className="sv-fit__tick"><Check size={14} aria-hidden="true" /></span>AI-powered marketing</li>
              <li data-reveal style={{ '--d': '90ms' }}><span className="sv-fit__tick"><Check size={14} aria-hidden="true" /></span>Human-powered ideas</li>
              <li data-reveal style={{ '--d': '180ms' }}><span className="sv-fit__tick"><Check size={14} aria-hidden="true" /></span>Forward-thinking growth</li>
            </ul>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="section section--light sv-final">
          <div className="sv-final__box" data-reveal>
            <div className="sv-final__copy">
              <span className="sv-outcomes__tag">Ready when you are</span>
              <h2>Let’s build what’s next, together.</h2>
              <p>Tell us what you’re working on. We’ll come back with clear ideas, not confusing tech talk.</p>
            </div>
            <div className="sv-final__cta">
              <SpotButton href="#contact" className="spot-btn--primary">Start a project <ArrowRight size={16} aria-hidden="true" /></SpotButton>
              <span className="sv-final__note">Your first website design is free.</span>
            </div>
          </div>
        </section>
      </main>

      <Footer base="/" />
      <ContactPopupHost />
    </>
  )
}
