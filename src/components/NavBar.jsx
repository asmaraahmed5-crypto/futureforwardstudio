import { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'
import { CustomEase } from 'gsap/CustomEase'
import './NavBar.css'
import { SERVICES, serviceHref } from '../servicesData'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(CustomEase)
  try {
    if (!CustomEase.get('nav')) CustomEase.create('nav', '0.65, 0.01, 0.05, 0.99')
  } catch (e) {}
}

const NAV_LINKS = [
  { label: 'Services',   href: '#services', shape: '1' },
  { label: 'About Us',   href: '#about',    shape: '2' },
  { label: 'Pricing',    href: '#pricing',  shape: '3' },
  { label: 'Contact Us', href: '#contact',  shape: '4' },
]

export default function NavBar({ base = '', contactHref = '/contact' }) {
  const [isOpen, setIsOpen] = useState(false)
  const [subOpen, setSubOpen] = useState(false)
  const wrapRef   = useRef(null)
  const tlRef     = useRef(null)

  // Hover shape effect
  useEffect(() => {
    if (!wrapRef.current) return
    const ctx = gsap.context(() => {
      const items  = wrapRef.current.querySelectorAll('.nm-item[data-shape]')
      const shapes = wrapRef.current.querySelector('.nm-shapes')

      items.forEach((item) => {
        const idx   = item.getAttribute('data-shape')
        const shape = shapes?.querySelector(`.nm-shape-${idx}`)
        if (!shape) return
        const els = shape.querySelectorAll('.nm-el')

        const enter = () => {
          shapes.querySelectorAll('.nm-shape').forEach(s => s.classList.remove('active'))
          shape.classList.add('active')
          gsap.fromTo(els,
            { scale: 0.5, opacity: 0, rotation: -10 },
            { scale: 1, opacity: 1, rotation: 0, duration: 0.55, stagger: 0.07, ease: 'back.out(1.7)', overwrite: 'auto' }
          )
        }
        const leave = () => {
          gsap.to(els, {
            scale: 0.8, opacity: 0, duration: 0.25, ease: 'power2.in',
            onComplete: () => shape.classList.remove('active'), overwrite: 'auto'
          })
        }

        item.addEventListener('mouseenter', enter)
        item.addEventListener('mouseleave', leave)
        item._nc = () => { item.removeEventListener('mouseenter', enter); item.removeEventListener('mouseleave', leave) }
      })
    }, wrapRef)

    return () => {
      ctx.revert()
      wrapRef.current?.querySelectorAll('.nm-item[data-shape]').forEach(el => el._nc?.())
    }
  }, [])

  // Set panels off-screen once on mount
  useEffect(() => {
    if (!wrapRef.current) return
    const panels = wrapRef.current.querySelectorAll('.nm-panel')
    gsap.set(panels, { xPercent: 110 })
  }, [])

  // Open / close animation — plain TL (no gsap.context so revert() can't reset panels)
  useEffect(() => {
    if (!wrapRef.current) return
    const menuWrap  = wrapRef.current.querySelector('.nm-wrap')
    const panels    = wrapRef.current.querySelectorAll('.nm-panel')
    const links     = wrapRef.current.querySelectorAll('.nm-link')
    const footer    = wrapRef.current.querySelector('.nm-footer')
    const btnLabels = wrapRef.current.querySelectorAll('.nm-btn-labels p')
    const btnIcon   = wrapRef.current.querySelector('.nm-btn-icon')

    if (tlRef.current) tlRef.current.kill()
    const tl = gsap.timeline()
    tlRef.current = tl

    if (isOpen) {
      tl.set(menuWrap, { display: 'block' })
        .fromTo(btnLabels, { yPercent: 0 },   { yPercent: -100, stagger: 0.15, duration: 0.4 })
        .fromTo(btnIcon,   { rotate: 0 },      { rotate: 45, duration: 0.4 }, '<')
        .fromTo(panels,    { xPercent: 110 },  { xPercent: 0, stagger: 0.1, duration: 0.55, ease: 'nav' }, '<')
        .fromTo(links,     { yPercent: 120, rotate: 8 }, { yPercent: 0, rotate: 0, stagger: 0.07, ease: 'nav' }, '<+=0.3')
        .fromTo(footer,    { autoAlpha: 0, yPercent: 20 }, { autoAlpha: 1, yPercent: 0, duration: 0.4 }, '<+=0.1')
    } else {
      tl.to(panels,    { xPercent: 110, stagger: 0.06, duration: 0.4, ease: 'power2.in' })
        .to(btnLabels, { yPercent: 0, duration: 0.35 }, '<')
        .to(btnIcon,   { rotate: 0, duration: 0.35 }, '<')
        .set(menuWrap, { display: 'none' })
    }
  }, [isOpen])

  // Body scroll lock — covers html + body for mobile WebKit
  useEffect(() => {
    const el = document.documentElement
    const body = document.body
    if (isOpen) {
      el.style.overflow = 'hidden'
      body.style.overflow = 'hidden'
    } else {
      el.style.overflow = ''
      body.style.overflow = ''
    }
    return () => {
      el.style.overflow = ''
      body.style.overflow = ''
    }
  }, [isOpen])

  // Escape key
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape' && isOpen) setIsOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen])

  const close = () => { setIsOpen(false); setSubOpen(false) }

  return (
    <div ref={wrapRef}>
      {/* ── Sticky header ── */}
      <header className="site-header">
        <div className="nav-inner">
          <a href={`${base}#home`} aria-label="Home" className="nav-logo-link">
            <img src="/logo-new.webp" alt="Future Forward Studio" className="nav-logo" width="300" height="100" />
          </a>

          <div className="nm-header-right">
            <button
              className="nm-menu-btn"
              onClick={() => setIsOpen(v => !v)}
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              <div className="nm-btn-labels">
                <p>Menu</p>
                <p>Close</p>
              </div>
              <div className="nm-btn-icon">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M7.333 16V0h1.334v16H7.333Z" fill="currentColor"/>
                  <path d="M16 8.667H0V7.333h16v1.334Z" fill="currentColor"/>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* ── Fullscreen menu overlay ── */}
      <div className="nm-wrap" style={{ display: 'none' }}>
        <div className="nm-panel nm-panel--3" />
        <div className="nm-panel nm-panel--2" />
        <div className="nm-panel nm-panel--1" />

        {/* Ambient background shapes */}
        <div className="nm-shapes" aria-hidden="true">
          {/* Shape 1 — Services: circles */}
          <svg className="nm-shape nm-shape-1" viewBox="0 0 500 500" fill="none">
            <circle className="nm-el" cx="100" cy="150" r="50"  fill="rgba(124,58,237,0.14)"/>
            <circle className="nm-el" cx="380" cy="100" r="75"  fill="rgba(91,33,182,0.10)"/>
            <circle className="nm-el" cx="260" cy="370" r="95"  fill="rgba(167,139,250,0.08)"/>
            <circle className="nm-el" cx="440" cy="350" r="35"  fill="rgba(124,58,237,0.12)"/>
          </svg>

          {/* Shape 2 — About Us: wave */}
          <svg className="nm-shape nm-shape-2" viewBox="0 0 500 500" fill="none">
            <path className="nm-el" d="M0 250 Q125 125,250 250 T500 250" stroke="rgba(124,58,237,0.18)" strokeWidth="70" fill="none"/>
            <path className="nm-el" d="M0 350 Q125 225,250 350 T500 350" stroke="rgba(91,33,182,0.12)"  strokeWidth="50" fill="none"/>
          </svg>

          {/* Shape 3 — Pricing: dot grid */}
          <svg className="nm-shape nm-shape-3" viewBox="0 0 500 500" fill="none">
            {[70,170,270,370,470].map(x => [70,170,270,370,470].map(y => (
              <circle key={`${x}-${y}`} className="nm-el" cx={x} cy={y} r="9" fill="rgba(124,58,237,0.22)"/>
            )))}
          </svg>

          {/* Shape 4 — Contact Us: diagonal lines */}
          <svg className="nm-shape nm-shape-4" viewBox="0 0 500 500" fill="none">
            <line className="nm-el" x1="0"   y1="120" x2="380" y2="500" stroke="rgba(124,58,237,0.16)" strokeWidth="36"/>
            <line className="nm-el" x1="120" y1="0"   x2="500" y2="380" stroke="rgba(91,33,182,0.12)"  strokeWidth="28"/>
            <line className="nm-el" x1="280" y1="0"   x2="500" y2="220" stroke="rgba(167,139,250,0.09)" strokeWidth="22"/>
          </svg>
        </div>

        {/* Menu content */}
        <div className="nm-content">
          <ul className="nm-list">
            {NAV_LINKS.map(({ label, href, shape }) => {
              const link = (
                <a href={label === 'Contact Us' && contactHref ? contactHref : `${base}${href}`} className="nm-link" data-contact-page={label === 'Contact Us' ? '' : undefined} onClick={close}>
                  <span className="nm-link-text">{label}</span>
                  <div className="nm-link-bg" />
                </a>
              )
              if (label !== 'Services') {
                return (
                  <li key={label} className="nm-item" data-shape={shape}>{link}</li>
                )
              }
              return (
                <li key={label} className={`nm-item nm-item--sub${subOpen ? ' is-open' : ''}`} data-shape={shape}>
                  <div className="nm-row">
                    {link}
                    <button
                      type="button"
                      className="nm-sub-toggle"
                      aria-expanded={subOpen}
                      aria-controls="nm-sub-list"
                      aria-label={subOpen ? 'Hide services' : 'Show services'}
                      onClick={() => setSubOpen(v => !v)}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
                    </button>
                  </div>
                  <div className="nm-subwrap">
                    <ul className="nm-sub" id="nm-sub-list">
                      {SERVICES.map((s) => (
                        <li key={s.slug}>
                          <a href={serviceHref(s)} className="nm-sub-link" onClick={close}>
                            <span className="nm-sub-num">{s.num}</span>{s.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              )
            })}
          </ul>

          <div className="nm-footer">
            <span className="nm-footer-label">future forward studio</span>
            <a href={contactHref} className="btn btn--primary btn--sm" onClick={close}>
              Start a Project →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
