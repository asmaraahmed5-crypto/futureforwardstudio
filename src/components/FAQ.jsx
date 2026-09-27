import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { SpotButton } from './SpotButton'
import './FAQ.css'

const FAQS = [
  {
    q: 'What exactly does an AI marketing agency do?',
    a: "We use artificial intelligence — combined with real strategy — to make your marketing more effective. That means using AI to analyse your audience, create better content faster, run smarter ads, automate repetitive tasks, and surface the insights that actually move your business forward. We're not just using AI as a buzzword. We use it where it genuinely works.",
  },
  {
    q: 'Do I need a big budget to work with Future Forward Studio?',
    a: "Not necessarily. AI often makes marketing more efficient, not more expensive. We work with businesses at different stages — from startups building their first marketing engine to established companies modernising what they already have. We'll talk through your goals first and recommend an approach that fits where you are right now.",
  },
  {
    q: 'How is this different from a traditional marketing agency?',
    a: "Traditional agencies run campaigns the same way they did five years ago and call it a strategy. We start with data, use AI to find what's actually working, automate the repetitive stuff, and focus human effort where it creates the most value. The result is faster execution, smarter decisions, and marketing that improves over time instead of just running on autopilot.",
  },
  {
    q: 'Do I need to understand AI to work with you?',
    a: "Not at all. That's our job. You understand your business, your customers, and what you're trying to achieve. We handle the AI layer — the tools, the prompts, the models, the automation — and translate it all into outcomes you actually care about: more leads, better content, improved ROI, and clearer visibility into what's working.",
  },
  {
    q: 'How long does it take to see results?',
    a: "It depends on what we're working on. Quick wins — like improving ad targeting, automating follow-ups, or overhauling your content output — can show results within weeks. Bigger goals like SEO authority or building a full marketing system take longer, typically three to six months to really compound. We'll always be upfront about what to expect and when.",
  },
  {
    q: 'What industries do you work with?',
    a: "We work across a wide range of industries — eCommerce brands, SaaS and tech companies, service businesses, B2B companies, professional services, and more. If your business needs better marketing and you're open to doing it with AI, we can almost certainly help. The principles of good strategy don't change much between industries — the tactics do, and we adapt accordingly.",
  },
  {
    q: 'Which services do you offer?',
    a: "We cover the full marketing stack: AI strategy, content marketing, SEO, paid advertising, marketing automation, customer intelligence, analytics, and growth marketing. You can work with us across all of it or bring us in on specific areas where you need the most help. We'll make a recommendation based on where we think the biggest opportunity is for your business.",
  },
  {
    q: 'How do we get started?',
    a: "Simple — reach out. We'll start with a conversation to understand your business, your current marketing, and what you want to achieve. From there we'll put together a clear plan and tell you exactly what working together would look like. There's no commitment from that first conversation, just a clear picture of what's possible.",
  },
]

export function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section className="section section--dark faq" id="faq">
      <div className="section__inner">

        <div className="faq__header">
          <span className="label section-eyebrow">FAQs</span>
          <h2>questions people<br />actually ask us.</h2>
          <p className="faq__sub">
            If yours isn't here,{' '}
            <a href="#contact" className="faq__link">just ask us directly.</a>
          </p>
        </div>

        <div className="faq__list">
          {FAQS.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={i} className={`faq__item${isOpen ? ' faq__item--open' : ''}`}>
                <button
                  className="faq__trigger"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="faq__question">{item.q}</span>
                  <span className="faq__icon" aria-hidden="true">
                    {isOpen ? <Minus size={18} strokeWidth={2} /> : <Plus size={18} strokeWidth={2} />}
                  </span>
                </button>
                {isOpen && (
                  <div className="faq__answer">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="faq__cta">
          <SpotButton href="#contact" className="spot-btn--dark">
            Talk to Future Forward Studio →
          </SpotButton>
        </div>

      </div>
    </section>
  )
}
