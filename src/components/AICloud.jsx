import { Sparkles, BarChart2, Zap, Target, TrendingUp, Rocket } from 'lucide-react'
import { SpotButton } from './SpotButton'
import './AICloud.css'

const STEPS = [
  { icon: Sparkles,   title: 'Create',      desc: 'Generate ideas, campaigns, content, and messaging faster.' },
  { icon: BarChart2,  title: 'Understand',  desc: 'Turn customer behaviour and data into useful insights.' },
  { icon: Zap,        title: 'Automate',    desc: 'Let AI handle repetitive workflows and marketing tasks.' },
  { icon: Target,     title: 'Personalise', desc: 'Create messaging that feels more relevant to each customer.' },
  { icon: TrendingUp, title: 'Optimise',    desc: "Spot what's working, what's not, and where to improve." },
  { icon: Rocket,     title: 'Grow',        desc: 'Turn insights into decisions that move your business forward.' },
]

export function AICloud() {
  return (
    <section className="section section--light" id="cloud">
      <div className="ai-cloud">

        {/* ── Left: image ── */}
        <div className="ai-cloud__img-col">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=1400&fit=crop&q=80"
            alt="AI marketing cloud dashboard"
            className="ai-cloud__img"
            width="900" height="1400"
            loading="lazy"
          />
        </div>

        {/* ── Right: content + steps ── */}
        <div className="ai-cloud__content">
          <span className="label section-eyebrow ai-cloud__eyebrow">06 — AI Marketing Cloud</span>

          <h2 className="ai-cloud__h2">
            say hello to your<br />ai marketing cloud.
          </h2>

          <p className="ai-cloud__sub">
            Your marketing's new command center — one connected environment,
            less jumping between tools, and more{' '}
            <em>"Okay, now we know what to do."</em>
          </p>

          <ol className="ai-cloud__steps">
            {STEPS.map(({ icon: Icon, title, desc }, i) => {
              const isLast = i === STEPS.length - 1
              return (
                <li key={title} className="ai-cloud__step">
                  <div className="ai-cloud__step-rail">
                    <div className="ai-cloud__step-icon">
                      <Icon size={15} aria-hidden="true" />
                    </div>
                    {!isLast && <div className="ai-cloud__step-line" />}
                  </div>
                  <div className={`ai-cloud__step-body${isLast ? '' : ' ai-cloud__step-body--gap'}`}>
                    <h3 className="ai-cloud__step-title">{title.toLowerCase()}</h3>
                    <p className="ai-cloud__step-desc">{desc}</p>
                  </div>
                </li>
              )
            })}
          </ol>

          <SpotButton href="#contact" className="spot-btn--dark">
            Explore AI Marketing Cloud →
          </SpotButton>
        </div>

      </div>
    </section>
  )
}
