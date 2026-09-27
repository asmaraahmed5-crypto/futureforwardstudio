import { Warp } from '@paper-design/shaders-react'
import { Rocket, TrendingUp, ShoppingBag, Users, Building2, Award, ArrowRight } from 'lucide-react'
import { SpotButton } from './SpotButton'
import './WhoWeWorkWith.css'

const AUDIENCE = [
  {
    icon: Rocket,
    label: 'Startups',
    desc: 'Build your marketing engine without building a massive department.',
  },
  {
    icon: TrendingUp,
    label: 'Growing Businesses',
    desc: 'Scale your marketing without scaling the chaos.',
  },
  {
    icon: ShoppingBag,
    label: 'eCommerce Brands',
    desc: 'Improve acquisition, content, personalisation, and retention.',
  },
  {
    icon: Users,
    label: 'Service Businesses',
    desc: 'Turn visitors into conversations and conversations into customers.',
  },
  {
    icon: Building2,
    label: 'B2B Companies',
    desc: 'Build smarter lead-gen, content, nurturing, and conversion systems.',
  },
  {
    icon: Award,
    label: 'Established Businesses',
    desc: 'Modernise your marketing and bring AI where it creates real value.',
  },
]

// Original prompt shader configs
const SHADER_CONFIGS = [
  {
    proportion: 0.30, softness: 0.8,  distortion: 0.15, swirl: 0.6,  swirlIterations: 8,  shape: 'checks', shapeScale: 0.08,
    colors: ['hsl(280,100%,30%)', 'hsl(320,100%,60%)', 'hsl(340,90%,40%)', 'hsl(300,100%,70%)'],
  },
  {
    proportion: 0.40, softness: 1.2,  distortion: 0.20, swirl: 0.9,  swirlIterations: 12, shape: 'dots',   shapeScale: 0.12,
    colors: ['hsl(200,100%,25%)', 'hsl(180,100%,65%)', 'hsl(160,90%,35%)', 'hsl(190,100%,75%)'],
  },
  {
    proportion: 0.35, softness: 0.9,  distortion: 0.18, swirl: 0.7,  swirlIterations: 10, shape: 'checks', shapeScale: 0.10,
    colors: ['hsl(120,100%,25%)', 'hsl(140,100%,60%)', 'hsl(100,90%,30%)', 'hsl(130,100%,70%)'],
  },
  {
    proportion: 0.45, softness: 1.1,  distortion: 0.22, swirl: 0.8,  swirlIterations: 15, shape: 'dots',   shapeScale: 0.09,
    colors: ['hsl(30,100%,35%)',  'hsl(50,100%,65%)',  'hsl(40,90%,40%)',  'hsl(45,100%,75%)'],
  },
  {
    proportion: 0.38, softness: 0.95, distortion: 0.16, swirl: 0.85, swirlIterations: 11, shape: 'checks', shapeScale: 0.11,
    colors: ['hsl(250,100%,30%)', 'hsl(270,100%,65%)', 'hsl(260,90%,35%)', 'hsl(265,100%,70%)'],
  },
  {
    proportion: 0.42, softness: 1.0,  distortion: 0.19, swirl: 0.75, swirlIterations: 9,  shape: 'dots',   shapeScale: 0.13,
    colors: ['hsl(330,100%,30%)', 'hsl(350,100%,60%)', 'hsl(340,90%,35%)', 'hsl(345,100%,75%)'],
  },
]

export function WhoWeWorkWith() {
  return (
    <section className="section section--light wwww" id="about">
      <div className="section__inner">

        {/* Header */}
        <div className="wwww__header">
          <span className="label section-eyebrow">07 — Who We Work With</span>
          <h2>built for businesses that<br />refuse to stand still.</h2>
        </div>

        {/* Shader cards grid */}
        <div className="wwww__grid">
          {AUDIENCE.map(({ icon: Icon, label, desc }, i) => {
            const cfg = SHADER_CONFIGS[i]
            return (
              <div key={label} className="wwww__card">
                {/* WebGL shader background */}
                <div className="wwww__shader" aria-hidden="true">
                  <Warp
                    style={{ width: '100%', height: '100%' }}
                    proportion={cfg.proportion}
                    softness={cfg.softness}
                    distortion={cfg.distortion}
                    swirl={cfg.swirl}
                    swirlIterations={cfg.swirlIterations}
                    shape={cfg.shape}
                    shapeScale={cfg.shapeScale}
                    scale={1}
                    rotation={0}
                    speed={0.6}
                    colors={cfg.colors}
                  />
                </div>

                {/* Card content */}
                <div className="wwww__card-body">
                  <div className="wwww__icon">
                    <Icon size={22} strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <h3 className="wwww__card-title">{label.toLowerCase()}</h3>
                  <p className="wwww__card-desc">{desc}</p>
                  <span className="wwww__card-link">
                    Learn more <ArrowRight size={13} />
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="section__cta-row">
          <SpotButton href="#contact" className="spot-btn--dark">
            Talk to Future Forward Studio →
          </SpotButton>
        </div>
      </div>
    </section>
  )
}
