import { Check } from 'lucide-react'
import { SpotButton } from './SpotButton'
import './Pricing.css'

const PLANS = [
  {
    name: 'Launch',
    price: '$2,500',
    period: '/month',
    desc: 'For startups and small businesses ready to bring AI into their marketing.',
    features: [
      'AI Marketing Strategy & Roadmap',
      'AI Content Marketing (4 pieces/mo)',
      'AI-Powered SEO Audit & Setup',
      'Monthly Performance Report',
      'Email & Chat Support',
    ],
    cta: 'Get Started →',
    featured: false,
  },
  {
    name: 'Growth',
    price: '$5,000',
    period: '/month',
    desc: 'For growing businesses that want AI working across every marketing channel.',
    features: [
      'Everything in Launch',
      'AI Advertising (Google + Meta)',
      'Marketing Automation Workflows',
      'AI Website & Presentation Design',
      'Bi-weekly Strategy Calls',
      'Priority Support & Slack Access',
    ],
    cta: 'Start Growing →',
    featured: true,
    badge: 'Most Popular',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    desc: 'For established brands that need a fully tailored AI marketing system.',
    features: [
      'Everything in Growth',
      'Full AI Marketing Cloud Access',
      'Dedicated AI Marketing Strategist',
      'Custom Automation Architecture',
      'Weekly Calls + Dedicated Slack',
      'SLA + Onboarding Support',
    ],
    cta: 'Talk to Us →',
    featured: false,
  },
]

export function Pricing() {
  return (
    <section className="section section--dark" id="pricing">
      <div className="section__inner section__inner--centered">
        <span className="label section-eyebrow">Pricing</span>
        <h2>straightforward pricing.<br />serious results.</h2>
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
        All plans include a free 30-minute AI marketing audit. Not sure which plan fits? <a href="#contact" className="pricing-note__link">Let's talk.</a>
      </p>
    </section>
  )
}
