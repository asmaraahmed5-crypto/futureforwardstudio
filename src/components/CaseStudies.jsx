import { ArrowRight } from 'lucide-react'
import { SpotButton } from './SpotButton'
import './CaseStudies.css'

const CASES = [
  {
    tag: 'eCommerce · AI Advertising',
    title: 'How Vela Commerce cut ad spend by 30% and tripled qualified leads in one quarter.',
    result: '3× leads',
    metric: '−30% ad spend',
    img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&q=75&fm=webp',
    alt: 'eCommerce growth dashboard',
    w: 800, h: 600,
  },
  {
    tag: 'SaaS · Marketing Automation',
    title: 'Stackable SaaS went from manual follow-ups to a fully automated pipeline — in 6 weeks.',
    result: '6× faster',
    metric: '+210% pipeline',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop&q=75&fm=webp',
    alt: 'SaaS marketing automation',
    w: 800, h: 450,
  },
  {
    tag: 'B2B · AI-Powered SEO',
    title: 'Brightpath Consulting went from page 4 to page 1 for their most valuable search terms.',
    result: 'Page 1',
    metric: '+380% organic',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop&q=75&fm=webp',
    alt: 'SEO analytics growth',
    w: 800, h: 450,
  },
]

export function CaseStudies() {
  return (
    <section className="section section--light case-studies" id="case-studies">
      <div className="section__inner">

        <div className="case-studies__header">
          <div className="case-studies__header-left">
            <span className="label section-eyebrow">05 — Case Studies</span>
            <h2>results that actually<br />speak for themselves.</h2>
          </div>
          <div className="case-studies__header-right">
            <p className="case-studies__sub">
              Every engagement is different. The goal is always the same: real outcomes for real businesses.
            </p>
            <SpotButton href="#contact" className="spot-btn--dark">
              See All Case Studies <ArrowRight size={14} />
            </SpotButton>
          </div>
        </div>

        <div className="case-studies__grid">
          {CASES.map(({ tag, title, result, metric, img, alt, w, h }, i) => (
            <article key={i} className={`cs-card${i === 0 ? ' cs-card--featured' : ''}`}>
              <div className="cs-card__img-wrap">
                <img src={img} alt={alt} className="cs-card__img" width={w} height={h} loading="lazy" />
                <div className="cs-card__metrics">
                  <span className="cs-card__metric">{result}</span>
                  <span className="cs-card__metric">{metric}</span>
                </div>
              </div>
              <div className="cs-card__body">
                <span className="cs-card__tag label">{tag}</span>
                <h3 className="cs-card__title">{title}</h3>
                <a href="#contact" className="cs-card__link">
                  Read case study <ArrowRight size={13} />
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
