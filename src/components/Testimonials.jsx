import { useState, useRef, useEffect, useCallback } from 'react'
import { TrendingUp, Target, Star, Clock, Zap, Award } from 'lucide-react'
import './Testimonials.css'

const TESTIMONIALS = [
  {
    id: 1,
    initials: 'SM',
    name: 'Sarah Mitchell',
    role: 'Founder & CEO · Vela Commerce',
    quote: "We went from posting randomly and hoping for the best to having a real content engine. Future Forward Studio built something that actually scales with us.",
    tags: [{ text: 'FEATURED', featured: true }, { text: 'Ecommerce', featured: false }],
    stats: [{ Icon: TrendingUp, text: '3× leads' }, { Icon: Zap, text: 'AI Content' }],
    avatarGradient: 'linear-gradient(135deg, #7c3aed, #5b21b6)',
  },
  {
    id: 2,
    initials: 'JO',
    name: 'James Okafor',
    role: 'Head of Growth · Stackable SaaS',
    quote: "Our ad spend dropped by 30% and leads went up. That's the kind of outcome you hope for — they delivered it in the first quarter.",
    tags: [{ text: 'AI Advertising', featured: false }, { text: 'SaaS', featured: false }],
    stats: [{ Icon: Target, text: '−30% ad spend' }, { Icon: TrendingUp, text: '+Pipeline' }],
    avatarGradient: 'linear-gradient(135deg, #0ea5e9, #2563eb)',
  },
  {
    id: 3,
    initials: 'PN',
    name: 'Priya Nair',
    role: 'Marketing Director · Brightpath Consulting',
    quote: "I was sceptical about AI marketing. Now I'm a convert. They didn't just automate stuff — they made the whole strategy sharper.",
    tags: [{ text: 'AI Strategy', featured: true }, { text: 'B2B', featured: false }],
    stats: [{ Icon: Star, text: 'Page 1 SEO' }, { Icon: TrendingUp, text: '+380% organic' }],
    avatarGradient: 'linear-gradient(135deg, #f59e0b, #d97706)',
  },
  {
    id: 4,
    initials: 'TE',
    name: 'Tom Ellery',
    role: 'Co-Founder · Northbank Studio',
    quote: "Finally an agency that talks to us like partners, not vendors. They explained every decision and the results backed it all up.",
    tags: [{ text: 'Strategy', featured: false }, { text: 'Agency', featured: false }],
    stats: [{ Icon: Award, text: 'Full transparency' }, { Icon: Clock, text: 'Q1 results' }],
    avatarGradient: 'linear-gradient(135deg, #10b981, #059669)',
  },
  {
    id: 5,
    initials: 'AC',
    name: 'Amara Chen',
    role: 'CEO · Rootline Foods',
    quote: "The SEO work alone has changed our business. We're ranking for terms we never thought we'd compete on. Six months in and we haven't looked back.",
    tags: [{ text: 'AI SEO', featured: true }, { text: 'Ecommerce', featured: false }],
    stats: [{ Icon: TrendingUp, text: '+380% organic' }, { Icon: Clock, text: '6 months' }],
    avatarGradient: 'linear-gradient(135deg, #ec4899, #d946ef)',
  },
  {
    id: 6,
    initials: 'DF',
    name: 'Daniel Ferreira',
    role: 'Operations Director · Apex Services Group',
    quote: "We hired them to fix our email automation. They ended up transforming our entire customer journey. Worth every penny.",
    tags: [{ text: 'Automation', featured: false }, { text: 'CRM', featured: false }],
    stats: [{ Icon: Zap, text: '6× faster' }, { Icon: TrendingUp, text: '+210% pipeline' }],
    avatarGradient: 'linear-gradient(135deg, #6366f1, #4f46e5)',
  },
]

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState(0)
  const dragStartRef = useRef(0)
  const cardRefs = useRef([])
  const total = TESTIMONIALS.length
  const visibleBehind = 2

  const navigate = useCallback((newIndex) => {
    setActiveIndex((newIndex + total) % total)
  }, [total])

  const handleDragStart = (e, index) => {
    if (index !== activeIndex) return
    setIsDragging(true)
    const clientX = e.touches ? e.touches[0].clientX : e.clientX
    dragStartRef.current = clientX
    cardRefs.current[activeIndex]?.classList.add('is-dragging')
  }

  const handleDragMove = useCallback((e) => {
    if (!isDragging) return
    const clientX = e.touches ? e.touches[0].clientX : e.clientX
    setDragOffset(clientX - dragStartRef.current)
  }, [isDragging])

  const handleDragEnd = useCallback(() => {
    if (!isDragging) return
    cardRefs.current[activeIndex]?.classList.remove('is-dragging')
    if (Math.abs(dragOffset) > 50) {
      navigate(activeIndex + (dragOffset < 0 ? 1 : -1))
    }
    setIsDragging(false)
    setDragOffset(0)
  }, [isDragging, dragOffset, activeIndex, navigate])

  useEffect(() => {
    if (!isDragging) return
    window.addEventListener('mousemove', handleDragMove)
    window.addEventListener('touchmove', handleDragMove, { passive: true })
    window.addEventListener('mouseup', handleDragEnd)
    window.addEventListener('touchend', handleDragEnd)
    return () => {
      window.removeEventListener('mousemove', handleDragMove)
      window.removeEventListener('touchmove', handleDragMove)
      window.removeEventListener('mouseup', handleDragEnd)
      window.removeEventListener('touchend', handleDragEnd)
    }
  }, [isDragging, handleDragMove, handleDragEnd])

  return (
    <section className="section section--light testimonials" id="testimonials">
      <div className="section__inner section__inner--centered">
        <span className="label section-eyebrow">Client Results</span>
        <h2>don't take our word for it.</h2>
      </div>

      <div className="ts-wrap section__inner">
        <div className="ts-glow" aria-hidden="true" />

        <div className="ts-stack">
          {TESTIMONIALS.map((t, index) => {
            const displayOrder = (index - activeIndex + total) % total
            let style = {}
            if (displayOrder === 0) {
              style = { transform: `translateX(${dragOffset}px)`, opacity: 1, zIndex: total }
            } else if (displayOrder <= visibleBehind) {
              const scale = 1 - 0.04 * displayOrder
              const ty = -1.6 * displayOrder
              style = {
                transform: `scale(${scale}) translateY(${ty}rem)`,
                opacity: 1 - 0.28 * displayOrder,
                zIndex: total - displayOrder,
                pointerEvents: 'none',
              }
            } else {
              style = { transform: 'scale(0.88) translateY(-3.2rem)', opacity: 0, zIndex: 0, pointerEvents: 'none' }
            }

            return (
              <div
                key={t.id}
                ref={el => cardRefs.current[index] = el}
                className="ts-card"
                style={style}
                onMouseDown={(e) => handleDragStart(e, index)}
                onTouchStart={(e) => handleDragStart(e, index)}
              >
                <div className="ts-card__header">
                  <div className="ts-avatar" style={{ background: t.avatarGradient }}>
                    {t.initials}
                  </div>
                  <div>
                    <div className="ts-name">{t.name}</div>
                    <div className="ts-role">{t.role}</div>
                  </div>
                </div>

                <blockquote className="ts-quote">"{t.quote}"</blockquote>

                <div className="ts-footer">
                  <div className="ts-tags">
                    {t.tags.map((tag, i) => (
                      <span key={i} className={`ts-tag${tag.featured ? ' ts-tag--featured' : ''}`}>
                        {tag.text}
                      </span>
                    ))}
                  </div>
                  <div className="ts-stats">
                    {t.stats.map(({ Icon, text }, i) => (
                      <span key={i} className="ts-stat">
                        <Icon size={12} aria-hidden="true" />
                        {text}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="ts-pagination" role="tablist" aria-label="Navigate testimonials">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={activeIndex === i}
              aria-label={`Testimonial ${i + 1}`}
              onClick={() => navigate(i)}
              className={`ts-dot${activeIndex === i ? ' ts-dot--active' : ''}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
