import { lazy, Suspense } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { ContactPopupHost } from './components/ContactPopupHost'
import { ImageStreamHero } from './components/ImageStreamHero'
import { SpotButton } from './components/SpotButton'
import { ShuffleCta } from './components/ShuffleCta'
import { SkewCards } from './components/SkewCards'
import { ClientLogos } from './components/ClientLogos'
import { Sparkles, ArrowRight } from 'lucide-react'

const AICloud = lazy(() => import('./components/AICloud').then(m => ({ default: m.AICloud })))
const CaseStudies = lazy(() => import('./components/CaseStudies').then(m => ({ default: m.CaseStudies })))
const Testimonials = lazy(() => import('./components/Testimonials').then(m => ({ default: m.Testimonials })))
const Pricing = lazy(() => import('./components/Pricing').then(m => ({ default: m.Pricing })))
const LatestBlogs = lazy(() => import('./components/LatestBlogs').then(m => ({ default: m.LatestBlogs })))
const FAQ = lazy(() => import('./components/FAQ').then(m => ({ default: m.FAQ })))
const JourneyTimeline = lazy(() => import('./components/JourneyTimeline').then(m => ({ default: m.JourneyTimeline })))

// Below-the-fold sections load as separate chunks so the first paint ships less JavaScript.
const Defer = ({ children, h = 600 }) => <Suspense fallback={<div style={{ minHeight: h }} aria-hidden="true" />}>{children}</Suspense>

const WhoWeWorkWith = lazy(() => import('./components/WhoWeWorkWith').then(m => ({ default: m.WhoWeWorkWith })))

const UNS = 'https://images.unsplash.com/photo'

const HERO_IMAGES = [
  { src: `${UNS}-1750365920056-d4b4ca73fbaa?w=260&h=365&fit=crop&q=55&fm=webp`, alt: 'AI marketing strategy' },
  { bg: 'linear-gradient(155deg, #f59e0b 0%, #d97706 45%, #b45309 100%)' },
  { src: `${UNS}-1677212004257-103cfa6b59d0?w=260&h=365&fit=crop&q=55&fm=webp`, alt: 'AI automation' },
  { src: `${UNS}-1707762890671-52ef6d6f51e7?w=260&h=365&fit=crop&q=55&fm=webp`, alt: 'Marketing analytics dashboard' },
  { bg: 'linear-gradient(155deg, #7c3aed 0%, #5b21b6 55%, #3b0764 100%)' },
  { src: `${UNS}-1542744174-a35e40ade835?w=260&h=365&fit=crop&q=55&fm=webp`,    alt: 'Marketing strategy planning' },
  { src: `${UNS}-1759393852314-59dc00faeed3?w=260&h=365&fit=crop&q=55&fm=webp`, alt: 'Content creation' },
  { bg: 'linear-gradient(155deg, #0f172a 0%, #1e3a5f 50%, #0c4a6e 100%)' },
  { src: `${UNS}-1748439281934-2803c6a3ee36?w=260&h=365&fit=crop&q=55&fm=webp`, alt: 'Data analytics' },
]

const SERVICES = [
  { num: '01', slug: 'ai-marketing-strategy', title: 'AI Marketing Strategy',  desc: 'We find the opportunities, build the roadmap, and show you exactly where AI fits in your marketing.' },
  { num: '02', slug: 'ai-content-marketing', title: 'AI Content Marketing',   desc: 'More content, at speed, that still sounds like you — not a robot. Blogs, social, email, campaigns.' },
  { num: '03', slug: 'ai-powered-seo', title: 'AI-Powered SEO',         desc: 'Combine AI-powered research with proven strategy to build content authority and get your business found.' },
  { num: '04', slug: 'ai-advertising', title: 'AI Advertising',         desc: 'AI-powered insights for smarter ad spend — better audiences, messaging, creative, and performance.' },
  { num: '05', slug: 'marketing-automation', title: 'Marketing Automation',   desc: 'Build smarter workflows that automate lead nurturing, follow-ups, and repetitive marketing tasks.' },
  { num: '06', slug: 'ai-website-design', title: 'AI Website Design',      desc: 'Fast, conversion-focused websites designed and built with AI — sharp, on-brand, and made to turn visitors into customers.' },
  { num: '07', slug: 'ai-presentation-design', title: 'AI Presentation Design', desc: 'Pitch decks and presentations that look professionally designed, tell your story clearly, and get built in a fraction of the time.' },
  { num: '08', slug: 'growth-marketing', title: 'Growth Marketing',       desc: 'Connect the dots across your marketing ecosystem and keep moving your business forward.' },
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
                src="https://images.unsplash.com/photo-1617751218806-9077a9093d8b?w=400&h=700&fit=crop&q=50&fm=webp"
                alt="Abstract neon light waves"
                className="spotlight__img"
                width="400" height="700"
                loading="lazy"
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
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=534&h=680&fit=crop&q=75&fm=webp"
                alt="Marketing analytics dashboard"
                className="rc-img"
                width="534" height="680"
                loading="lazy"
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
              <h2>ai does the heavy lifting. we make sure it doesn't lift the wrong thing.</h2>
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
                  img: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=500&h=281&fit=crop&q=55&fm=webp',
                  alt: 'AI data processing',
                },
                {
                  role: 'We bring',
                  title: 'the steering wheel.',
                  desc: 'We decide what matters, where to focus, and how everything connects back to your business goals.',
                  img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=281&fit=crop&q=55&fm=webp',
                  alt: 'Marketing strategy planning',
                },
                {
                  role: 'You get',
                  title: 'the destination.',
                  desc: 'Efficient marketing. Better customer journeys. Smarter campaigns. A clearer path to growth.',
                  img: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=500&h=281&fit=crop&q=55&fm=webp',
                  alt: 'Business growth results',
                },
              ].map((card) => (
                <div key={card.role} className="hw-card">
                  <img src={card.img} alt={card.alt} className="hw-card__img" width="500" height="281" loading="lazy" />
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
            <h2>what can future forward studio do for you?</h2>
            <p className="section__sub">Quite a bit.</p>
          </div>
          <SkewCards services={SERVICES} />
          <div className="section__inner section__inner--centered" style={{ marginTop: '16px' }}>
            <SpotButton href="#contact" className="spot-btn--primary" style={{ alignSelf: 'center' }}>Explore Our AI Marketing Services →</SpotButton>
          </div>
        </section>

        {/* ── 05 Case Studies (light) ── */}
        <Defer><CaseStudies /></Defer>

        {/* ── 06 AI Cloud (light) ── */}
        <Defer><AICloud /></Defer>

        {/* ── 06 Journey (dark) ── */}
        <Defer><JourneyTimeline /></Defer>

        {/* ── 07 Who It's For (dark — shader cards) ── */}
        <Suspense fallback={null}>
          <WhoWeWorkWith />
        </Suspense>

        {/* ── Philosophy (dark) ── */}
        <section className="section section--dark section--philosophy">
          <div className="section__inner section__inner--centered">
            <span className="label section-eyebrow">Our Philosophy</span>
            <blockquote className="philosophy-quote">
              "We don't do AI just to put 'AI' on the website."
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
        <Defer><Testimonials /></Defer>

        {/* ── Pricing (dark) ── */}
        <Defer><Pricing /></Defer>

        {/* ── Latest Blogs (light) ── */}
        <Defer><LatestBlogs /></Defer>

        {/* ── FAQs (dark) ── */}
        <Defer><FAQ /></Defer>

        {/* ── Final CTA (light) ── */}
        <section className="section section--light section--cta" id="contact">
          <div className="section__inner section__inner--centered">
            <span className="label section-eyebrow">Ready to Move Forward?</span>
            <h2 className="h2--dark">that's kind of our thing.</h2>
            <p className="section__sub section__sub--dark">You already have the business. You already have the ambition. Now let's make your marketing work a little harder for you.</p>
            <div className="cta-buttons">
              <SpotButton href="mailto:hello@futureforwardstudio.com" data-contact-popup className="spot-btn--dark">Get My Free AI Marketing Strategy →</SpotButton>
              <SpotButton href="mailto:hello@futureforwardstudio.com" data-contact-popup className="spot-btn--outline-dark">Talk to an AI Marketing Expert →</SpotButton>
            </div>
            <p className="cta-tagline cta-tagline--dark">Your future customers are out there. Let's help them find you.</p>
          </div>
        </section>
      </main>

      <Footer />
      <ContactPopupHost />
    </>
  )
}

export default App
