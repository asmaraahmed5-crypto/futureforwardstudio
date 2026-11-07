import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { SpotButton } from './SpotButton'
import './FAQ.css'
import { FAQS } from '../faqData'


export function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section className="section section--dark faq" id="faq">
      <div className="section__inner">

        <div className="faq__header">
          <span className="label section-eyebrow">FAQs</span>
          <h2>Questions people<br />actually ask us.</h2>
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
          <SpotButton href="#contact" className="spot-btn--primary">
            Talk to Future Forward Studio →
          </SpotButton>
        </div>

      </div>
    </section>
  )
}
