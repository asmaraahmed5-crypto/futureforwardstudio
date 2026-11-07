// Extra depth for service pages (sheet: "Strengthen service page content"). Merged into SERVICES in servicesData.js.
// deepDive = a second content section; faqs = additional questions appended to each page's FAQ.
export const EXTRAS = {
  'ai-marketing-strategy': {
    deepDive: {
      eyebrow: 'Sample deliverables',
      title: 'What you walk away with.',
      intro: 'A strategy is only useful if you can act on it. Every engagement ends with documents your team can use the next morning, not a slide deck that gathers dust.',
      items: [
        { title: 'AI opportunity map', desc: 'A scored list of every place AI could help your marketing, ranked by effort, cost and likely return, so you start with the wins that matter.' },
        { title: 'Channel and audience brief', desc: 'Who you are targeting, where they spend time, what they care about and the message that fits each channel.' },
        { title: '90-day roadmap', desc: 'Week-by-week priorities with owners, tools and the metric each task should move.' },
        { title: 'Tool and workflow recommendations', desc: 'Which AI tools to adopt, which to skip, how they connect and what they will cost you each month.' },
        { title: 'Measurement plan', desc: 'The handful of numbers worth tracking, how to read them and what a good month looks like.' },
      ],
    },
    faqs: [
      { q: 'How much does an AI marketing strategy cost?', a: 'Strategy work is included in our Launch plan from $2,500 per month, and we can scope a standalone roadmap if you want to carry it out yourself. See the pricing page for what each plan includes.' },
      { q: 'What do we need to provide?', a: 'Access to your analytics and ad accounts if you have them, a list of your goals and an hour or two of your time. We do the digging.' },
    ],
  },
  'ai-content-marketing': {
    deepDive: {
      eyebrow: 'Sample deliverables',
      title: 'What a month of content looks like.',
      intro: 'Content is only worth paying for if it ships consistently and reads like your business wrote it. Here is the kind of output a typical month includes.',
      items: [
        { title: 'Long-form articles', desc: 'Researched, structured pieces built around questions your customers actually ask, written to rank and to be cited by AI search tools.' },
        { title: 'Social posts and carousels', desc: 'A batch of posts adapted for each platform you use, in your voice, with visuals where they help.' },
        { title: 'Email and newsletters', desc: 'Campaign and nurture emails with subject lines tested for opens and copy tied to a single clear action.' },
        { title: 'Repurposed assets', desc: 'Each strong article is turned into shorter formats so one idea earns attention in several places.' },
        { title: 'Monthly content report', desc: 'What was published, how it performed and what we will change next month.' },
      ],
    },
    faqs: [
      { q: 'How much does AI content marketing cost?', a: 'Our Launch plan from $2,500 per month includes four content pieces plus strategy and an SEO setup. Higher volumes are covered in the Growth plan. Details are on the pricing page.' },
      { q: 'How do you protect our brand voice?', a: 'We write a voice guide from your best existing material, use it to brief every draft and have an editor review each piece before you see it.' },
    ],
  },
  'ai-powered-seo': {
    deepDive: {
      eyebrow: 'AI-powered SEO, in practice',
      title: 'SEO for search engines and AI answers.',
      intro: 'People now get answers from Google, AI Overviews, ChatGPT and Perplexity. Our SEO work covers all of them, because the same foundations (clear structure, genuine expertise, technical health) help in each.',
      items: [
        { title: 'Technical foundations', desc: 'Crawlability, indexing, site speed, internal linking and structured data, so search engines and AI tools can read and trust your site.' },
        { title: 'Topic and intent research', desc: 'AI-assisted analysis of what your audience searches for, grouped into topic clusters that build authority instead of chasing single keywords.' },
        { title: 'Content that earns citations', desc: 'Direct answers, clear definitions and original detail that make a page worth quoting, in search results and in AI-generated answers.' },
        { title: 'Authority and links', desc: 'Digital PR, directory listings and partnerships that show search engines your business is real and respected.' },
        { title: 'Generative engine optimization', desc: 'Specific work to be recommended by AI assistants. Read more about our generative engine optimization service.', href: '/generative-engine-optimization' },
      ],
    },
    faqs: [
      { q: 'What is the difference between SEO and GEO?', a: 'SEO helps you rank in search results. GEO (generative engine optimization) helps AI assistants understand, trust and cite your business in their answers. They overlap heavily, and we run them together.' },
      { q: 'How much does AI SEO cost?', a: 'SEO and content are part of our Launch and Growth retainers, from $2,500 per month. Our guide to AI SEO pricing explains what drives the cost.', href: '/blog/ai-seo-pricing' },
    ],
  },
  'ai-advertising': {
    deepDive: {
      eyebrow: 'Platforms we manage',
      title: 'Where we run your ads.',
      intro: 'We choose platforms by where your customers actually are, then use AI to test more creative and read performance faster than a manual process allows.',
      items: [
        { title: 'Google Ads', desc: 'Search, Performance Max and Shopping campaigns with search-term clean-up, smarter bidding inputs and landing pages matched to intent.' },
        { title: 'Meta (Facebook and Instagram)', desc: 'Creative-led campaigns with rapid testing of hooks, formats and audiences, and clear rules for when to scale or stop an ad.' },
        { title: 'LinkedIn and TikTok', desc: 'Used when your buyers are there, with messaging adapted to the platform instead of copy-pasted.' },
        { title: 'The numbers we report', desc: 'Spend, cost per lead or sale, conversion rate, return on ad spend and what we learned, in a report you can read in five minutes.' },
        { title: 'Creative testing', desc: 'AI-assisted variants of headlines, copy and images, tested against each other so budget follows the winners.' },
      ],
    },
    faqs: [
      { q: 'Do you charge a percentage of ad spend?', a: 'No. Advertising management is included in our Growth plan at a flat $5,000 per month. Your ad budget is separate and goes straight to the platforms.' },
      { q: 'What does Google Ads cost?', a: 'It depends on your industry, location and competition. Our guide explains what drives the cost and how to set a sensible starting budget.', href: '/blog/google-ads-cost-2026' },
    ],
  },
  'marketing-automation': {
    deepDive: {
      eyebrow: 'Workflow examples',
      title: 'Automations we build most often.',
      intro: 'You do not need hundreds of workflows. A handful of well-built ones usually deliver most of the value. These are the ones we reach for first.',
      items: [
        { title: 'New lead follow-up', desc: 'An instant, personal reply when someone fills in a form, plus a short sequence that keeps the conversation going until they book.' },
        { title: 'Lead scoring and routing', desc: 'Leads are scored on fit and behaviour, and the hot ones are sent straight to the right person with context.' },
        { title: 'Abandoned cart and browse recovery', desc: 'Timely, relevant messages for shoppers who left without buying.' },
        { title: 'Onboarding sequences', desc: 'Helpful emails that get new customers to their first win faster.' },
        { title: 'Reactivation and review requests', desc: 'Win back quiet contacts and ask happy customers for reviews at the right moment.' },
      ],
    },
    faqs: [
      { q: 'What tools do you use?', a: 'Typically a CRM and email platform such as HubSpot, ActiveCampaign, Klaviyo or Mailchimp, connected with tools like Zapier or Make. We build on what you already have where we can.' },
      { q: 'How much does it cost?', a: 'Automation workflows are part of our Growth plan from $5,000 per month. For a simple starting setup, see our small-business automation guide.', href: '/blog/small-business-marketing-automation' },
    ],
  },
  'ai-website-design': {
    deepDive: {
      eyebrow: 'Process and timelines',
      title: 'From first design to launch day.',
      intro: 'A clear process keeps a website project calm. This is how most of ours run, with indicative timings that depend on the size of your site and how quickly feedback comes back.',
      items: [
        { title: 'Week 1: brief and free first design', desc: 'We learn your business and goals, then create the first design, free, so you can judge the direction before committing.' },
        { title: 'Weeks 2 and 3: refine and write', desc: 'We adjust the design with your feedback and write conversion-focused copy for each page.' },
        { title: 'Weeks 3 and 4: build', desc: 'We build the site, make it fast and responsive and add the basics search engines look for.' },
        { title: 'Week 4 and beyond: test and launch', desc: 'We check every page and form, set up analytics and go live, then stay close for tweaks.' },
        { title: 'Examples of our work', desc: 'Want to see recent sites? Ask for the free first design and judge us on your own project.', href: '/contact' },
      ],
    },
    faqs: [
      { q: 'What does a website cost?', a: 'Website design is included in our Growth plan, and one-off projects are quoted after a short conversation. Your first design is free either way.' },
      { q: 'Will my site be good for SEO?', a: 'Yes. We build with clean structure, fast load times, proper headings, metadata and structured data from day one.' },
    ],
  },
  'growth-marketing': {
    deepDive: {
      eyebrow: 'Experiment examples',
      title: 'The kinds of tests we run.',
      intro: 'Growth marketing is a habit of running small, measurable experiments and keeping what works. These are typical starting points, chosen according to your funnel.',
      items: [
        { title: 'Landing page tests', desc: 'Headlines, offers, proof points and form length, tested against each other to lift conversion rate.' },
        { title: 'Offer and pricing presentation', desc: 'How plans are framed and which call to action converts best.' },
        { title: 'Channel mix tests', desc: 'Small budget shifts between search, social and email to find where the next customer is cheapest to win.' },
        { title: 'Lifecycle messaging', desc: 'Welcome, nurture and win-back sequences tested for timing and content.' },
        { title: 'Measurement and learning log', desc: 'Every experiment is logged with its hypothesis, result and what we do next, so learning compounds.' },
      ],
    },
    faqs: [
      { q: 'How much does growth marketing cost?', a: 'Our Growth plan is $5,000 per month and combines strategy, content, SEO, advertising and automation under one partner. See the pricing page for the full list.' },
      { q: 'Can you show results?', a: 'We share relevant results and examples on a call, once we understand your goals and industry.' },
    ],
  },
}
