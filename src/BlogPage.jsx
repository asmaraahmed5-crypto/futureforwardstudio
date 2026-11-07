import { useEffect } from 'react'
import './App.css'
import './ServicePage.css'
import './BlogPage.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { ContactPopupHost } from './components/ContactPopupHost'
import { SpotButton } from './components/SpotButton'
import { useReveal } from './useReveal'
import { POSTS, findPost, postHref } from './blogData'
import { SERVICES, findService, serviceHref } from './servicesData'
import { findLanding } from './landingData'
import { AUDIT_LABEL, AUDIT_HREF, AI_DISCLOSURE, AUTHOR } from './siteConfig'
import { ArrowRight, ArrowUpRight, ChevronDown } from 'lucide-react'
import { BlogFigure } from './BlogFigure'
import { parseInline } from './inline'

const fmt = (iso) => new Date(iso + 'T00:00:00').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
// Renders text with [label](url) links. External links open in a new tab; #contact opens the audit popup.
function Inline({ text }) {
  return parseInline(text).map((t, i) => {
    if (typeof t === 'string') return t
    if (t.external) return <a key={i} href={t.href} target="_blank" rel="noopener noreferrer">{t.text}</a>
    return <a key={i} href={t.href} {...(t.href === '#contact' ? { 'data-audit': '' } : {})}>{t.text}</a>
  })
}

function Block({ block }) {
  const [t, v] = block
  if (t === 'h') return <h2 id={slugify(v)}>{v}</h2>
  if (t === 'p') return <p><Inline text={v} /></p>
  if (t === 'ul') return <ul>{v.map((x) => <li key={x}><Inline text={x} /></li>)}</ul>
  if (t === 'ol') return <ol>{v.map((x) => <li key={x}><Inline text={x} /></li>)}</ol>
  if (t === 'fig') return <BlogFigure spec={v} />
  if (t === 'src') return (
    <aside className="bl-sources">
      <h2>Further reading</h2>
      <ul>{v.map(([label, url]) => <li key={url}><a href={url} target="_blank" rel="noopener noreferrer">{label}<ArrowUpRight size={14} aria-hidden="true" /></a></li>)}</ul>
    </aside>
  )
  return null
}

const slugify = (t) => t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

function Shell({ children }) {
  return (
    <>
      <NavBar base="/" />
      <main className="sv" style={{ '--sv-from': '#5b21b6', '--sv-to': '#a855f7' }}>{children}</main>
      <Footer base="/" />
      <ContactPopupHost />
    </>
  )
}

function Index() {
  const cats = [...new Set(POSTS.map((p) => p.category))]
  return (
    <Shell>
      <section className="section section--dark sv-hero sv-hero--solo bl-hero">
        <div className="sv-hero__glow" aria-hidden="true" />
        <div className="sv-hero__grid" aria-hidden="true" />
        <div className="sv-hero__inner">
          <nav className="sv-crumb" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><span aria-current="page">Blog</span></nav>
          <h1 className="sv-hero__title">Thinking out loud about AI marketing.</h1>
          <p className="sv-hero__lead">Practical guides on AI marketing, AI search, SEO, advertising and automation, written for people who would rather do than read jargon.</p>
        </div>
      </section>
      <section className="section section--light bl-index">
        <div className="sv-wrap">
          {cats.map((c) => (
            <div key={c} className="bl-group" data-reveal>
              <h2 className="bl-group__title">{c}</h2>
              <ul className="bl-cards">
                {POSTS.filter((p) => p.category === c).map((p) => (
                  <li key={p.slug}>
                    <a className="bl-card" href={postHref(p)}>
                      <img className="bl-card__img" src={p.image} alt={p.imageAlt} width="1200" height="630" loading="lazy" />
                      <span className="bl-card__body">
                        <span className="bl-card__meta">{fmt(p.date)} · {p.mins} min read</span>
                        <h3>{p.title}</h3>
                        <p>{p.description}</p>
                        <span className="bl-card__more">Read article <ArrowUpRight size={15} aria-hidden="true" /></span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </Shell>
  )
}

function Post({ post }) {
  const related = POSTS.filter((p) => p !== post && (p.category === post.category || p.services?.some((s) => post.services?.includes(s)))).slice(0, 3)
  const svcs = (post.services || []).map(findService).filter(Boolean)
  const lands = (post.landing || []).map((l) => (l === '/pricing' ? { title: 'Pricing', path: '/pricing' } : l === '/' ? { title: 'AI marketing agency', path: '/' } : findLanding(l))).filter(Boolean)
  return (
    <Shell>
      <section className="section section--dark sv-hero sv-hero--solo bl-hero bl-hero--post">
        <div className="sv-hero__glow" aria-hidden="true" />
        <div className="sv-hero__grid" aria-hidden="true" />
        <div className="sv-hero__inner">
          <nav className="sv-crumb" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><a href="/blog">Blog</a><span>/</span><span aria-current="page">{post.category}</span></nav>
          <h1 className="sv-hero__title bl-title">{post.title}</h1>
          <p className="bl-byline">By <span className="bl-author" rel="author">{AUTHOR.name}</span> · {fmt(post.date)} · {post.mins} min read</p>
          <p className="bl-disclosure">{AI_DISCLOSURE}</p>
        </div>
      </section>

      <section className="section section--light bl-post">
        <div className="bl-layout">
          <article className="bl-article">
            <figure className="bl-featured">
              <img src={post.image} alt={post.imageAlt} width="1200" height="630" fetchpriority="high" />
            </figure>
            <p className="bl-summary">{post.description}</p>
            {post.body.map((block, i) => <Block key={i} block={block} />)}

            {post.faqs?.length > 0 && (
              <div className="bl-faq">
                <h2>Quick answers</h2>
                {post.faqs.map((f) => (
                  <details key={f.q} className="sv-qa"><summary>{f.q}<ChevronDown size={18} aria-hidden="true" /></summary><p>{f.a}</p></details>
                ))}
              </div>
            )}

            <div className="bl-cta">
              <h2>Want this done for you?</h2>
              <p>We will review your marketing for free and send back a short list of quick wins.</p>
              <SpotButton href={AUDIT_HREF} data-audit className="spot-btn--primary">{AUDIT_LABEL} <ArrowRight size={16} aria-hidden="true" /></SpotButton>
            </div>
          </article>

          <aside className="bl-side">
            {(svcs.length > 0 || lands.length > 0) && (
              <div className="bl-side__box">
                <h3>Related services</h3>
                <ul>
                  {svcs.map((s) => <li key={s.slug}><a href={serviceHref(s)}>{s.title}</a></li>)}
                  {lands.map((l) => <li key={l.path}><a href={l.path}>{l.title}</a></li>)}
                </ul>
              </div>
            )}
            {related.length > 0 && (
              <div className="bl-side__box">
                <h3>Related articles</h3>
                <ul>{related.map((p) => <li key={p.slug}><a href={postHref(p)}>{p.title}</a></li>)}</ul>
              </div>
            )}
          </aside>
        </div>
      </section>
    </Shell>
  )
}

function NotFound() {
  return (
    <Shell>
      <section className="section section--dark sv-hero sv-hero--solo">
        <div className="sv-hero__inner">
          <span className="sv-crumb">404</span>
          <h1 className="sv-hero__title">That article doesn’t exist.</h1>
          <SpotButton href="/blog" className="spot-btn--primary">See all articles →</SpotButton>
        </div>
      </section>
    </Shell>
  )
}

export default function BlogPage() {
  const path = window.location.pathname.replace(/\/$/, '')
  const slug = path.startsWith('/blog/') ? path.slice(6) : ''
  const post = slug ? findPost(slug) : null
  useReveal('.sv')
  useEffect(() => {
    document.title = slug ? (post ? `${post.title} | Future Forward Studio` : 'Article not found | Future Forward Studio') : 'Blog: AI marketing guides | Future Forward Studio'
  }, [slug, post])
  if (slug && !post) return <NotFound />
  return post ? <Post post={post} /> : <Index />
}
