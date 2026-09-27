import './Testimonials.css'

const TESTIMONIALS = [
  {
    quote: "We went from posting randomly and hoping for the best to having a real content engine. Future Forward Studio built something that actually scales with us.",
    name: 'Sarah Mitchell',
    role: 'Founder & CEO',
    company: 'Vela Commerce',
  },
  {
    quote: "Our ad spend dropped by 30% and leads went up. That's the kind of outcome you hope for — they delivered it in the first quarter.",
    name: 'James Okafor',
    role: 'Head of Growth',
    company: 'Stackable SaaS',
  },
  {
    quote: "I was sceptical about AI marketing. Now I'm a convert. They didn't just automate stuff — they made the whole strategy sharper.",
    name: 'Priya Nair',
    role: 'Marketing Director',
    company: 'Brightpath Consulting',
  },
  {
    quote: "Finally an agency that talks to us like partners, not vendors. They explained every decision and the results backed it all up.",
    name: 'Tom Ellery',
    role: 'Co-Founder',
    company: 'Northbank Studio',
  },
  {
    quote: "The SEO work alone has changed our business. We're ranking for terms we never thought we'd compete on. Six months in and we haven't looked back.",
    name: 'Amara Chen',
    role: 'CEO',
    company: 'Rootline Foods',
  },
  {
    quote: "We hired them to fix our email automation. They ended up transforming our entire customer journey. Worth every penny.",
    name: 'Daniel Ferreira',
    role: 'Operations Director',
    company: 'Apex Services Group',
  },
]

export function Testimonials() {
  return (
    <section className="section section--light testimonials" id="testimonials">
      <div className="section__inner">

        <div className="testimonials__header">
          <span className="label section-eyebrow">Client Results</span>
          <h2>don't take our word for it.</h2>
        </div>

        <div className="testimonials__grid">
          {TESTIMONIALS.map(({ quote, name, role, company }) => (
            <div key={name} className="testimonials__card">
              <svg className="testimonials__quote-mark" width="28" height="20" viewBox="0 0 28 20" fill="none" aria-hidden="true">
                <path d="M0 20V12.667C0 5.556 3.556 1.333 10.667 0L12 2.444C9.111 3.111 7.111 4.444 6 6.444 5.333 7.667 5.111 9 5.333 10.444H10.667V20H0ZM17.333 20V12.667C17.333 5.556 20.889 1.333 28 0L29.333 2.444C26.444 3.111 24.444 4.444 23.333 6.444 22.667 7.667 22.444 9 22.667 10.444H28V20H17.333Z" fill="currentColor" opacity="0.25"/>
              </svg>
              <p className="testimonials__quote">{quote}</p>
              <div className="testimonials__author">
                <span className="testimonials__name">{name}</span>
                <span className="testimonials__meta">{role}, {company}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
