import { ArrowRight } from 'lucide-react'
import { SpotButton } from './SpotButton'
import './LatestBlogs.css'

const POSTS = [
  {
    category: 'AI Strategy',
    title: 'Why AI Marketing Isn\'t Just About Speed — It\'s About Clarity',
    excerpt: 'The biggest win AI gives marketers isn\'t doing things faster. It\'s finally understanding what\'s actually working and why.',
    date: 'Sep 18, 2026',
    readTime: '5 min read',
    img: 'https://images.unsplash.com/photo-1677212004257-103cfa6b59d0?w=700&h=440&fit=crop&q=80',
    alt: 'AI marketing strategy',
  },
  {
    category: 'Content Marketing',
    title: '7 Ways to Use AI Content Without Sounding Like a Robot',
    excerpt: 'AI-generated content doesn\'t have to be generic. Here\'s how to use it as a starting point, not an endpoint.',
    date: 'Sep 10, 2026',
    readTime: '7 min read',
    img: 'https://images.unsplash.com/photo-1542744174-a35e40ade835?w=700&h=440&fit=crop&q=80',
    alt: 'Content marketing',
  },
  {
    category: 'Marketing Automation',
    title: 'The Automation Mistake Most Businesses Make (And How to Fix It)',
    excerpt: 'Automating a broken process just makes it break faster. Start with the strategy, then bring in the automation.',
    date: 'Sep 3, 2026',
    readTime: '6 min read',
    img: 'https://images.unsplash.com/photo-1707762890671-52ef6d6f51e7?w=700&h=440&fit=crop&q=80',
    alt: 'Marketing automation workflow',
  },
]

export function LatestBlogs() {
  return (
    <section className="section section--light latest-blogs" id="blog">
      <div className="section__inner">

        <div className="latest-blogs__header">
          <div className="latest-blogs__header-left">
            <span className="label section-eyebrow">Latest from the Blog</span>
            <h2>thinking out loud<br />about AI marketing.</h2>
          </div>
          <SpotButton href="#blog" className="spot-btn--dark latest-blogs__cta-top">
            View All Posts <ArrowRight size={14} />
          </SpotButton>
        </div>

        <div className="latest-blogs__grid">
          {POSTS.map(({ category, title, excerpt, date, readTime, img, alt }) => (
            <article key={title} className="blog-card">
              <a href="#blog" className="blog-card__img-link">
                <img src={img} alt={alt} className="blog-card__img" width="700" height="440" loading="lazy" />
              </a>
              <div className="blog-card__body">
                <span className="blog-card__category label">{category}</span>
                <h3 className="blog-card__title">
                  <a href="#blog">{title}</a>
                </h3>
                <p className="blog-card__excerpt">{excerpt}</p>
                <div className="blog-card__footer">
                  <span className="blog-card__meta">{date} · {readTime}</span>
                  <a href="#blog" className="blog-card__read">
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
