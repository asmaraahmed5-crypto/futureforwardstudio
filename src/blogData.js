import { POSTS_A } from './blogPostsA.js'
import { POSTS_B } from './blogPostsB.js'
import { LINKS, SOURCES, FIGURES, imageFor } from './blogEnhance.js'
import { PHOTOS } from './blogPhotos.js'

export const LINK_MISSES = [] // phrases from blogEnhance.js that were not found in their post (checked by scripts/check-blog.mjs)

const linkRanges = (t) => [...t.matchAll(/\[[^\]]+\]\([^)]+\)/g)].map((m) => [m.index, m.index + m[0].length])
const overlaps = (ranges, a, b) => ranges.some(([x, y]) => a < y && b > x)

// Replace the first free occurrence of `phrase` in a string with a markdown link. Returns the new string or null.
function linkIn(text, phrase, url) {
  let from = 0
  const ranges = linkRanges(text)
  for (;;) {
    const i = text.indexOf(phrase, from)
    if (i === -1) return null
    if (!overlaps(ranges, i, i + phrase.length)) return text.slice(0, i) + `[${phrase}](${url})` + text.slice(i + phrase.length)
    from = i + 1
  }
}

function enhance(post) {
  const body = post.body.map(([t, v]) => [t, Array.isArray(v) ? [...v] : v])
  const used = new Set()
  for (const [phrase, url] of LINKS[post.slug] || []) {
    if (used.has(url)) continue
    let done = false
    for (const block of body) {
      if (block[0] === 'p') { const r = linkIn(block[1], phrase, url); if (r) { block[1] = r; done = true; break } }
      else if (block[0] === 'ul' || block[0] === 'ol') {
        for (let i = 0; i < block[1].length && !done; i++) { const r = linkIn(block[1][i], phrase, url); if (r) { block[1][i] = r; done = true } }
        if (done) break
      }
    }
    if (done) used.add(url); else LINK_MISSES.push(`${post.slug}: "${phrase}"`)
  }
  // diagrams go at the end of the named section
  for (const fig of FIGURES[post.slug] || []) {
    const h = body.findIndex(([t, v]) => t === 'h' && v === fig.after)
    if (h === -1) { LINK_MISSES.push(`${post.slug}: figure section "${fig.after}"`); continue }
    let end = body.findIndex(([t], i) => i > h && t === 'h')
    if (end === -1) end = body.length
    body.splice(end, 0, ['fig', fig])
  }
  if (SOURCES[post.slug]) body.push(['src', SOURCES[post.slug]])
  const words = body.filter(([t]) => ['h', 'p', 'ul', 'ol'].includes(t)).reduce((n, [, v]) => n + (Array.isArray(v) ? v.join(' ') : v).split(/\s+/).length, 0)
  return { ...post, mins: Math.max(1, Math.round(words / 220)), body, image: imageFor(post.slug), imageAlt: PHOTOS[post.slug].alt }
}

export const POSTS = [...POSTS_A, ...POSTS_B].map(enhance)
export const findPost = (slug) => POSTS.find((p) => p.slug === slug)
export const postsForService = (slug) => POSTS.filter((p) => p.services?.includes(slug))
export const postHref = (p) => `/blog/${p.slug}`
const TEXT = new Set(['h', 'p', 'ul', 'ol'])
export const wordCount = (p) => p.body.filter(([t]) => TEXT.has(t)).reduce((n, [, v]) => n + (Array.isArray(v) ? v.join(' ') : v).split(/\s+/).length, 0)
