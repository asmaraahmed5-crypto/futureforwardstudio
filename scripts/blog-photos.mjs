// Downloads the featured photo for every post (see src/blogPhotos.js) as a 1200x630 JPEG into public/img/blog/<slug>.jpg
// Usage: node scripts/blog-photos.mjs
import { mkdirSync, writeFileSync, readdirSync, rmSync } from 'node:fs'
import { resolve } from 'node:path'
import { PHOTOS } from '../src/blogPhotos.js'

const OUT = resolve(import.meta.dirname, '../public/img/blog')
mkdirSync(OUT, { recursive: true })
for (const [slug, { id }] of Object.entries(PHOTOS)) {
  const url = `https://images.unsplash.com/photo-${id}?w=1200&h=630&fit=crop&crop=entropy&q=82&fm=jpg`
  const res = await fetch(url)
  if (!res.ok) { console.error('FAILED', slug, res.status); process.exitCode = 1; continue }
  const buf = Buffer.from(await res.arrayBuffer())
  writeFileSync(resolve(OUT, `${slug}.jpg`), buf)
  console.log('✓', slug, Math.round(buf.length / 1024) + ' KB')
}
for (const f of readdirSync(OUT)) if (f.startsWith('._')) rmSync(resolve(OUT, f)) // macOS resource files
