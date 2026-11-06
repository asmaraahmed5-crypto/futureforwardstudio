import { useRef, useLayoutEffect, useSyncExternalStore } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { SpotButton } from './SpotButton'
import './JourneyTimeline.css'

gsap.registerPlugin(ScrollTrigger, SplitText)

const TOP_ITEMS = [
  {
    id: 'noticed',
    num: '01',
    label: 'get noticed.',
    content: 'AI positions you where your audience already scrolls — before they know they need you.',
  },
  {
    id: 'remembered',
    num: '02',
    label: 'get remembered.',
    content: "Smart content builds recognition so your name sticks long before they're ready to buy.",
  },
  {
    id: 'trusted',
    num: '03',
    label: 'get trusted.',
    content: 'Consistent, data-backed presence turns casual awareness into real authority.',
  },
  {
    id: 'chosen',
    num: '04',
    label: 'get chosen.',
    content: "When they're ready to act, your name is the only one they think of.",
  },
]

const BG     = '#050505'
const TEXT   = '#ffffff'
const MUTED  = 'rgba(255,255,255,0.55)'
const ACTIVE = '#ffffff'

function useReducedMotion() {
  return useSyncExternalStore(
    (cb) => {
      const q = window.matchMedia('(prefers-reduced-motion: reduce)')
      q.addEventListener('change', cb)
      return () => q.removeEventListener('change', cb)
    },
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    () => false
  )
}

export function JourneyTimeline() {
  const sectionRef = useRef(null)
  const titleRef   = useRef(null)
  const itemsRef   = useRef(null)
  const prefersReduced = useReducedMotion()

  useLayoutEffect(() => {
    if (prefersReduced) return

    const ctx = gsap.context(() => {
      // Heading reveal
      if (titleRef.current) {
        const split = new SplitText(titleRef.current, { type: 'lines', mask: 'lines' })
        gsap.from(split.lines, {
          yPercent: 100,
          duration: 1.1,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: { trigger: titleRef.current, start: 'top 88%' },
        })
      }

      // Items fade up on scroll
      if (itemsRef.current) {
        const items = itemsRef.current.querySelectorAll('.jt-item')
        gsap.from(items, {
          y: 32,
          opacity: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: { trigger: itemsRef.current, start: 'top 85%' },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [prefersReduced])

  return (
    <div ref={sectionRef} className="jt-section" style={{ background: BG }}>
      <div className="jt-sticky">

        {/* ── Header ── */}
        <div className="jt-head">
          <p className="jt-eyebrow" style={{ color: MUTED }}>07 — The Journey</p>
          <h2 ref={titleRef} className="jt-h2" style={{ color: TEXT }}>
            from "who are they?"<br />to "take my money."
          </h2>
          <p className="jt-sub" style={{ color: MUTED }}>
            Great marketing isn't just about attention. It's about knowing what to do with it.
          </p>
        </div>

        {/* ── 4-item timeline grid ── */}
        <div className="jt-track">
          <div className="jt-center-line">
            <div className="jt-line-dot" style={{ background: ACTIVE }} />
            <div className="journey-line" style={{ background: 'rgba(255,255,255,0.2)' }} />
          </div>

          <div ref={itemsRef} className="jt-slider">
            {TOP_ITEMS.map((item) => (
              <div key={item.id} className="jt-item">
                <div className="jt-item-text">
                  <span className="jt-item-num" style={{ color: MUTED }}>{item.num}</span>
                  <div className="jt-item-body">
                    <h3 className="jt-item-title" style={{ color: TEXT }}>{item.label}</h3>
                    <p className="jt-item-desc" style={{ color: TEXT }}>{item.content}</p>
                  </div>
                </div>
                <div className="jt-stem">
                  <div className="jt-stem-line" style={{ background: TEXT }} />
                  <div className="jt-stem-dot" style={{ background: ACTIVE }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Statement ── */}
        <div className="jt-statement">
          <p className="jt-stmt-line" style={{ color: TEXT }}>Traffic is nice.</p>
          <p className="jt-stmt-line" style={{ color: TEXT }}>Followers are nice.</p>
          <p className="jt-stmt-line" style={{ color: TEXT }}>Likes are nice. But…</p>
          <p className="jt-stmt-line jt-stmt-accent" style={{ color: ACTIVE }}>customers are nicer.</p>
        </div>

        {/* ── CTA ── */}
        <div className="jt-cta">
          <SpotButton href="#contact" className="spot-btn--ghost">
            Turn Attention Into Action →
          </SpotButton>
        </div>

      </div>
    </div>
  )
}
