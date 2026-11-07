// Sanity check for the blog: every link rule matched, every post has an image, internal links resolve, counts per post.
import { existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { POSTS, LINK_MISSES } from '../src/blogData.js'
import { SERVICES } from '../src/servicesData.js'
import { LANDINGS } from '../src/landingData.js'
import { parseInline } from '../src/inline.js'

const slugs = new Set(POSTS.map((p) => p.slug)); const svc = new Set(SERVICES.map((s) => s.slug)); const land = new Set(LANDINGS.map((l) => l.path))
let bad = 0
console.log('Unmatched rules:', LINK_MISSES.length ? '\n  ' + LINK_MISSES.join('\n  ') : 'none')
for (const p of POSTS) {
  let internal = 0, external = 0
  const check = (href) => {
    if (/^https?:/.test(href)) { external++; return }
    internal++
    const ok = href === '#contact' || href === '/' || href === '/pricing' || land.has(href) || (href.startsWith('/blog/') && slugs.has(href.slice(6))) || (href.startsWith('/services/') && svc.has(href.slice(10)))
    if (!ok) { console.log('  BROKEN internal link', p.slug, href); bad++ }
  }
  for (const [t, v] of p.body) {
    if (t === 'p') parseInline(v).forEach((x) => typeof x !== 'string' && check(x.href))
    if (t === 'ul' || t === 'ol') v.forEach((s) => parseInline(s).forEach((x) => typeof x !== 'string' && check(x.href)))
    if (t === 'src') v.forEach(([, u]) => check(u))
  }
  const img = existsSync(resolve(import.meta.dirname, '../public', p.image.slice(1)))
  console.log(`${p.slug.padEnd(40)} internal ${String(internal).padStart(2)}  external ${String(external).padStart(2)}  figure ${p.body.some(([t]) => t === 'fig') ? 'yes' : 'NO '}  image ${img ? 'yes' : 'MISSING'}`)
  if (!img || internal < 3 || external < 2) bad++
}
process.exit(bad ? 1 : 0)
