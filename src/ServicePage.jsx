import { useEffect } from 'react'
import './App.css'
import './ServicePage.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { ContactPopupHost } from './components/ContactPopupHost'
import { SpotButton } from './components/SpotButton'
import {
  ArrowRight, ArrowUpRight, Check, ChevronDown,
  Search, Target, Users, Map, Wrench, LineChart, Mic, CalendarDays, PenLine, Share2, Mail, ShieldCheck,
  FileText, Link2, Bot, Crosshair, Megaphone, Palette, Layers, Gauge, Workflow, Zap, Database, Bell,
  Gift, Layout, Smartphone, Rocket, BookOpen, Presentation, BarChart3, Image, LayoutTemplate, FileDown,
  Network, FlaskConical, Repeat, PieChart, Handshake,
} from 'lucide-react'
import { SERVICES, SERVICE_GRADIENTS, findService, serviceHref } from './servicesData'

const ICONS = {
  Search, Target, Users, Map, Wrench, LineChart, Mic, CalendarDays, PenLine, Share2, Mail, ShieldCheck,
  FileText, Link2, Bot, Crosshair, Megaphone, Palette, Layers, Gauge, Workflow, Zap, Database, Bell,
  Gift, Layout, Smartphone, Rocket, BookOpen, Presentation, BarChart3, Image, LayoutTemplate, FileDown,
  Network, FlaskConical, Repeat, PieChart, Handshake,
}

function getSlug() {
  const m = window.location.pathname.match(/^\/services\/([^/]+)/)
  return m ? m[1].toLowerCase() : ''
}

export default function ServicePage() {
  const service = findService(getSlug())
  const index = service ? SERVICES.indexOf(service) : 0
  const [from, to] = SERVICE_GRADIENTS[index % SERVICE_GRADIENTS.length]
  const others = SERVICES.filter((s) => s !== service)

  useEffect(() => {
    if (service) document.title = `${service.title} — Future Forward Studio`
    else document.title = 'Service not found — Future Forward Studio'

    // Reveal-on-scroll
    const root = document.querySelector('.sv')
    const els = document.querySelectorAll('.sv [data-reveal]')
    root?.classList.add('sv-js')
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      els.forEach((el) => el.classList.add('is-in'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target) }
      }),
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    )
    els.forEach((el) => io.observe(el))
    // Fail-safe: never leave content hidden if the observer doesn't fire
    const failsafe = setTimeout(() => els.forEach((el) => el.classList.add('is-in')), 3500)
    return () => { io.disconnect(); clearTimeout(failsafe) }
  }, [service])

  if (!service) {
    return (
      <>
        <NavBar base="/" />
        <main className="sv">
          <section className="section section--dark sv-hero sv-hero--solo">
            <div className="sv-hero__inner">
              <span className="sv-crumb">404</span>
              <h1 className="sv-hero__title">that service page doesn’t exist.</h1>
              <p className="sv-hero__lead">Here is everything we can help you with.</p>
              <SpotButton href="/#services" className="spot-btn--primary">See all services →</SpotButton>
            </div>
          </section>
        </main>
        <Footer base="/" />
        <ContactPopupHost />
      </>
    )
  }

  const theme = { '--sv-from': from, '--sv-to': to }

  return (
    <>
      <NavBar base="/" />

      <main className="sv" style={theme}>
        {/* ── Hero (dark) ── */}
        <section className="section section--dark sv-hero">
          <div className="sv-hero__glow" aria-hidden="true" />
          <div className="sv-hero__grid" aria-hidden="true" />
          <span className="sv-hero__num" aria-hidden="true">{service.num}</span>

          <div className="sv-hero__layout">
            <div className="sv-hero__inner">
              <nav className="sv-crumb" aria-label="Breadcrumb">
                <a href="/">Home</a><span>/</span><a href="/#services">Services</a><span>/</span><span aria-current="page">{service.title}</span>
              </nav>
              <h1 className="sv-hero__title">{service.headline}</h1>
              <p className="sv-hero__lead">{service.lead}</p>
              <div className="sv-hero__cta">
                <SpotButton href="#contact" className="spot-btn--primary">Start this project →</SpotButton>
                <SpotButton href="#included" className="spot-btn--ghost">See what’s included</SpotButton>
              </div>
            </div>

            <aside className="sv-hero__card" aria-label={`${service.title} at a glance`}>
              <span className="sv-hero__card-tag">{service.num} · {service.title}</span>
              <ul>
                {service.included.slice(0, 4).map((item) => {
                  const Icon = ICONS[item.icon] || Check
                  return (
                    <li key={item.title}>
                      <span className="sv-ico"><Icon size={16} aria-hidden="true" /></span>
                      {item.title}
                    </li>
                  )
                })}
              </ul>
              <span className="sv-hero__card-foot">+ {service.included.length - 4} more inside</span>
            </aside>
          </div>
        </section>

        {/* ── Overview (light) ── */}
        <section className="section section--light sv-overview">
          <div className="sv-split">
            <div className="sv-split__copy" data-reveal>
              <span className="label section-eyebrow">About this service</span>
              <h2>what it is, in plain english.</h2>
              {service.overview.map((p, i) => <p key={i} className={i === 0 ? 'sv-lead' : ''}>{p}</p>)}
              <SpotButton href="#contact" className="spot-btn--dark">Talk to us about it →</SpotButton>
            </div>
            <div className="sv-fit" data-reveal>
              <span className="sv-fit__tag">Great for</span>
              <ul>
                {service.forWho.map((w) => (
                  <li key={w}><span className="sv-fit__tick"><Check size={14} aria-hidden="true" /></span>{w}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── What's included (dark) ── */}
        <section className="section section--dark sv-included" id="included">
          <div className="sv-wrap">
            <div className="sv-head" data-reveal>
              <span className="label section-eyebrow">What’s included</span>
              <h2>everything you need, nothing you don’t.</h2>
            </div>
            <ul className="sv-cards">
              {service.included.map((item, i) => {
                const Icon = ICONS[item.icon] || Check
                return (
                  <li key={item.title} className="sv-card" data-reveal style={{ '--d': `${i * 70}ms` }}>
                    <span className="sv-card__ico"><Icon size={22} aria-hidden="true" /></span>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </li>
                )
              })}
            </ul>
          </div>
        </section>

        {/* ── Process (light) ── */}
        <section className="section section--light sv-process">
          <div className="sv-wrap">
            <div className="sv-head sv-head--dark" data-reveal>
              <span className="label section-eyebrow">How it works</span>
              <h2>from hello to results in four steps.</h2>
            </div>
            <ol className="sv-steps">
              {service.steps.map((s, i) => (
                <li key={s.title} className="sv-step" data-reveal style={{ '--d': `${i * 90}ms` }}>
                  <span className="sv-step__num">{String(i + 1).padStart(2, '0')}</span>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── Outcomes (gradient band) ── */}
        <section className="sv-outcomes">
          <div className="sv-wrap sv-outcomes__inner">
            <div data-reveal>
              <span className="sv-outcomes__tag">What changes</span>
              <h2>what you can expect.</h2>
            </div>
            <ul>
              {service.outcomes.map((o, i) => (
                <li key={o} data-reveal style={{ '--d': `${i * 90}ms` }}>
                  <span className="sv-fit__tick"><Check size={14} aria-hidden="true" /></span>{o}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── FAQ (light) ── */}
        <section className="section section--light sv-faq">
          <div className="sv-faq__inner">
            <div className="sv-head sv-head--dark" data-reveal>
              <span className="label section-eyebrow">Questions</span>
              <h2>things people ask us.</h2>
            </div>
            <div className="sv-faq__list" data-reveal>
              {service.faqs.map((f) => (
                <details key={f.q} className="sv-qa">
                  <summary>{f.q}<ChevronDown size={18} aria-hidden="true" /></summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── Other services (dark) ── */}
        <section className="section section--dark sv-more">
          <div className="sv-wrap">
            <div className="sv-head" data-reveal>
              <span className="label section-eyebrow">More services</span>
              <h2>works even better together.</h2>
            </div>
            <ul className="sv-more__grid">
              {others.map((s) => {
                const [a, b] = SERVICE_GRADIENTS[SERVICES.indexOf(s) % SERVICE_GRADIENTS.length]
                return (
                  <li key={s.slug} data-reveal>
                    <a href={serviceHref(s)} className="sv-more__item" style={{ '--a': a, '--b': b }}>
                      <span className="sv-more__num">{s.num}</span>
                      <span className="sv-more__title">{s.title}</span>
                      <ArrowUpRight size={18} aria-hidden="true" />
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="section section--light sv-final">
          <div className="sv-final__box" data-reveal>
            <div className="sv-final__copy">
              <span className="sv-outcomes__tag">Ready when you are</span>
              <h2>let’s talk about {service.title.toLowerCase()}.</h2>
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
