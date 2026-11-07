import { Check } from 'lucide-react'
import { SpotButton } from './SpotButton'
import { PLANS } from '../plansData'
import './Pricing.css'

export function Pricing() {
  return (
    <section className="section section--dark" id="pricing">
      <div className="section__inner section__inner--centered">
        <span className="label section-eyebrow">Pricing</span>
        <h2>Straightforward pricing.<br />Serious results.</h2>
        <p className="section__sub">No hidden fees. No lock-in contracts. Just AI-powered marketing that earns its keep every month.</p>
      </div>

      <div className="pricing-grid section__inner">
        {PLANS.map((plan) => (
          <div key={plan.name} className={`pricing-card${plan.featured ? ' pricing-card--featured' : ''}`}>
            {plan.badge && <span className="pricing-badge">{plan.badge}</span>}
            <div className="pricing-card__top">
              <span className="pricing-name label">{plan.name}</span>
              <div className="pricing-price">
                <span className="pricing-amount">{plan.price}</span>
                {plan.period && <span className="pricing-period">{plan.period}</span>}
              </div>
              <p className="pricing-desc">{plan.desc}</p>
            </div>

            <ul className="pricing-features">
              {plan.features.map((f) => (
                <li key={f} className="pricing-feature">
                  <Check size={15} className="pricing-check" aria-hidden="true" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <SpotButton
              href="#contact"
              className={plan.featured ? 'spot-btn--primary' : 'spot-btn--ghost'}
            >
              {plan.cta}
            </SpotButton>
          </div>
        ))}
      </div>

      <p className="pricing-note section__inner">
        All plans include a free 30-minute AI marketing audit. Not sure which plan fits? <a href="#contact" className="pricing-note__link">Let's talk.</a> <a href="/pricing" className="pricing-note__link">See full pricing details →</a>
      </p>
    </section>
  )
}
