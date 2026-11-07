// Editorial layer on top of the raw posts: featured image, diagrams, inline links and "further reading" sources.
// Kept separate from the post text so links and figures are easy to review and change.

// ── Inline links: [phrase that must appear in the post, url]. First occurrence in a paragraph/list item is linked.
// Internal urls start with "/" (or "#contact" for the free-audit popup). External urls start with https://.
export const LINKS = {
  'ai-marketing-agency-pricing': [
    ['Our own plans are public', '/pricing'], ['an SEO audit and setup', '/services/ai-powered-seo'], ['Google and Meta advertising', '/services/ai-advertising'],
    ['marketing automation', '/services/marketing-automation'], ['website and presentation design', '/services/ai-website-design'],
    ['ask for a written scope', '/blog/how-to-choose-ai-marketing-agency'], ['a free audit', '#contact'], ['SEO, content and ads', '/services/ai-content-marketing'],
  ],
  'what-is-ai-marketing': [
    ['plan, create, optimise and measure marketing', '/services/ai-marketing-strategy'], ['drafting an email', '/services/ai-content-marketing'], ['AI assistants', '/generative-engine-optimization'],
    ['ask us for a free audit', '#contact'], ['lead follow-up', '/blog/small-business-marketing-automation'], ['Generating many ad headline and image variants to test', '/blog/ai-improves-google-ads'], ['Analysing search results to find topic gaps', '/services/ai-powered-seo'], ['Pick one repetitive task that eats time', '/blog/how-to-use-ai-in-marketing'],
    ['generative AI', 'https://developers.google.com/search/docs/fundamentals/using-gen-ai-content'],
  ],
  'how-to-choose-ai-marketing-agency': [
    ['Who reviews AI output before it reaches me?', '/services/ai-content-marketing'], ['published pricing', '/pricing'], ['free marketing audit', '#contact'],
    ['Is ad spend separate', '/blog/ai-marketing-agency-pricing'], ['Which numbers will you report, and how often?', '/blog/ai-marketing-strategy-template'], ['Guaranteed rankings or guaranteed leads', 'https://developers.google.com/search/docs/fundamentals/do-i-need-seo'],
    ['How do you keep content accurate and on-brand?', '/blog/ai-content-marketing-strategy'],
  ],
  'ai-seo-vs-traditional-seo': [
    ['Technical health still matters', '/services/ai-powered-seo'], ['direct definitions', '/blog/what-is-aeo'], ['Our service combines these', '/generative-engine-optimization'],
    ['genuinely helpful content', 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content'], ['how AI tools describe you', '/blog/how-to-rank-in-chatgpt'],
    ['measure both search and AI visibility', '#contact'],
  ],
  'generative-engine-optimization-guide': [
    ['Organization and Service schema', 'https://schema.org/Organization'], ['Answer engine optimization (AEO)', '/blog/what-is-aeo'], ['good SEO is the base', '/services/ai-powered-seo'],
    ['Do not block legitimate crawlers', 'https://developers.google.com/search/docs/crawling-indexing/robots/intro'], ['generative AI tools', '/generative-engine-optimization'],
    ['Earn third-party mentions', '/blog/how-to-rank-in-chatgpt'], ['Publish answer-ready pages', '/blog/optimize-content-for-ai-search'],
  ],
  'ai-marketing-strategy-template': [
    ['List tasks that are repetitive, data-heavy or slow', '/blog/ai-marketing-examples'], ['attract, convince or convert', '/services/ai-marketing-strategy'], ['free AI marketing audit', '#contact'],
    ['paid ads', '/services/ai-advertising'], ['Who reviews AI output before it is published?', '/blog/ai-content-marketing-strategy'], ['Choose a handful of numbers', '/blog/how-to-use-ai-in-marketing'],
  ],
  'ai-content-marketing-strategy': [
    ['our AI content marketing service', '/services/ai-content-marketing'], ['voice guide', '/services/ai-content-marketing'], ['questions customers ask', '/blog/optimize-content-for-ai-search'],
    ['helps in search and in AI answers', '/generative-engine-optimization'], ['Publish with a clear call to action', '/pricing'],
  ],
  'ai-improves-google-ads': [
    ['Google and Meta', '/services/ai-advertising'], ['Landing pages that match the promise in the ad', '/services/ai-website-design'], ['Our AI advertising service', '/services/ai-advertising'],
    ['Search term review', 'https://ads.google.com/home/'], ['Optimising for clicks instead of leads or sales', '/blog/google-ads-cost-2026'], ['Reporting', '/blog/ai-marketing-strategy-template'],
  ],
  'marketing-automation-workflows': [
    ['Our automation service', '/services/marketing-automation'], ['Lead nurture sequence', '/blog/small-business-marketing-automation'], ['Abandoned cart', '/ai-marketing-for-ecommerce'],
    ['Review request', '/ai-marketing-for-small-business'], ['New lead instant reply', '#contact'], ['Welcome series', '/services/ai-content-marketing'],
  ],
  'ai-seo-pricing': [
    ['Launch at $2,500 per month', '/pricing'], ['Whether AI search visibility is included', '/generative-engine-optimization'], ['A clear list of monthly deliverables', '/services/ai-powered-seo'],
    ['Competition in your market', '/blog/best-ai-seo-tools'], ['advertising, automation and design', '/services/ai-advertising'], ['Link and PR activity', '/blog/ai-seo-vs-traditional-seo'],
  ],
  'aeo-vs-seo': [
    ['generative engine optimization service', '/generative-engine-optimization'], ['featured snippets', 'https://developers.google.com/search/docs/appearance/featured-snippets'],
    ['Add structured data where it applies', 'https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data'], ['SEO', '/services/ai-powered-seo'],
    ['Find the questions your customers ask', '/blog/what-is-aeo'], ['FAQ sections', 'https://schema.org/FAQPage'],
  ],
  'ai-marketing-examples': [
    ['Lead scoring so sales calls the best leads first', '/services/marketing-automation'], ['Drafting article outlines', '/services/ai-content-marketing'], ['Checking how AI assistants describe your brand', '/blog/how-to-rank-in-chatgpt'],
    ['Automated bidding toward leads or sales', '/services/ai-advertising'], ['Lead follow-up', '/blog/marketing-automation-workflows'], ['Clustering keywords into topics', '/services/ai-powered-seo'],
  ],
  'how-to-use-ai-in-marketing': [
    ['drafting social posts', '/services/ai-content-marketing'], ['Include your voice guide and a good example', '/blog/ai-content-marketing-strategy'], ['Compare before and after', '/blog/ai-marketing-strategy-template'],
    ['A common order is content', '/blog/marketing-automation-workflows'], ['AI can state wrong facts confidently', 'https://www.nist.gov/itl/ai-risk-management-framework'],
  ],
  'how-to-rank-in-chatgpt': [
    ['Organization and Service structured data', 'https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data'], ['generative engine optimization service', '/generative-engine-optimization'],
    ['best AI marketing agency for small business', '/ai-marketing-for-small-business'], ['Google AI Overviews', '/blog/get-cited-in-ai-overviews'], ['Whether your pages answer common questions directly', '/blog/optimize-content-for-ai-search'],
    ['ChatGPT', 'https://chatgpt.com'], ['Perplexity', 'https://www.perplexity.ai'],
  ],
  'get-cited-in-ai-overviews': [
    ['Follow Google\'s guidance on helpful, people-first content', 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content'], ['Schema markup such as Organization, Article and FAQ', 'https://schema.org/FAQPage'],
    ['Use Search Console', 'https://search.google.com/search-console/about'], ['Add an FAQ for related questions', '/blog/what-is-aeo'], ['Reviews and mentions from credible third parties', '/blog/how-to-rank-in-chatgpt'],
    ['Make sure pages are indexable and load quickly', '/services/ai-powered-seo'],
  ],
  'small-business-marketing-automation': [
    ['A CRM or email tool', 'https://www.hubspot.com/products/marketing/marketing-automation'], ['Replies to new enquiries', '/blog/marketing-automation-workflows'], ['a good partner takes off your plate', '/services/marketing-automation'],
    ['small businesses', '/ai-marketing-for-small-business'], ['Review requests after a job is done', '/blog/ai-marketing-examples'], ['Appointment confirmations and reminders', '#contact'],
  ],
  'ai-vs-traditional-marketing-agency': [
    ['questions in our buyer guide', '/blog/how-to-choose-ai-marketing-agency'], ['compare what is delivered each month', '/pricing'], ['AI-assisted agencies', '/services/ai-marketing-strategy'],
    ['Unreviewed AI content can be generic or inaccurate', '/blog/ai-content-marketing-strategy'],
    ['We use AI to move faster', '#contact'],
  ],
  'optimize-content-for-ai-search': [
    ['Add an FAQ for follow-up questions', '/blog/what-is-aeo'], ['Make sure pages are indexable and fast', '/services/ai-powered-seo'], ['Add relevant structured data', 'https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data'],
    ['Re-test your key prompts', '/blog/how-to-rank-in-chatgpt'], ['AI search', '/generative-engine-optimization'], ['Link to credible sources', 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content'],
    ['Remove filler and repeated points', '/services/ai-content-marketing'],
  ],
  'what-is-aeo': [
    ['Generative engine optimization (GEO)', '/blog/generative-engine-optimization-guide'], ['Mark up content with structured data', 'https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data'],
    ['SEO', '/services/ai-powered-seo'], ['snippets', 'https://developers.google.com/search/docs/appearance/featured-snippets'], ['Add FAQ sections to key pages', 'https://schema.org/FAQPage'],
    ['our full guide', '/blog/aeo-vs-seo'], ['AI mentions', '/generative-engine-optimization'],
  ],
  'google-ads-cost-2026': [
    ['Our AI advertising service', '/services/ai-advertising'], ['Growth plan at $5,000 per month', '/pricing'], ['Google\'s keyword planner', 'https://ads.google.com/home/tools/keyword-planner/'],
    ['Faster creative testing', '/blog/ai-improves-google-ads'], ['landing pages', '/services/ai-website-design'], ['Management fees', '/blog/ai-marketing-agency-pricing'],
  ],
  'best-ai-seo-tools': [
    ['Google Search Console', 'https://search.google.com/search-console/about'], ['Bing Webmaster Tools', 'https://www.bing.com/webmasters'], ['Ahrefs', 'https://ahrefs.com'], ['Semrush', 'https://www.semrush.com'],
    ['Screaming Frog', 'https://www.screamingfrog.co.uk/seo-spider/'], ['Surfer', 'https://surferseo.com'], ['Clearscope', 'https://www.clearscope.io'], ['our SEO service', '/services/ai-powered-seo'],
    ['Cancel anything you did not use last month', '/blog/ai-seo-pricing'], ['You can start with a spreadsheet of test prompts', '/blog/how-to-rank-in-chatgpt'], ['AI assistants help with outlines', '/blog/how-to-use-ai-in-marketing'],
  ],
}

// ── "Further reading": external sources shown at the end of each post ──
const GH = 'https://developers.google.com/search/docs'
const S = {
  helpful: ['Google Search Central: creating helpful, reliable, people-first content', `${GH}/fundamentals/creating-helpful-content`],
  genai: ['Google Search Central: using generative AI content on your site', `${GH}/fundamentals/using-gen-ai-content`],
  aifeat: ['Google Search Central: AI features and your website', `${GH}/appearance/ai-features`],
  starter: ['Google Search Central: SEO starter guide', `${GH}/fundamentals/seo-starter-guide`],
  needseo: ['Google Search Central: do you need an SEO?', `${GH}/fundamentals/do-i-need-seo`],
  struct: ['Google Search Central: introduction to structured data', `${GH}/appearance/structured-data/intro-structured-data`],
  snippets: ['Google Search Central: featured snippets and your website', `${GH}/appearance/featured-snippets`],
  robots: ['Google Search Central: introduction to robots.txt', `${GH}/crawling-indexing/robots/intro`],
  org: ['Schema.org: Organization', 'https://schema.org/Organization'],
  faq: ['Schema.org: FAQPage', 'https://schema.org/FAQPage'],
  gsc: ['Google Search Console', 'https://search.google.com/search-console/about'],
  ga: ['Google Analytics', 'https://marketingplatform.google.com/about/analytics/'],
  bing: ['Bing Webmaster Tools', 'https://www.bing.com/webmasters'],
  ads: ['Google Ads', 'https://ads.google.com/home/'],
  kp: ['Google Ads Keyword Planner', 'https://ads.google.com/home/tools/keyword-planner/'],
  meta: ['Meta: advertising on Facebook and Instagram', 'https://www.facebook.com/business/ads'],
  nist: ['NIST: AI Risk Management Framework', 'https://www.nist.gov/itl/ai-risk-management-framework'],
  chatgptsearch: ['OpenAI: introducing ChatGPT search', 'https://openai.com/index/introducing-chatgpt-search/'],
  hubspot: ['HubSpot: marketing automation software', 'https://www.hubspot.com/products/marketing/marketing-automation'],
  klaviyo: ['Klaviyo: email and SMS marketing for eCommerce', 'https://www.klaviyo.com'],
  zapier: ['Zapier: connect your apps and automate workflows', 'https://zapier.com'],
  ac: ['ActiveCampaign: customer experience automation', 'https://www.activecampaign.com'],
  ahrefs: ['Ahrefs: SEO tools and resources', 'https://ahrefs.com'],
  semrush: ['Semrush: online marketing toolkit', 'https://www.semrush.com'],
  sf: ['Screaming Frog SEO Spider', 'https://www.screamingfrog.co.uk/seo-spider/'],
  surfer: ['Surfer: content optimisation', 'https://surferseo.com'],
}
export const SOURCES = {
  'ai-marketing-agency-pricing': [S.ads, S.meta, S.needseo],
  'what-is-ai-marketing': [S.nist, S.genai],
  'how-to-choose-ai-marketing-agency': [S.needseo, S.helpful],
  'ai-seo-vs-traditional-seo': [S.starter, S.aifeat, S.helpful],
  'generative-engine-optimization-guide': [S.aifeat, S.struct, S.org, S.chatgptsearch],
  'ai-marketing-strategy-template': [S.gsc, S.ga],
  'ai-content-marketing-strategy': [S.helpful, S.genai],
  'ai-improves-google-ads': [S.ads, S.meta, S.kp],
  'marketing-automation-workflows': [S.zapier, S.hubspot, S.klaviyo],
  'ai-seo-pricing': [S.starter, S.needseo, S.gsc],
  'aeo-vs-seo': [S.snippets, S.aifeat, S.faq],
  'ai-marketing-examples': [S.genai, S.nist],
  'how-to-use-ai-in-marketing': [S.nist, S.genai],
  'how-to-rank-in-chatgpt': [S.chatgptsearch, S.aifeat],
  'get-cited-in-ai-overviews': [S.aifeat, S.helpful, S.struct],
  'small-business-marketing-automation': [S.hubspot, S.ac, S.zapier],
  'ai-vs-traditional-marketing-agency': [S.needseo, S.helpful],
  'optimize-content-for-ai-search': [S.aifeat, S.helpful, S.robots],
  'what-is-aeo': [S.snippets, S.faq],
  'google-ads-cost-2026': [S.ads, S.kp],
  'best-ai-seo-tools': [S.gsc, S.bing, S.ahrefs, S.semrush, S.sf, S.surfer],
}

// ── Diagrams: inserted at the END of the named section (before the next heading) ──
export const FIGURES = {
  'ai-marketing-agency-pricing': [{ after: 'The three common pricing models', kind: 'cards', caption: 'The three ways agencies usually charge',
    items: [{ t: 'Monthly retainer', d: 'Fixed fee for an agreed scope. Best for ongoing SEO, content and ads.' }, { t: 'Project fee', d: 'One price for a defined deliverable such as a website or a roadmap.' }, { t: 'Hourly or day rate', d: 'Best for advice, consulting and training, less so for ongoing work.' }] }],
  'what-is-ai-marketing': [{ after: 'A simple definition', kind: 'loop', caption: 'AI marketing is a loop, with people steering every turn', center: 'AI + people', items: ['Plan', 'Create', 'Optimise', 'Measure'] }],
  'how-to-choose-ai-marketing-agency': [{ after: 'Questions about how they use AI', kind: 'checklist', caption: 'The five things to be sure of before you sign',
    items: [{ t: 'They can say exactly where AI is used' }, { t: 'A person reviews every deliverable' }, { t: 'Pricing and scope are written down' }, { t: 'Reporting shows business outcomes' }, { t: 'There is a clear way to exit' }] }],
  'ai-seo-vs-traditional-seo': [{ after: 'What changes', kind: 'compare', caption: 'Traditional SEO and AI search, side by side',
    left: { title: 'Traditional SEO', items: ['Win a ranking position', 'Optimise for keywords', 'Measure rankings and clicks'] },
    right: { title: 'AI search (GEO)', items: ['Be the source that gets quoted', 'Optimise for entities and answers', 'Also measure AI mentions'] } }],
  'generative-engine-optimization-guide': [{ after: 'A step-by-step AI search plan', kind: 'steps', caption: 'The seven-step AI search plan',
    items: [{ t: 'Write prompts' }, { t: 'Record baseline' }, { t: 'Fix entity clarity' }, { t: 'Publish answers' }, { t: 'Earn mentions' }, { t: 'Allow access' }, { t: 'Re-test monthly' }] }],
  'ai-marketing-strategy-template': [{ after: '8. Risks and rules', kind: 'cards', caption: 'The one-page strategy at a glance',
    items: [{ t: '1. Goal', d: 'One sentence, one number, one date.' }, { t: '2. Audience', d: 'Who, their problem, what they tried.' }, { t: '3. Message', d: 'Your value in a single sentence.' }, { t: '4. Channels', d: 'Two or three, each with a role.' }, { t: '5. AI use cases', d: 'Tool, owner, expected time saved.' }, { t: '6. 90-day plan', d: 'Set up, expand, review.' }, { t: '7. Measurement', d: 'A handful of weekly numbers.' }, { t: '8. Risks and rules', d: 'Review, data, sources.' }] }],
  'ai-content-marketing-strategy': [{ after: 'A workflow that works', kind: 'steps', caption: 'From brief to published, with a person at every checkpoint',
    items: [{ t: 'Brief' }, { t: 'Draft with AI' }, { t: 'Add experience' }, { t: 'Edit' }, { t: 'Publish' }, { t: 'Review' }] }],
  'ai-improves-google-ads': [{ after: 'A simple testing routine', kind: 'loop', caption: 'The ad testing loop', center: 'Learn', items: ['Pick one variable', 'Launch variants', 'Let data decide', 'Keep winners'] }],
  'marketing-automation-workflows': [{ after: 'How to set one up', kind: 'steps', caption: 'Anatomy of a simple automation',
    items: [{ t: 'Trigger', d: 'Something happens' }, { t: 'Wait', d: 'A sensible delay' }, { t: 'Message', d: 'In your voice' }, { t: 'Check', d: 'Did they act?' }, { t: 'Exit', d: 'Stop when they do' }] }],
  'ai-seo-pricing': [{ after: 'What drives the cost', kind: 'cards', caption: 'Five things that move the price of SEO',
    items: [{ t: 'Site size', d: 'More pages and more fixes.' }, { t: 'Competition', d: 'Harder markets need more effort.' }, { t: 'Content volume', d: 'Articles planned each month.' }, { t: 'Links and PR', d: 'Outreach and authority building.' }, { t: 'AI search', d: 'Whether GEO is included.' }] }],
  'aeo-vs-seo': [{ after: 'The difference in one table, in words', kind: 'nested', caption: 'How SEO, AEO and GEO overlap',
    layers: [{ t: 'SEO', d: 'Earn visibility and clicks in search results.' }, { t: 'AEO', d: 'Give direct answers that can be lifted into snippets and summaries.' }, { t: 'GEO', d: 'Be understood, trusted and cited by generative AI tools.' }] }],
  'ai-marketing-examples': [{ after: 'How to choose your first one', kind: 'cards', caption: 'Four areas where AI helps most',
    items: [{ t: 'Content and creative', d: 'Drafts, repurposing, ad variants.' }, { t: 'Search and visibility', d: 'Clustering, titles, AI answer checks.' }, { t: 'Advertising and sales', d: 'Bidding, lead scoring, personalised follow-up.' }, { t: 'Customer insight', d: 'Review summaries, chat, reporting.' }] }],
  'how-to-use-ai-in-marketing': [{ after: 'Step 1: list your time sinks', kind: 'steps', caption: 'Six steps from first experiment to a reliable workflow',
    items: [{ t: 'List time sinks' }, { t: 'Pick one task' }, { t: 'Write instructions' }, { t: 'Keep a human in' }, { t: 'Measure' }, { t: 'Expand' }] }],
  'how-to-rank-in-chatgpt': [{ after: 'How to monitor your brand in AI tools', kind: 'loop', caption: 'The monthly AI visibility check', center: 'Monitor', items: ['Run prompts', 'Log answers', 'Fix gaps', 'Re-test'] }],
  'get-cited-in-ai-overviews': [{ after: 'Make content easy to quote', kind: 'checklist', caption: 'What a quotable page looks like',
    items: [{ t: 'A short direct answer near the top' }, { t: 'Headings that mirror the question' }, { t: 'Detail, steps and examples after it' }, { t: 'Lists and short paragraphs' }, { t: 'An FAQ for related questions' }] }],
  'small-business-marketing-automation': [{ after: 'What to keep human', kind: 'compare', caption: 'Automate the routine, keep the human moments',
    left: { title: 'Automate', items: ['Replies to new enquiries', 'Reminders and confirmations', 'Review requests', 'Follow-up sequences'] },
    right: { title: 'Keep human', items: ['Sensitive conversations', 'High-value sales calls', 'Complaints', 'Anything complicated'] } }],
  'ai-vs-traditional-marketing-agency': [{ after: 'Risk', kind: 'compare', caption: 'AI-assisted and traditional agencies compared',
    left: { title: 'AI-assisted agency', items: ['Faster research and testing', 'More output for the same fee', 'Needs careful human review'] },
    right: { title: 'Traditional agency', items: ['Slower, more manual production', 'Often deep, bespoke creative', 'Cost scales with headcount'] } }],
  'optimize-content-for-ai-search': [{ after: 'Prioritise', kind: 'checklist', caption: 'The AI search refresh checklist',
    items: [{ t: 'Structure', d: 'Direct answer first, clear headings' }, { t: 'Substance', d: 'Specific detail, honest scope' }, { t: 'Entities and trust', d: 'Clear author and business details' }, { t: 'Freshness', d: 'Real dates, current claims' }, { t: 'Technical', d: 'Indexable, fast, structured data' }] }],
  'what-is-aeo': [{ after: 'How AEO works', kind: 'steps', caption: 'How an answer-ready page is built',
    items: [{ t: 'Find the question' }, { t: 'Answer it directly' }, { t: 'Back it with detail' }, { t: 'Mark it up' }] }],
  'google-ads-cost-2026': [{ after: 'How to set a starting budget', kind: 'steps', caption: 'Working out a test budget, step by step',
    items: [{ t: 'Set a goal', d: 'Customers wanted' }, { t: 'Estimate conversion', d: 'Visit to lead to sale' }, { t: 'Estimate cost per click', d: 'Keyword Planner' }, { t: 'Do the maths', d: 'Budget needed' }, { t: 'Start and adjust', d: 'Learn first' }] }],
  'best-ai-seo-tools': [{ after: 'AI search monitoring', kind: 'table', caption: 'Pick the tool by the job',
    head: ['Job', 'Example tools'], rows: [['Search performance', 'Google Search Console, Google Analytics'], ['Research and keywords', 'Ahrefs or Semrush (pick one)'], ['Content optimisation', 'Surfer, Clearscope'], ['Technical audits', 'Screaming Frog'], ['AI search monitoring', 'A spreadsheet of test prompts to start']] }],
}

export const imageFor = (slug) => `/img/blog/${slug}.jpg`
