// Build-time SEO: gives every page crawlable static HTML (unique title/description/canonical/OG/JSON-LD
// plus text content inside #root) even though the UI is rendered client-side by React.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { SERVICES } from './src/servicesData.js'
import { FAQS } from './src/faqData.js'

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

function social(title, desc, url) {
  return [
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${NAME}" />`,
    `<meta property="og:title" content="${esc(title)}" />`,
    `<meta property="og:description" content="${esc(desc)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${OG_IMAGE}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(title)}" />`,
    `<meta name="twitter:description" content="${esc(desc)}" />`,
    `<meta name="twitter:image" content="${OG_IMAGE}" />`,
  ].join('\n    ')
}

const serviceLinks = () => `<ul>${SERVICES.map((s) => `<li><a href="/services/${s.slug}">${esc(s.title)}</a></li>`).join('')}</ul>`

function homeFallback() {
  return `<main><h1>Future-proof your marketing. Today.</h1>
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
<h2>How it works</h2><ol>${s.steps.map((t) => `<li><strong>${esc(t.title)}</strong>: ${esc(t.desc)}</li>`).join('')}</ol>
<h2>What you get</h2><ul>${s.outcomes.map((o) => `<li>${esc(o)}</li>`).join('')}</ul>
${s.faqs ? `<h2>FAQs</h2>${s.faqs.map((f) => `<h3>${esc(f.q)}</h3><p>${esc(f.a)}</p>`).join('')}` : ''}
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
    // Services: one static HTML file per slug at dist/services/<slug>.html
    closeBundle() {
      const tplPath = resolve(outDir, 'service.html')
      if (!existsSync(tplPath)) return
      const template = readFileSync(tplPath, 'utf8')
      mkdirSync(resolve(outDir, 'services'), { recursive: true })
      for (const s of SERVICES) writeFileSync(resolve(outDir, 'services', `${s.slug}.html`), serviceHtml(template, s))
    },
  }
}
