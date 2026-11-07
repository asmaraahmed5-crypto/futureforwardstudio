import { ArrowRight } from 'lucide-react'
import { SpotButton } from './SpotButton'
import { findPost, postHref } from '../blogData'
import './LatestBlogs.css'

// The three most useful starting posts, pulled from the real blog.
const FEATURED = ['what-is-ai-marketing', 'ai-content-marketing-strategy', 'marketing-automation-workflows']
const POSTS = FEATURED.map((slug) => {
  const p = findPost(slug)
  return {
    href: postHref(p),
    category: p.category,
    title: p.title,
    excerpt: p.description,
    date: new Date(p.date + 'T00:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    readTime: `${p.mins} min read`,
    img: p.image,
    alt: p.imageAlt,
  }
})

export function LatestBlogs() {
  return (
    <section className="section section--light latest-blogs" id="blog">
      <div className="section__inner">

        <div className="latest-blogs__header">
          <div className="latest-blogs__header-left">
            <span className="label section-eyebrow">Latest from the Blog</span>
            <h2>Thinking out loud<br />about AI marketing.</h2>
          </div>
          <SpotButton href="/blog" className="spot-btn--dark latest-blogs__cta-top">
            View All Posts <ArrowRight size={14} />
          </SpotButton>
        </div>

        <div className="latest-blogs__grid">
          {POSTS.map(({ href, category, title, excerpt, date, readTime, img, alt }) => (
            <article key={title} className="blog-card">
              <a href={href} className="blog-card__img-link">
                <img src={img} alt={alt} className="blog-card__img" width="1200" height="630" loading="lazy" />
              </a>
              <div className="blog-card__body">
                <span className="blog-card__category label">{category}</span>
                <h3 className="blog-card__title">
                  <a href={href}>{title}</a>
                </h3>
                <p className="blog-card__excerpt">{excerpt}</p>
                <div className="blog-card__footer">
                  <span className="blog-card__meta">{date} · {readTime}</span>
                  <a href={href} className="blog-card__read">
                    Read <ArrowRight size={12} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
