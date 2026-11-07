import { useEffect } from 'react'

// Fade-up on scroll for every [data-reveal] inside the page root. Content is never left hidden:
// reduced-motion users see it immediately, and a fail-safe reveals everything after 3.5s.
export function useReveal(rootSelector = '.sv') {
  useEffect(() => {
    const root = document.querySelector(rootSelector)
    const els = document.querySelectorAll(`${rootSelector} [data-reveal]`)
    root?.classList.add('sv-js')
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      els.forEach((el) => el.classList.add('is-in'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target) }
      }),
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    )
    els.forEach((el) => io.observe(el))
    const failsafe = setTimeout(() => els.forEach((el) => el.classList.add('is-in')), 3500)
    return () => { io.disconnect(); clearTimeout(failsafe) }
  }, [rootSelector])
}
