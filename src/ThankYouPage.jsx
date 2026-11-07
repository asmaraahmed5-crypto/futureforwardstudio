import { useEffect, useRef } from 'react'
import { ArrowRight, Mail, Sparkles, LayoutGrid, CircleDollarSign } from 'lucide-react'
import './App.css'
import './ThankYouPage.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { SpotButton } from './components/SpotButton'

const EMAIL = 'hello@futureforwardstudio.com'

const STEPS = [
  { num: '01', title: 'We do a little digging.',  desc: 'We’ll look at your business, your goals, and where you are right now.' },
  { num: '02', title: 'We come back with ideas.', desc: 'No confusing tech talk. Just clear ideas that make sense for your business.' },
  { num: '03', title: 'We make it happen.',       desc: 'Once you’re happy with the direction, we get to work.' },
]

const WHILE_YOU_WAIT = [
  { icon: Sparkles,         label: 'See what we do',   href: '/#services' },
  { icon: LayoutGrid,       label: 'How we work',      href: '/#about' },
  { icon: CircleDollarSign, label: 'Look at pricing',  href: '/#pricing' },
]

const HEADLINE = ['Thank', 'you.', 'We’ll', 'take', 'it', 'from', 'here.']
const COLORS = ['#7c3aed', '#a78bfa', '#c4b5fd', '#ffffff', '#5b21b6']

/* One-off confetti burst from the check badge. Skipped for reduced motion. */
function useConfetti(canvasRef, originRef) {
  useEffect(() => {
    const canvas = canvasRef.current
    const origin = originRef.current
    if (!canvas || !origin || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = canvas.getContext('2d')
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let raf, pieces = [], last = performance.now()

    const resize = () => {
      const r = canvas.getBoundingClientRect()
      canvas.width = r.width * dpr
      canvas.height = r.height * dpr
    }
    resize()
    window.addEventListener('resize', resize)

    const cr = canvas.getBoundingClientRect()
    const or = origin.getBoundingClientRect()
    const ox = (or.left + or.width / 2 - cr.left) * dpr
    const oy = (or.top + or.height / 2 - cr.top) * dpr

    const start = setTimeout(() => {
      pieces = Array.from({ length: 110 }, () => {
        const a = Math.random() * Math.PI * 2
        const s = (4 + Math.random() * 11) * dpr
        return {
          x: ox, y: oy, vx: Math.cos(a) * s, vy: Math.sin(a) * s - 5 * dpr,
          w: (5 + Math.random() * 7) * dpr, h: (3 + Math.random() * 5) * dpr,
          rot: Math.random() * 6, vr: (Math.random() - 0.5) * 0.4,
          c: COLORS[Math.floor(Math.random() * COLORS.length)], life: 1,
        }
      })
    }, 650)

    const tick = (t) => {
      const dt = Math.min((t - last) / 16.7, 2); last = t
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      pieces.forEach((p) => {
        p.vx *= 0.985; p.vy = p.vy * 0.985 + 0.28 * dpr * dt
        p.x += p.vx * dt; p.y += p.vy * dt; p.rot += p.vr * dt; p.life -= 0.0055 * dt
        if (p.life <= 0) return
        ctx.save(); ctx.globalAlpha = Math.max(p.life, 0); ctx.translate(p.x, p.y); ctx.rotate(p.rot)
        ctx.fillStyle = p.c; ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h); ctx.restore()
      })
      pieces = pieces.filter((p) => p.life > 0 && p.y < canvas.height + 40)
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => { clearTimeout(start); cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [canvasRef, originRef])
}

/* Adds .is-in to .reveal elements as they scroll into view. */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      els.forEach((el) => el.classList.add('is-in'))
      return
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target) } })
    }, { threshold: 0.2, rootMargin: '0px 0px -8% 0px' })
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

export default function ThankYouPage() {
  const canvasRef = useRef(null)
  const checkRef = useRef(null)
  useConfetti(canvasRef, checkRef)
  useReveal()

  return (
    <>
      <NavBar base="/" contactHref="/contact" />

      <main className="ty">
        {/* ── Hero ── */}
        <section className="section section--dark ty-hero">
          <div className="ty-aurora" aria-hidden="true"><i /><i /><i /></div>
          <canvas ref={canvasRef} className="ty-confetti" aria-hidden="true" />

          <div className="ty-hero__inner">
            <span className="ty-check" ref={checkRef} aria-hidden="true">
              <span className="ty-ring" /><span className="ty-ring ty-ring--2" />
              <svg viewBox="0 0 52 52" width="44" height="44" fill="none">
                <circle className="ty-check__circle" cx="26" cy="26" r="23" />
                <path className="ty-check__tick" d="M15 27.5l8 8 15-17" />
              </svg>
            </span>

            <span className="label ty-eyebrow">Message sent</span>

            <h1 className="ty-title" aria-label={HEADLINE.join(' ')}>
              {HEADLINE.map((w, i) => (
                <span key={i} aria-hidden="true">
                  <span className="ty-word"><span style={{ animationDelay: `${0.55 + i * 0.08}s` }}>{w}</span></span>{' '}
                </span>
              ))}
            </h1>

            <p className="ty-lead">Thanks for telling us about your project. We’ll read every word and get back to you with clear ideas.</p>

            <div className="ty-actions">
              <SpotButton href="/" className="spot-btn--primary">Back to home <ArrowRight size={15} /></SpotButton>
              <SpotButton href="/#services" className="spot-btn--ghost">See our services</SpotButton>
            </div>
          </div>
        </section>

        {/* ── What happens next ── */}
        <section className="section section--light ty-steps">
          <div className="ty-steps__inner">
            <div className="ty-steps__head reveal">
              <span className="label section-eyebrow">What happens next</span>
              <h2>Here’s what to expect.</h2>
            </div>

            <ol className="ty-steps__grid reveal">
              <span className="ty-steps__line" aria-hidden="true" />
              {STEPS.map((s, i) => (
                <li key={s.num} className="ty-step" style={{ '--i': i }}>
                  <span className="ty-step__node"><b>{s.num}</b></span>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── Free design ── */}
        <section className="section section--dark ty-free">
          <div className="ty-free__inner">
            <div className="ty-free__visual reveal">
              <div className="ty-free__glow" aria-hidden="true" />
              <img src="/img/free-design-phone.jpg" alt="A phone showing the Future Forward Studio website" width="1000" height="1333" loading="lazy" />
              <span className="ty-free__chip"><Sparkles size={14} aria-hidden="true" /> Free first design</span>
            </div>
            <div className="ty-free__copy reveal">
              <span className="ty-badge">Free</span>
              <h2>Your first website design is free.</h2>
              <p>See it before you buy it. No guessing, just a real design for your business.</p>
              <p className="ty-free__mail">
                <Mail size={18} aria-hidden="true" />
                <span>Forgot something or want to share a file? Write to us at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</span>
              </p>
            </div>
          </div>
        </section>

        {/* ── While you wait ── */}
        <section className="section section--light ty-wait">
          <div className="ty-wait__inner">
            <h2 className="reveal">While you wait.</h2>
            <div className="ty-wait__grid">
              {WHILE_YOU_WAIT.map(({ icon: Icon, label, href }, i) => (
                <a key={label} href={href} className="ty-link reveal" style={{ '--i': i }}>
                  <Icon size={22} aria-hidden="true" />
                  <span>{label}</span>
                  <ArrowRight size={18} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer base="/" contactHref="/contact" />
    </>
  )
}
