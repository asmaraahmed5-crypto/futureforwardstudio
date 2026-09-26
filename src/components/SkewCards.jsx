import './SkewCards.css'
import { SpotButton } from './SpotButton'

const GRADIENTS = [
  ['#5b21b6', '#a855f7'],
  ['#1e40af', '#06b6d4'],
  ['#0f766e', '#34d399'],
  ['#be185d', '#fb923c'],
  ['#1e3a8a', '#7c3aed'],
  ['#92400e', '#fbbf24'],
  ['#115e59', '#5eead4'],
  ['#312e81', '#818cf8'],
]

export function SkewCards({ services }) {
  return (
    <div className="skew-cards">
      {services.map(({ num, title, desc }, i) => {
        const [from, to] = GRADIENTS[i % GRADIENTS.length]
        const grad = `linear-gradient(315deg, ${from}, ${to})`
        return (
          <div key={num} className="skew-card">
            <span className="skew-card__panel" style={{ background: grad }} />
            <span className="skew-card__panel skew-card__panel--blur" style={{ background: grad }} />

            <span className="skew-card__blobs" aria-hidden>
              <span className="skew-card__blob skew-card__blob--tl" />
              <span className="skew-card__blob skew-card__blob--br" />
            </span>

            <div className="skew-card__content">
              <span className="skew-card__num">{num}</span>
              <h3 className="skew-card__title">{title.toLowerCase()}</h3>
              <p className="skew-card__desc">{desc}</p>
              <SpotButton href="#contact" className="spot-btn--primary skew-card__btn">
                Learn More →
              </SpotButton>
            </div>
          </div>
        )
      })}
    </div>
  )
}
