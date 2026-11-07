// Pricing plans, shared by the homepage Pricing section and the /pricing page.
export const PLANS = [
  {
    name: 'Launch',
    price: '$2,500',
    amount: 2500,
    period: '/month',
    desc: 'For startups and small businesses ready to bring AI into their marketing.',
    features: [
      'AI Marketing Strategy & Roadmap',
      'AI Content Marketing (4 pieces/mo)',
      'AI-Powered SEO Audit & Setup',
      'Monthly Performance Report',
      'Email & Chat Support',
    ],
    cta: 'Get Started →',
    featured: false,
  },
  {
    name: 'Growth',
    price: '$5,000',
    amount: 5000,
    period: '/month',
    desc: 'For growing businesses that want AI working across every marketing channel.',
    features: [
      'Everything in Launch',
      'AI Advertising (Google + Meta)',
      'Marketing Automation Workflows',
      'AI Website & Presentation Design',
      'Bi-weekly Strategy Calls',
      'Priority Support & Slack Access',
    ],
    cta: 'Start Growing →',
    featured: true,
    badge: 'Most Popular',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    desc: 'For established brands that need a fully tailored AI marketing system.',
    features: [
      'Everything in Growth',
      'Custom AI Marketing System',
      'Dedicated AI Marketing Strategist',
      'Custom Automation Architecture',
      'Weekly Calls + Dedicated Slack',
      'SLA + Onboarding Support',
    ],
    cta: 'Talk to Us →',
    featured: false,
  },
]

export const COMPARE = [
  ['AI marketing strategy and roadmap', true, true, true],
  ['AI content marketing', '4 pieces a month', 'Everything in Launch', 'Custom volume'],
  ['AI-powered SEO audit and setup', true, true, true],
  ['Monthly performance report', true, true, true],
  ['AI advertising (Google and Meta)', false, true, true],
  ['Marketing automation workflows', false, true, true],
  ['AI website and presentation design', false, true, true],
  ['Strategy calls', false, 'Bi-weekly', 'Weekly'],
  ['Support', 'Email and chat', 'Priority and Slack', 'Dedicated Slack and SLA'],
  ['Dedicated AI marketing strategist', false, false, true],
  ['Custom automation architecture', false, false, true],
]

export const PRICING_FAQS = [
  { q: 'How much does an AI marketing agency cost at Future Forward Studio?', a: 'Our Launch plan is $2,500 per month and our Growth plan is $5,000 per month. Enterprise pricing is custom and depends on scope.' },
  { q: 'What is included in the free AI marketing audit?', a: 'A free 30-minute review of your current marketing. We look at your website, content, search visibility and campaigns and send back a short list of quick wins. There is no obligation.' },
  { q: 'Is ad spend included in the plan price?', a: 'No. Ad budget is paid directly to Google, Meta and other platforms. Our fee covers the management, creative testing and reporting.' },
  { q: 'Are there long lock-in contracts?', a: 'No. We keep things straightforward and avoid long lock-in contracts. We will agree the terms with you in writing before we start.' },
  { q: 'Can we start small and upgrade later?', a: 'Yes. Many clients start on Launch and move to Growth as results come in. Tell us where you want to start.' },
  { q: 'Do you offer one-off projects, such as a website?', a: 'Yes. Website and presentation design are included in the Growth plan, and we can also quote one-off projects. Your first website design is free.' },
  { q: 'How soon will I see results?', a: 'Quick wins in ads, automation and content output can show within weeks. SEO and authority usually take three to six months to compound.' },
]
