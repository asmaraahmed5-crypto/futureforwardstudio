import './App.css'
import './ServicePage.css'
import './PricingPage.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { ContactPopupHost } from './components/ContactPopupHost'
import { SpotButton } from './components/SpotButton'
import { useReveal } from './useReveal'
import { PLANS, COMPARE, PRICING_FAQS } from './plansData'
import { AUDIT_LABEL, AUDIT_HREF } from './siteConfig'
import { Check, Minus, ChevronDown, ArrowRight } from 'lucide-react'

const cell = (v) => v === true ? <Check size={18} aria-label="Included" /> : v === false ? <Minus size={18} aria-label="Not included" className="pp-no" /> : v

export default function PricingPage() {
  useReveal('.sv')
  return (
    <>
      <NavBar base="/" />
      <main className="sv" style={{ '--sv-from': '#5b21b6', '--sv-to': '#a855f7' }}>
        <section className="section section--dark sv-hero sv-hero--solo pp-hero">
          <div className="sv-hero__glow" aria-hidden="true" />
          <div className="sv-hero__grid" aria-hidden="true" />
          <div className="sv-hero__inner">
            <nav className="sv-crumb" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><span aria-current="page">Pricing</span></nav>
            <h1 className="sv-hero__title">Straightforward pricing. Serious results.</h1>
            <p className="sv-hero__lead">Most agencies hide their prices. We publish ours. Pick a plan, or start with a free AI marketing audit and decide afterwards.</p>
            <div className="sv-hero__cta" style={{ justifyContent: 'center' }}>
              <SpotButton href={AUDIT_HREF} data-audit className="spot-btn--primary">{AUDIT_LABEL} →</SpotButton>
              <SpotButton href="#plans" className="spot-btn--ghost">Compare plans</SpotButton>
            </div>
          </div>
        </section>

        <section className="section section--light pp-plans" id="plans">
          <div className="sv-wrap">
            <ul className="pp-grid">
              {PLANS.map((plan, i) => (
                <li key={plan.name} className={`pp-plan${plan.featured ? ' pp-plan--featured' : ''}`} data-reveal style={{ '--d': `${i * 80}ms` }}>
                  {plan.badge && <span className="pp-badge">{plan.badge}</span>}
                  <h2 className="pp-plan__name">{plan.name}</h2>
                  <p className="pp-plan__price"><span>{plan.price}</span>{plan.period && <em>{plan.period}</em>}</p>
                  <p className="pp-plan__desc">{plan.desc}</p>
                  <ul className="pp-plan__list">
                    {plan.features.map((f) => <li key={f}><Check size={16} aria-hidden="true" />{f}</li>)}
                  </ul>
                  <SpotButton href="#contact" className={plan.featured ? 'spot-btn--primary' : 'spot-btn--outline-dark'}>{plan.cta}</SpotButton>
                </li>
              ))}
            </ul>
            <p className="pp-note" data-reveal>All plans start with a free 30-minute AI marketing audit. Ad spend is paid directly to the ad platforms and is separate from our fee.</p>
          </div>
        </section>

        <section className="section section--dark pp-compare">
          <div className="sv-wrap">
            <div className="sv-head" data-reveal>
              <span className="label section-eyebrow">Compare plans</span>
              <h2>What each plan includes.</h2>
            </div>
            <div className="pp-table-wrap" data-reveal>
              <table className="pp-table">
                <thead><tr><th scope="col">Feature</th>{PLANS.map((p) => <th scope="col" key={p.name}>{p.name}</th>)}</tr></thead>
                <tbody>
                  {COMPARE.map(([label, ...vals]) => (
                    <tr key={label}><th scope="row">{label}</th>{vals.map((v, i) => <td key={i}>{cell(v)}</td>)}</tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="section section--light sv-faq">
          <div className="sv-faq__inner">
            <div className="sv-head sv-head--dark" data-reveal>
              <span className="label section-eyebrow">Pricing questions</span>
              <h2>Things people ask before they buy.</h2>
            </div>
            <div className="sv-faq__list" data-reveal>
              {PRICING_FAQS.map((f) => (
                <details key={f.q} className="sv-qa"><summary>{f.q}<ChevronDown size={18} aria-hidden="true" /></summary><p>{f.a}</p></details>
              ))}
            </div>
            <p className="pp-more" data-reveal>Want the full picture? Read our guide to <a href="/blog/ai-marketing-agency-pricing">AI marketing agency pricing</a> or <a href="/blog/ai-seo-pricing">AI SEO pricing</a>.</p>
          </div>
        </section>

        <section className="section section--light sv-final">
          <div className="sv-final__box" data-reveal>
            <div className="sv-final__copy">
              <span className="sv-outcomes__tag">Not sure which plan?</span>
              <h2>Start with a free audit.</h2>
              <p>We will review your marketing, point out the quick wins and recommend a plan that fits your goals and budget.</p>
            </div>
            <div className="sv-final__cta">
              <SpotButton href={AUDIT_HREF} data-audit className="spot-btn--primary">{AUDIT_LABEL} <ArrowRight size={16} aria-hidden="true" /></SpotButton>
              <span className="sv-final__note">Free, with no obligation.</span>
            </div>
          </div>
        </section>
      </main>
      <Footer base="/" />
      <ContactPopupHost />
    </>
  )
}
