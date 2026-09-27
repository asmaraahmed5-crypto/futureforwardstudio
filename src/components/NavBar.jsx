import * as React from 'react'
import { NavigationMenu as NavPrimitive } from 'radix-ui'
import { ChevronDownIcon } from 'lucide-react'
import './NavBar.css'

const SERVICES = [
  { title: 'AI Marketing Strategy',   desc: 'Find where AI fits and build the roadmap.',             href: '#services' },
  { title: 'AI Content Marketing',    desc: 'Brand-safe content at scale, no army of writers.',       href: '#services' },
  { title: 'AI-Powered SEO',          desc: 'Uncover opportunities and build content authority.',     href: '#services' },
  { title: 'AI Advertising',          desc: 'AI-powered insights for smarter ad spend.',              href: '#services' },
  { title: 'Marketing Automation',    desc: 'Automate lead nurturing and repetitive workflows.',      href: '#services' },
  { title: 'Customer Intelligence',   desc: 'Turn customer signals into actionable insights.',        href: '#services' },
  { title: 'Marketing Analytics',     desc: 'Simple answers from complex data.',                      href: '#services' },
  { title: 'Growth Marketing',        desc: 'Connect the dots and move your business forward.',       href: '#services' },
]

const CLOUD_FEATURES = [
  { title: 'Create',      desc: 'Generate campaigns and content faster.'      },
  { title: 'Understand',  desc: 'Turn data into useful insights.'             },
  { title: 'Automate',    desc: 'Handle repetitive marketing tasks.'          },
  { title: 'Personalise', desc: 'Messaging that feels relevant.'              },
  { title: 'Optimise',    desc: 'Spot what works, fix what doesn\'t.'         },
  { title: 'Grow',        desc: 'Insights into real forward momentum.'        },
]

export default function NavBar() {
  return (
    <header className="site-header">
      <a href="#home" className="nav-logo-link">
        <img src="/logo-horizontal.png" alt="Future Forward Studio" className="nav-logo" width="300" height="100" />
      </a>

      <NavPrimitive.Root className="nav-root" delayDuration={100} style={{ position: 'static' }}>
        <NavPrimitive.List className="nav-list">

          {/* Services */}
          <NavPrimitive.Item>
            <NavPrimitive.Trigger className="nav-trigger">
              Services
              <ChevronDownIcon className="nav-chevron" size={14} aria-hidden="true" />
            </NavPrimitive.Trigger>
            <NavPrimitive.Content className="nav-content">
              <div className="nav-panel nav-panel--services">
                <div className="nav-panel__intro">
                  <span className="label">Our Services</span>
                  <p>AI-powered marketing across every channel.</p>
                  <a href="#services" className="btn btn--ghost btn--sm nav-panel__cta">View all services →</a>
                </div>
                <ul className="nav-services-grid">
                  {SERVICES.map((s) => (
                    <li key={s.title}>
                      <NavPrimitive.Link asChild>
                        <a href={s.href} className="nav-service-item">
                          <span className="nav-service-item__title">{s.title}</span>
                          <span className="nav-service-item__desc">{s.desc}</span>
                        </a>
                      </NavPrimitive.Link>
                    </li>
                  ))}
                </ul>
              </div>
            </NavPrimitive.Content>
          </NavPrimitive.Item>

          {/* AI Cloud */}
          <NavPrimitive.Item>
            <NavPrimitive.Trigger className="nav-trigger">
              AI Cloud
              <ChevronDownIcon className="nav-chevron" size={14} aria-hidden="true" />
            </NavPrimitive.Trigger>
            <NavPrimitive.Content className="nav-content">
              <div className="nav-panel nav-panel--cloud">
                <div className="nav-cloud-feature">
                  <span className="label">AI Marketing Cloud</span>
                  <p className="nav-cloud-feature__title">your marketing's<br />command center.</p>
                  <p>One connected environment. Less jumping between tools.</p>
                  <a href="#cloud" className="btn btn--primary btn--sm">Explore Cloud →</a>
                </div>
                <ul className="nav-cloud-grid">
                  {CLOUD_FEATURES.map((f) => (
                    <li key={f.title}>
                      <NavPrimitive.Link asChild>
                        <a href="#cloud" className="nav-cloud-item">
                          <span className="nav-cloud-item__title">{f.title}</span>
                          <span className="nav-cloud-item__desc">{f.desc}</span>
                        </a>
                      </NavPrimitive.Link>
                    </li>
                  ))}
                </ul>
              </div>
            </NavPrimitive.Content>
          </NavPrimitive.Item>

          {/* About */}
          <NavPrimitive.Item>
            <NavPrimitive.Link asChild>
              <a href="#about" className="nav-link">About</a>
            </NavPrimitive.Link>
          </NavPrimitive.Item>

        </NavPrimitive.List>

        {/* Viewport — Radix teleports Content here */}
        <div className="nav-viewport-positioner">
          <NavPrimitive.Viewport className="nav-viewport" />
        </div>
      </NavPrimitive.Root>

      <a href="#contact" className="btn btn--primary btn--sm">Start a Project →</a>
    </header>
  )
}
