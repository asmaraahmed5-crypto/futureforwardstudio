// Build-time SEO: gives every page crawlable static HTML (unique title/description/canonical/OG/JSON-LD
// plus text content inside #root) even though the UI is rendered client-side by React.
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync, statSync, rmSync } from 'node:fs'
import { resolve } from 'node:path'
import { SERVICES } from './src/servicesData.js'
import { FAQS } from './src/faqData.js'
import { LANDINGS } from './src/landingData.js'
import { POSTS } from './src/blogData.js'
import { AI_DISCLOSURE, AUTHOR } from './src/siteConfig.js'
import { parseInline } from './src/inline.js'
import { PLANS as PRICE_PLANS, PRICING_FAQS, COMPARE } from './src/plansData.js'

const SITE = 'https://futureforwardstudio.com'
const NAME = 'Future Forward Studio'
const OG_IMAGE = `${SITE}/logo-primary.png`
const HOME_TITLE = 'AI Marketing Agency: SEO, Content & Ads | Future Forward Studio'
const HOME_DESC = 'Future Forward Studio is an AI marketing agency. We combine AI with real strategy for SEO, content, ads, automation and website design that grows your business.'

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
const ld = (obj) => `<script type="application/ld+json">${JSON.stringify(obj).replace(/</g, '\\u003c')}</script>`
const trim = (s, n) => (s.length <= n ? s : s.slice(0, n - 1).replace(/\s+\S*$/, '') + '…')

const faqLd = (faqs) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
})

const svcId = (s) => `${SITE}/services/${s.slug}#service`

const PLANS = [
  { name: 'Launch', price: 2500, desc: 'For startups and small businesses ready to bring AI into their marketing.' },
  { name: 'Growth', price: 5000, desc: 'For growing businesses that want AI working across every marketing channel.' },
]

const orgLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'ProfessionalService'],
      '@id': `${SITE}/#org`,
      name: NAME,
      url: SITE,
      logo: { '@type': 'ImageObject', '@id': `${SITE}/#logo`, url: `${SITE}/logo-primary.png`, contentUrl: `${SITE}/logo-primary.png` },
      image: `${SITE}/logo-primary.png`,
      description: HOME_DESC,
      email: 'hello@futureforwardstudio.com',
      contactPoint: { '@type': 'ContactPoint', contactType: 'sales', email: 'hello@futureforwardstudio.com', availableLanguage: 'English', url: `${SITE}/contact` },
      knowsAbout: ['AI marketing', 'AI-powered SEO', 'Content marketing', 'AI advertising', 'Marketing automation', 'Website design', 'Growth marketing'],
      makesOffer: SERVICES.map((s) => ({ '@id': svcId(s) })),
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Monthly retainer plans',
        itemListElement: PLANS.map((p) => ({
          '@type': 'Offer',
          name: `${p.name} plan`,
          description: p.desc,
          priceSpecification: { '@type': 'UnitPriceSpecification', price: p.price, priceCurrency: 'USD', unitText: 'MONTH' },
          itemOffered: { '@type': 'Service', name: `${p.name}: AI marketing retainer`, provider: { '@id': `${SITE}/#org` } },
        })),
      },
    },
    { '@type': 'WebSite', '@id': `${SITE}/#website`, url: SITE, name: NAME, inLanguage: 'en', publisher: { '@id': `${SITE}/#org` } },
    {
      '@type': 'WebPage',
      '@id': `${SITE}/#webpage`,
      url: SITE + '/',
      name: HOME_TITLE,
      description: HOME_DESC,
      inLanguage: 'en',
      isPartOf: { '@id': `${SITE}/#website` },
      about: { '@id': `${SITE}/#org` },
      primaryImageOfPage: { '@id': `${SITE}/#logo` },
    },
  ],
}

function social(title, desc, url, image = OG_IMAGE, type = 'website') {
  return [
    `<meta property="og:type" content="${type}" />`,
    `<meta property="og:site_name" content="${NAME}" />`,
    `<meta property="og:title" content="${esc(title)}" />`,
    `<meta property="og:description" content="${esc(desc)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(title)}" />`,
    `<meta name="twitter:description" content="${esc(desc)}" />`,
    `<meta name="twitter:image" content="${image}" />`,
  ].join('\n    ')
}

const serviceLinks = () => `<ul>${SERVICES.map((s) => `<li><a href="/services/${s.slug}">${esc(s.title)}</a></li>`).join('')}</ul>`

function homeFallback() {
  return `<main><h1>Your AI marketing agency for future-proof growth.</h1>
<p>${esc(HOME_DESC)}</p>
<h2>Our AI marketing services</h2>
<ul>${SERVICES.map((s) => `<li><a href="/services/${s.slug}"><strong>${esc(s.title)}</strong></a>: ${esc(s.short)}</li>`).join('')}</ul>
<h2>Frequently asked questions</h2>
${FAQS.map((f) => `<h3>${esc(f.q)}</h3><p>${esc(f.a)}</p>`).join('')}</main>`
}

function serviceFallback(s) {
  return `<main><nav><a href="/">Home</a> / ${esc(s.title)}</nav>
<h1>${esc(s.headline)}</h1><p>${esc(s.lead)}</p>
<h2>About ${esc(s.title)}</h2>${s.overview.map((p) => `<p>${esc(p)}</p>`).join('')}
<h2>Who it is for</h2><ul>${s.forWho.map((w) => `<li>${esc(w)}</li>`).join('')}</ul>
<h2>What is included</h2><ul>${s.included.map((i) => `<li><strong>${esc(i.title)}</strong>: ${esc(i.desc)}</li>`).join('')}</ul>
${s.deepDive ? `<h2>${esc(s.deepDive.eyebrow)}</h2><p>${esc(s.deepDive.intro)}</p><ul>${s.deepDive.items.map((i) => `<li><strong>${esc(i.title)}</strong>: ${esc(i.desc)}${i.href ? ` <a href="${i.href}">Learn more</a>` : ''}</li>`).join('')}</ul>` : ''}
<h2>How it works</h2><ol>${s.steps.map((t) => `<li><strong>${esc(t.title)}</strong>: ${esc(t.desc)}</li>`).join('')}</ol>
<h2>What you get</h2><ul>${s.outcomes.map((o) => `<li>${esc(o)}</li>`).join('')}</ul>
${s.faqs ? `<h2>FAQs</h2>${s.faqs.map((f) => `<h3>${esc(f.q)}</h3><p>${esc(f.a)}${f.href ? ` <a href="${f.href}">Read more</a>` : ''}</p>`).join('')}` : ''}
<h2>Plans</h2><p>Launch is $2,500 per month and Growth is $5,000 per month. <a href="/pricing">See pricing</a>.</p>
<h2>More services</h2>${serviceLinks()}</main>`
}

function serviceHtml(template, s) {
  const url = `${SITE}/services/${s.slug}`
  const title = `${s.title} | ${NAME}`
  const desc = trim(`${s.short} ${s.lead}`, 158)
  const jsonld = [
    {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Service',
          '@id': svcId(s),
          name: s.title,
          serviceType: s.title,
          description: desc,
          url,
          mainEntityOfPage: { '@id': `${url}#webpage` },
          provider: { '@id': `${SITE}/#org` },
          areaServed: 'Worldwide',
          audience: { '@type': 'BusinessAudience', audienceType: s.forWho.join('; ') },
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: `${s.title}: what is included`,
            itemListElement: s.included.map((i) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: i.title, description: i.desc } })),
          },
        },
        {
          '@type': 'WebPage',
          '@id': `${url}#webpage`,
          url,
          name: title,
          description: desc,
          inLanguage: 'en',
          isPartOf: { '@id': `${SITE}/#website` },
          about: { '@id': svcId(s) },
          breadcrumb: { '@id': `${url}#breadcrumb` },
          primaryImageOfPage: { '@id': `${SITE}/#logo` },
        },
        {
          '@type': 'BreadcrumbList',
          '@id': `${url}#breadcrumb`,
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: SITE + '/' },
            { '@type': 'ListItem', position: 2, name: s.title, item: url },
          ],
        },
      ],
    },
    ...(s.faqs ? [faqLd(s.faqs)] : []),
  ].map(ld).join('\n    ')

  const head = `<title>${esc(title)}</title>
    <meta name="description" content="${esc(desc)}" />
    <link rel="canonical" href="${url}" />
    ${social(title, desc, url)}
    ${jsonld}`

  return template
    .replace(/<title>[^<]*<\/title>/, '')
    .replace(/<meta name="description"[^>]*>/, '')
    .replace('</head>', `    ${head}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${serviceFallback(s)}</div>`)
}

// ── Generic helper: inject head tags + crawlable fallback into a built HTML template ──
function injectPage(template, { title, desc, url, jsonld = [], root = '', extraHead = '', image, type }) {
  const head = `<title>${esc(title)}</title>
    <meta name="description" content="${esc(desc)}" />
    <link rel="canonical" href="${url}" />
    ${social(title, desc, url, image, type)}
    ${extraHead}
    ${jsonld.map(ld).join('\n    ')}`
  return template
    .replace(/<title>[^<]*<\/title>/, '')
    .replace(/<meta name="description"[^>]*>/, '')
    .replace(/<link rel="canonical"[^>]*>/, '')
    .replace('</head>', `    ${head}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${root}</div>`)
}

const crumbLd = (url, items) => ({
  '@type': 'BreadcrumbList',
  '@id': `${url}#breadcrumb`,
  itemListElement: items.map(([name, item], i) => ({ '@type': 'ListItem', position: i + 1, name, item })),
})

// Landing pages at the site root, e.g. /ai-marketing-agency
function landingHtml(template, l) {
  const url = SITE + l.path
  const id = `${url}#service`
  const jsonld = [
    {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Service', '@id': id, name: l.title, serviceType: l.title, description: l.metaDesc, url,
          mainEntityOfPage: { '@id': `${url}#webpage` }, provider: { '@id': `${SITE}/#org` }, areaServed: 'Worldwide',
          audience: { '@type': 'BusinessAudience', audienceType: l.forWho.join('; ') },
          hasOfferCatalog: { '@type': 'OfferCatalog', name: `${l.title}: what is included`, itemListElement: l.included.map((i) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: i.title, description: i.desc } })) },
        },
        { '@type': 'WebPage', '@id': `${url}#webpage`, url, name: l.metaTitle, description: l.metaDesc, inLanguage: 'en', isPartOf: { '@id': `${SITE}/#website` }, about: { '@id': id }, breadcrumb: { '@id': `${url}#breadcrumb` }, primaryImageOfPage: { '@id': `${SITE}/#logo` } },
        crumbLd(url, [['Home', SITE + '/'], [l.title, url]]),
      ],
    },
    ...(l.faqs ? [faqLd(l.faqs)] : []),
  ]
  return injectPage(template, { title: l.metaTitle, desc: l.metaDesc, url, jsonld, root: serviceFallback(l) })
}

function pricingHtml(template) {
  const url = `${SITE}/pricing`
  const title = 'AI Marketing Agency Pricing: Plans from $2,500/Month | Future Forward Studio'
  const desc = 'Transparent AI marketing agency pricing. Launch is $2,500 per month, Growth is $5,000 per month, Enterprise is custom. See what each plan includes and start with a free audit.'
  const jsonld = [
    {
      '@context': 'https://schema.org',
      '@graph': [
        { '@type': 'WebPage', '@id': `${url}#webpage`, url, name: title, description: desc, inLanguage: 'en', isPartOf: { '@id': `${SITE}/#website` }, breadcrumb: { '@id': `${url}#breadcrumb` } },
        crumbLd(url, [['Home', SITE + '/'], ['Pricing', url]]),
        ...PRICE_PLANS.filter((p) => p.amount).map((p) => ({
          '@type': 'Service', '@id': `${url}#${p.name.toLowerCase()}`, name: `${p.name} plan: AI marketing retainer`, description: p.desc, provider: { '@id': `${SITE}/#org` },
          offers: { '@type': 'Offer', url, priceCurrency: 'USD', price: p.amount, priceSpecification: { '@type': 'UnitPriceSpecification', price: p.amount, priceCurrency: 'USD', unitText: 'MONTH' } },
        })),
      ],
    },
    faqLd(PRICING_FAQS),
  ]
  const val = (v) => (v === true ? 'Included' : v === false ? 'Not included' : v)
  const root = `<main><h1>Straightforward pricing. Serious results.</h1><p>${esc(desc)}</p>
<h2>Plans</h2>${PRICE_PLANS.map((p) => `<h3>${esc(p.name)}: ${esc(p.price)}${esc(p.period)}</h3><p>${esc(p.desc)}</p><ul>${p.features.map((f) => `<li>${esc(f)}</li>`).join('')}</ul>`).join('')}
<h2>Compare plans</h2><table><thead><tr><th>Feature</th>${PRICE_PLANS.map((p) => `<th>${esc(p.name)}</th>`).join('')}</tr></thead><tbody>${COMPARE.map(([l, ...v]) => `<tr><th>${esc(l)}</th>${v.map((x) => `<td>${esc(val(x))}</td>`).join('')}</tr>`).join('')}</tbody></table>
<h2>Pricing questions</h2>${PRICING_FAQS.map((f) => `<h3>${esc(f.q)}</h3><p>${esc(f.a)}</p>`).join('')}</main>`
  return injectPage(template, { title, desc, url, jsonld, root })
}

const inlineHtml = (text) =>
  parseInline(text).map((t) => (typeof t === 'string' ? esc(t) : t.external ? `<a href="${esc(t.href)}" target="_blank" rel="noopener noreferrer">${esc(t.text)}</a>` : `<a href="${t.href === '#contact' ? '/contact' : esc(t.href)}">${esc(t.text)}</a>`)).join('')

function figureHtml(f) {
  const cap = f.caption ? `<figcaption>${esc(f.caption)}</figcaption>` : ''
  let inner = ''
  if (f.items) inner = `<ol>${f.items.map((i) => `<li><strong>${esc(i.t || i)}</strong>${i.d ? `: ${esc(i.d)}` : ''}</li>`).join('')}</ol>`
  if (f.kind === 'loop') inner = `<p>${esc(f.center)}: ${f.items.map(esc).join(' → ')}</p>`
  if (f.kind === 'compare') inner = [f.left, f.right].map((c) => `<h3>${esc(c.title)}</h3><ul>${c.items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>`).join('')
  if (f.kind === 'nested') inner = `<ul>${f.layers.map((l) => `<li><strong>${esc(l.t)}</strong>: ${esc(l.d)}</li>`).join('')}</ul>`
  if (f.kind === 'table') inner = `<table><thead><tr>${f.head.map((h) => `<th>${esc(h)}</th>`).join('')}</tr></thead><tbody>${f.rows.map((r) => `<tr>${r.map((c) => `<td>${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody></table>`
  return `<figure>${inner}${cap}</figure>`
}

const postBodyHtml = (b) =>
  b.map(([t, v]) => {
    if (t === 'h') return `<h2>${esc(v)}</h2>`
    if (t === 'p') return `<p>${inlineHtml(v)}</p>`
    if (t === 'ul' || t === 'ol') return `<${t}>${v.map((x) => `<li>${inlineHtml(x)}</li>`).join('')}</${t}>`
    if (t === 'fig') return figureHtml(v)
    if (t === 'src') return `<h2>Further reading</h2><ul>${v.map(([l, u]) => `<li><a href="${esc(u)}" target="_blank" rel="noopener noreferrer">${esc(l)}</a></li>`).join('')}</ul>`
    return ''
  }).join('')

function postHtml(template, p) {
  const url = `${SITE}/blog/${p.slug}`
  const title = `${p.title} | ${NAME}`
  const jsonld = [
    {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'BlogPosting', '@id': `${url}#article`, headline: p.title, description: p.description, url,
          datePublished: p.date, dateModified: p.date, inLanguage: 'en', articleSection: p.category,
          mainEntityOfPage: { '@id': `${url}#webpage` },
          author: { '@type': 'Person', name: AUTHOR.name, ...(AUTHOR.url ? { url: AUTHOR.url, sameAs: [AUTHOR.url] } : {}), worksFor: { '@id': `${SITE}/#org` } },
          publisher: { '@id': `${SITE}/#org` },
          image: { '@type': 'ImageObject', url: `${SITE}${p.image}`, width: 1200, height: 630 },
          thumbnailUrl: `${SITE}${p.image}`,
        },
        { '@type': 'WebPage', '@id': `${url}#webpage`, url, name: title, description: p.description, primaryImageOfPage: { '@type': 'ImageObject', url: `${SITE}${p.image}` }, inLanguage: 'en', isPartOf: { '@id': `${SITE}/#website` }, breadcrumb: { '@id': `${url}#breadcrumb` } },
        crumbLd(url, [['Home', SITE + '/'], ['Blog', SITE + '/blog'], [p.title, url]]),
      ],
    },
    ...(p.faqs ? [faqLd(p.faqs)] : []),
  ]
  const links = [...(p.services || []).map((s) => { const sv = SERVICES.find((x) => x.slug === s); return sv ? `<li><a href="/services/${sv.slug}">${esc(sv.title)}</a></li>` : '' }), ...(p.landing || []).map((l) => `<li><a href="${l}">${esc(l === '/pricing' ? 'Pricing' : l === '/' ? 'AI marketing agency' : (LANDINGS.find((x) => x.path === l) || { title: l }).title)}</a></li>`)].join('')
  const root = `<main><nav><a href="/">Home</a> / <a href="/blog">Blog</a></nav><article><h1>${esc(p.title)}</h1><p>By ${esc(AUTHOR.name)}. Published ${p.date}.</p><p>${esc(AI_DISCLOSURE)}</p><img src="${p.image}" alt="${esc(p.imageAlt)}" width="1200" height="630" /><p>${esc(p.description)}</p>${postBodyHtml(p.body)}${p.faqs ? `<h2>Quick answers</h2>${p.faqs.map((f) => `<h3>${esc(f.q)}</h3><p>${esc(f.a)}</p>`).join('')}` : ''}</article><h2>Related</h2><ul>${links}</ul></main>`
  return injectPage(template, { title, desc: trim(p.description, 158), url, jsonld, root, image: `${SITE}${p.image}`, type: 'article', extraHead: `<meta property="article:published_time" content="${p.date}" />\n    <link rel="alternate" type="application/rss+xml" title="${NAME} blog" href="${SITE}/feed.xml" />` })
}

function blogIndexHtml(template) {
  const url = `${SITE}/blog`
  const title = `AI Marketing Blog: Guides on SEO, GEO, Ads and Automation | ${NAME}`
  const desc = 'Practical guides on AI marketing, generative engine optimization, AI SEO, advertising and automation from Future Forward Studio.'
  const jsonld = [{
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Blog', '@id': `${url}#blog`, url, name: `${NAME} blog`, description: desc, publisher: { '@id': `${SITE}/#org` }, blogPost: POSTS.map((p) => ({ '@type': 'BlogPosting', headline: p.title, url: `${SITE}/blog/${p.slug}`, datePublished: p.date, image: `${SITE}${p.image}` })) },
      crumbLd(url, [['Home', SITE + '/'], ['Blog', url]]),
    ],
  }]
  const root = `<main><h1>Thinking out loud about AI marketing.</h1><p>${esc(desc)}</p><ul>${POSTS.map((p) => `<li><a href="/blog/${p.slug}"><img src="${p.image}" alt="${esc(p.imageAlt)}" width="1200" height="630" loading="lazy" /><strong>${esc(p.title)}</strong></a>: ${esc(p.description)}</li>`).join('')}</ul></main>`
  return injectPage(template, { title, desc, url, jsonld, root, extraHead: `<link rel="alternate" type="application/rss+xml" title="${NAME} blog" href="${SITE}/feed.xml" />` })
}

const LASTMOD = '2026-11-07'
function sitemapXml() {
  const urls = [
    ['/', 1.0], ['/pricing', 0.9], ['/about', 0.7], ['/contact', 0.7], ['/blog', 0.8],
    ...SERVICES.map((s) => [`/services/${s.slug}`, 0.8]),
    ...LANDINGS.map((l) => [l.path, 0.8]),
    ...POSTS.map((p) => [`/blog/${p.slug}`, 0.6, p.image]),
  ]
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${urls.map(([u, pr, img]) => `  <url>\n    <loc>${SITE}${u === '/' ? '/' : u}</loc>\n    <lastmod>${LASTMOD}</lastmod>\n    <priority>${pr.toFixed(1)}</priority>${img ? `\n    <image:image><image:loc>${SITE}${img}</image:loc></image:image>` : ''}\n  </url>`).join('\n')}\n</urlset>\n`
}

function feedXml() {
  const items = POSTS.map((p) => `    <item>\n      <title>${esc(p.title)}</title>\n      <link>${SITE}/blog/${p.slug}</link>\n      <guid isPermaLink="true">${SITE}/blog/${p.slug}</guid>\n      <pubDate>${new Date(p.date + 'T09:00:00Z').toUTCString()}</pubDate>\n      <category>${esc(p.category)}</category>\n      <description>${esc(p.description)}</description>\n    </item>`).join('\n')
  return `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0">\n  <channel>\n    <title>${NAME} blog</title>\n    <link>${SITE}/blog</link>\n    <description>Practical guides on AI marketing, AI search, SEO, advertising and automation.</description>\n    <language>en</language>\n${items}\n  </channel>\n</rss>\n`
}

export default function seoPrerender() {
  let outDir = 'dist'
  return {
    name: 'seo-prerender',
    configResolved(cfg) { outDir = resolve(cfg.root, cfg.build.outDir) },
    // Homepage: title, description, social tags, JSON-LD and crawlable fallback content.
    transformIndexHtml: {
      order: 'pre',
      handler(html, ctx) {
        if (ctx.filename && /\/index\.html$/.test(ctx.filename) && !ctx.filename.includes('/dist/')) {
          const head = `<title>${esc(HOME_TITLE)}</title>
    <meta name="description" content="${esc(HOME_DESC)}" />
    <link rel="canonical" href="${SITE}/" />
    ${social(HOME_TITLE, HOME_DESC, SITE + '/')}
    ${[orgLd, faqLd(FAQS)].map(ld).join('\n    ')}`
          return html
            .replace(/<title>[^<]*<\/title>/, '')
            .replace(/<meta name="description"[^>]*>/, '')
            .replace(/<link rel="canonical"[^>]*>/, '')
            .replace('</head>', `    ${head}\n  </head>`)
            .replace('<div id="root"></div>', `<div id="root">${homeFallback()}</div>`)
        }
        return html
      },
    },
    // Static HTML for every content page + sitemap + RSS feed.
    closeBundle() {
      const read = (f) => (existsSync(resolve(outDir, f)) ? readFileSync(resolve(outDir, f), 'utf8') : null)
      const write = (f, c) => { mkdirSync(resolve(outDir, f, '..'), { recursive: true }); writeFileSync(resolve(outDir, f), c) }

      // Services: dist/services/<slug>.html (and landing pages: dist/<slug>.html) from the shared template
      const svcTpl = read('service.html')
      if (svcTpl) {
        for (const s of SERVICES) write(`services/${s.slug}.html`, serviceHtml(svcTpl, s))
        for (const l of LANDINGS) write(`${l.path.slice(1)}.html`, landingHtml(svcTpl, l))
      }
      const priceTpl = read('pricing.html')
      if (priceTpl) write('pricing.html', pricingHtml(priceTpl))
      const blogTpl = read('blog.html')
      if (blogTpl) {
        for (const p of POSTS) write(`blog/${p.slug}.html`, postHtml(blogTpl, p))
        write('blog.html', blogIndexHtml(blogTpl))
      }
      write('sitemap.xml', sitemapXml())
      write('feed.xml', feedXml())

      // macOS writes ._* resource-fork files on external drives; never ship them.
      const sweep = (dir) => {
        for (const f of readdirSync(dir)) {
          const full = resolve(dir, f)
          if (f.startsWith('._') || f === '.DS_Store') rmSync(full, { force: true })
          else if (statSync(full).isDirectory()) sweep(full)
        }
      }
      sweep(outDir)
    },
  }
}
