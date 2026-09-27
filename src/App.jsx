import './App.css'
import NavBar from './components/NavBar'
import { ImageStreamHero } from './components/ImageStreamHero'
import { SpotButton } from './components/SpotButton'
import { ShuffleCta } from './components/ShuffleCta'
import { SkewCards } from './components/SkewCards'
import { JourneyTimeline } from './components/JourneyTimeline'
import { AICloud } from './components/AICloud'
import { WhoWeWorkWith } from './components/WhoWeWorkWith'
import { ClientLogos } from './components/ClientLogos'
import { CaseStudies } from './components/CaseStudies'
import { Testimonials } from './components/Testimonials'
import { LatestBlogs } from './components/LatestBlogs'
import { FAQ } from './components/FAQ'
import { Sparkles, ArrowRight } from 'lucide-react'

const CDN = 'https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev'

const UNS = 'https://images.unsplash.com/photo'

const HERO_IMAGES = [
  { src: `${UNS}-1750365920056-d4b4ca73fbaa?w=800&h=1100&fit=crop&q=80`, alt: 'AI marketing strategy' },
  { src: `${CDN}/gradients/hero_gradient/hero-gradients-01.png`,          alt: '' },
  { src: `${UNS}-1677212004257-103cfa6b59d0?w=800&h=1100&fit=crop&q=80`, alt: 'AI automation' },
  { src: `${UNS}-1707762890671-52ef6d6f51e7?w=800&h=1100&fit=crop&q=80`, alt: 'Marketing analytics dashboard' },
  { src: `${CDN}/gradients/hue-flow/hue-flow-01.png`,                    alt: '' },
  { src: `${UNS}-1542744174-a35e40ade835?w=800&h=1100&fit=crop&q=80`,   alt: 'Marketing strategy planning' },
  { src: `${UNS}-1759393852314-59dc00faeed3?w=800&h=1100&fit=crop&q=80`, alt: 'Content creation' },
  { src: `${CDN}/gradients/moon/moon-grade-03.png`,                       alt: '' },
  { src: `${UNS}-1777785113207-c0fdd05ae937?w=800&h=1100&fit=crop&q=80`, alt: 'AI advertising' },
  { src: `${UNS}-1643139863038-7355941e9e89?w=800&h=1100&fit=crop&q=80`, alt: 'Digital technology' },
  { src: `${UNS}-1586880244406-556ebe35f282?w=800&h=1100&fit=crop&q=80`, alt: 'Digital marketing' },
  { src: `${UNS}-1748439281934-2803c6a3ee36?w=800&h=1100&fit=crop&q=80`, alt: 'Data analytics' },
]

const SERVICES = [
  { num: '01', title: 'AI Marketing Strategy',  desc: 'We find the opportunities, build the roadmap, and show you exactly where AI fits in your marketing.' },
  { num: '02', title: 'AI Content Marketing',   desc: 'More content, at speed, that still sounds like you — not a robot. Blogs, social, email, campaigns.' },
  { num: '03', title: 'AI-Powered SEO',         desc: 'Combine AI-powered research with proven strategy to build content authority and get your business found.' },
  { num: '04', title: 'AI Advertising',         desc: 'AI-powered insights for smarter ad spend — better audiences, messaging, creative, and performance.' },
  { num: '05', title: 'Marketing Automation',   desc: 'Build smarter workflows that automate lead nurturing, follow-ups, and repetitive marketing tasks.' },
  { num: '06', title: 'Customer Intelligence',  desc: 'Turn the clues your customers leave everywhere into insights you can actually use.' },
  { num: '07', title: 'Marketing Analytics',    desc: 'No more drowning in dashboards. Simple answers: what\'s working, what\'s not, what to do next.' },
  { num: '08', title: 'Growth Marketing',       desc: 'Connect the dots across your marketing ecosystem and keep moving your business forward.' },
]

const CLOUD_FEATURES = [
  { title: 'Create',      desc: 'Generate ideas, campaigns, content, and messaging faster.' },
  { title: 'Understand',  desc: 'Turn customer behaviour and data into useful insights.'    },
  { title: 'Automate',    desc: 'Let AI handle repetitive workflows and marketing tasks.'   },
  { title: 'Personalise', desc: 'Create messaging that feels more relevant to each customer.' },
  { title: 'Optimise',    desc: 'Spot what\'s working, what\'s not, and where to improve.' },
  { title: 'Grow',        desc: 'Turn insights into decisions that move your business forward.' },
]

const WHO_ITS_FOR = [
  { label: 'Startups',               desc: 'Build your marketing engine without building a massive department.'                             },
  { label: 'Growing Businesses',     desc: 'Scale your marketing without scaling the chaos.'                                                },
  { label: 'eCommerce Brands',       desc: 'Improve acquisition, content, personalisation, and retention.'                                  },
  { label: 'Service Businesses',     desc: 'Turn visitors into conversations and conversations into customers.'                              },
  { label: 'B2B Companies',          desc: 'Build smarter lead-gen, content, nurturing, and conversion systems.'                            },
  { label: 'Established Businesses', desc: 'Modernise your marketing and bring AI where it creates real value.'                             },
]

const STRIP_LABELS = ['AI Strategy', 'Content Marketing', 'AI-Powered SEO', 'Advertising', 'Automation', 'Growth']

function ImgPh({ ratio, label }) {
  return (
    <div className="img-ph" style={{ aspectRatio: ratio || '16/9' }} role="img" aria-label={label || 'Image placeholder'}>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="1" y="1" width="30" height="30" rx="0" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3"/>
        <path d="M8 24L13 17L17 21L21 15L24 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="11" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    </div>
  )
}

function App() {
  return (
    <>
      <NavBar />

      <main>
        {/* ── Hero (dark) ── */}
        <ImageStreamHero
          images={HERO_IMAGES}
          cards={9}
          speed={20}
          axis={60}
          path={{ exitHeight: 68, cardWidth: 24, cardHeight: 32 }}
          className="hero-stream"
          id="home"
        >
          <div className="hero-stream__content">
            <div className="hero-stream__top">
              <div className="hero__eyebrow">
                <span className="rule" />
                <span className="label">AI-Powered Marketing Agency</span>
                <span className="rule" />
              </div>
              <h1>future-proof your<br />marketing. today.</h1>
              <p className="hero__sub">AI-powered marketing for businesses ready to move forward.</p>
            </div>
            <div className="hero-stream__bottom">
              <SpotButton href="#contact" className="spot-btn--primary">Make My Marketing Future-Ready →</SpotButton>
            </div>
          </div>
        </ImageStreamHero>


        {/* ── Client Logos (dark marquee) ── */}
        <ClientLogos />

        {/* ── 01 Value Prop — Spotlight ── */}
        <section className="section section--light spotlight" id="about">
          <div className="spotlight__inner">
            <div className="spotlight__text">
              <div className="spotlight__eyebrow">
                <Sparkles size={14} className="spotlight__icon" />
                <span className="label">01 — Your Unfair Advantage</span>
              </div>
              <h2 className="spotlight__heading">
                your marketing just got a{' '}
                <span className="spotlight__accent">brain upgrade.</span>
              </h2>
              <p className="spotlight__desc">
                Marketing is a lot. SEO. Social. Content. Paid ads. Emails. Lead generation. Analytics. Automation. And somehow you're expected to understand every new AI tool that launches this Tuesday.
              </p>
              <p className="spotlight__desc">
                Future Forward Studio combines <strong>AI, strategy, creativity, and automation</strong> with a little human magic to make your marketing work harder — without burning out your team.
              </p>
              <SpotButton href="#contact" className="spot-btn--dark spotlight__btn">Give My Marketing an AI Upgrade →</SpotButton>
            </div>
            <div className="spotlight__visual">
              <div className="spotlight__glow" />
              <img
                src="https://images.unsplash.com/photo-1617751218806-9077a9093d8b?w=700&h=875&fit=crop&q=85"
                alt="Abstract neon light waves"
                className="spotlight__img"
              />
            </div>
          </div>
        </section>

        {/* ── 02 Reality Check (dark) ── */}
        <section className="section section--dark rc-section">
          <div className="rc-inner">
            {/* Left: image */}
            <div className="rc-visual">
              <div className="rc-visual__glow" />
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=680&fit=crop&q=85"
                alt="Marketing analytics dashboard"
                className="rc-img"
              />
            </div>

            {/* Right: text + checklist */}
            <div className="rc-text">
              <span className="label section-eyebrow">02 — The Reality</span>
              <h2>marketing doesn't need more noise. it needs more intelligence.</h2>
              <ul className="rc-items">
                {[
                  'You create content. Nothing happens.',
                  'You run ads. Clicks come, but leads don\'t.',
                  'You optimise your website. Google isn\'t impressed.',
                  'You post consistently. Your social stays quiet.',
                ].map((item, i) => (
                  <li key={item} className="rc-item" style={{ animationDelay: `${0.3 + i * 0.1}s` }}>
                    <span className="rc-check" aria-hidden="true" />
                    <span className="rc-item-label">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-accent">Sometimes you're doing too much of the wrong stuff.</p>
              <p>AI helps us find what's actually working — what your audience wants, which content attracts attention, and where the real opportunities are hiding.</p>
              <SpotButton href="#contact" className="spot-btn--ghost">Find My Marketing Opportunities →</SpotButton>
            </div>
          </div>
        </section>

        {/* ── 03 How We Work (light) ── */}
        <section className="section section--light hw-section">
          <div className="hw-inner">
            <div className="hw-header">
              <span className="label section-eyebrow">03 — How We Work</span>
              <h2>ai does the heavy lifting.<br />we make sure it doesn't<br />lift the wrong thing.</h2>
              <p className="hw-header__desc">We combine AI's analytical power with human strategy to make every marketing decision smarter, faster, and more effective.</p>
              <SpotButton href="#contact" className="spot-btn--dark">
                Supercharge My Marketing <ArrowRight size={15} />
              </SpotButton>
            </div>

            <div className="hw-grid">
              {[
                {
                  role: 'AI brings',
                  title: 'the horsepower.',
                  desc: 'Analyse data, identify patterns, accelerate content, automate tasks, and optimise campaigns at scale.',
                  img: 'https://images.unsplash.com/photo-1677212004257-103cfa6b59d0?w=800&h=450&fit=crop&q=85',
                  alt: 'AI data processing',
                },
                {
                  role: 'We bring',
                  title: 'the steering wheel.',
                  desc: 'We decide what matters, where to focus, and how everything connects back to your business goals.',
                  img: 'https://images.unsplash.com/photo-1542744174-a35e40ade835?w=800&h=450&fit=crop&q=85',
                  alt: 'Marketing strategy planning',
                },
                {
                  role: 'You get',
                  title: 'the destination.',
                  desc: 'Efficient marketing. Better customer journeys. Smarter campaigns. A clearer path to growth.',
                  img: 'https://images.unsplash.com/photo-1707762890671-52ef6d6f51e7?w=800&h=450&fit=crop&q=85',
                  alt: 'Business growth results',
                },
              ].map((card) => (
                <div key={card.role} className="hw-card">
                  <img src={card.img} alt={card.alt} className="hw-card__img" />
                  <div className="hw-card__body">
                    <span className="label hw-card__role">{card.role}</span>
                    <h3 className="hw-card__title">{card.title}</h3>
                    <p className="hw-card__desc">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── ShuffleCta — AI Supercharges It (light) ── */}
        <section className="section section--light">
          <ShuffleCta />
        </section>

        {/* ── 04 Services (dark) ── */}
        <section className="section section--dark" id="services">
          <div className="section__inner section__inner--centered">
            <span className="label section-eyebrow">04 — What We Do</span>
            <h2>what can future forward<br />studio do for you?</h2>
            <p className="section__sub">Quite a bit.</p>
          </div>
          <SkewCards services={SERVICES} />
          <div className="section__inner section__inner--centered" style={{ marginTop: '16px' }}>
            <SpotButton href="#contact" className="spot-btn--primary" style={{ alignSelf: 'center' }}>Explore Our AI Marketing Services →</SpotButton>
          </div>
        </section>

        {/* ── 05 Case Studies (light) ── */}
        <CaseStudies />

        {/* ── 06 AI Cloud (light) ── */}
        <AICloud />

        {/* ── 06 Journey (dark) ── */}
        <JourneyTimeline />

        {/* ── 07 Who It's For (dark — shader cards) ── */}
        <WhoWeWorkWith />

        {/* ── Philosophy (dark) ── */}
        <section className="section section--dark section--philosophy">
          <div className="section__inner section__inner--centered">
            <span className="label section-eyebrow">Our Philosophy</span>
            <blockquote className="philosophy-quote">
              "We don't do AI just to<br />put 'AI' on the website."
            </blockquote>
            <p className="philosophy-sub">AI is everywhere. Everyone's using it. But we're only interested in one question: does it actually help your business?</p>
            <div className="philosophy-pillars">
              <span className="philosophy-pillar">Strategy first.</span>
              <span className="philosophy-pillar philosophy-pillar--accent">AI second.</span>
              <span className="philosophy-pillar">Growth always.</span>
            </div>
          </div>
        </section>

        {/* ── Testimonials (light) ── */}
        <Testimonials />

        {/* ── Latest Blogs (light) ── */}
        <LatestBlogs />

        {/* ── FAQs (dark) ── */}
        <FAQ />

        {/* ── Final CTA (light) ── */}
        <section className="section section--light section--cta" id="contact">
          <div className="section__inner section__inner--centered">
            <span className="label section-eyebrow">Ready to Move Forward?</span>
            <h2 className="h2--dark">that's kind of our thing.</h2>
            <p className="section__sub section__sub--dark">You already have the business. You already have the ambition. Now let's make your marketing work a little harder for you.</p>
            <div className="cta-buttons">
              <SpotButton href="mailto:hello@futureforwardstudio.com" className="spot-btn--dark">Get My Free AI Marketing Strategy →</SpotButton>
              <SpotButton href="mailto:hello@futureforwardstudio.com" className="spot-btn--outline-dark">Talk to an AI Marketing Expert →</SpotButton>
            </div>
            <p className="cta-tagline cta-tagline--dark">Your future customers are out there. Let's help them find you.</p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-brand">
            <img src="/logo-horizontal.png" alt="Future Forward Studio" className="footer-logo" />
            <p className="footer-desc">
              AI-powered marketing agency helping ambitious businesses turn artificial intelligence into better marketing, smarter decisions, and real growth.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="#" className="social-link" aria-label="X / Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.258 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-col">
              <span className="footer-col__heading label">Services</span>
              <ul>
                <li><a href="#services">AI Marketing Strategy</a></li>
                <li><a href="#services">AI Content Marketing</a></li>
                <li><a href="#services">AI-Powered SEO</a></li>
                <li><a href="#services">AI Advertising</a></li>
                <li><a href="#services">Marketing Automation</a></li>
                <li><a href="#services">Customer Intelligence</a></li>
                <li><a href="#services">Marketing Analytics</a></li>
                <li><a href="#services">Growth Marketing</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <span className="footer-col__heading label">Company</span>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#cloud">AI Marketing Cloud</a></li>
                <li><a href="#contact">Case Studies</a></li>
                <li><a href="#contact">Blog</a></li>
                <li><a href="#contact">Careers</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <span className="footer-col__heading label">Get in Touch</span>
              <ul className="footer-contact">
                <li>
                  <span className="label">Email</span>
                  <a href="mailto:hello@futureforwardstudio.com">hello@futureforwardstudio.com</a>
                </li>
                <li>
                  <span className="label">Availability</span>
                  <span className="footer-status">
                    <span className="status-dot" />
                    Open for new projects
                  </span>
                </li>
                <li>
                  <span className="label">Based</span>
                  <span>Worldwide · Remote-First</span>
                </li>
              </ul>
              <SpotButton href="#contact" className="spot-btn--primary spot-btn--sm footer-cta">Start a Project →</SpotButton>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Future Forward Studio. All rights reserved.</span>
          <span className="footer-bottom__tagline">AI-powered marketing. Human-powered ideas. Forward-thinking growth.</span>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
