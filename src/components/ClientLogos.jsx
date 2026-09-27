import './ClientLogos.css'

const LOGOS = [
  { name: 'Vela Commerce',       abbr: 'VC'  },
  { name: 'Stackable SaaS',      abbr: 'SS'  },
  { name: 'Brightpath',          abbr: 'BP'  },
  { name: 'Northbank Studio',    abbr: 'NB'  },
  { name: 'Rootline Foods',      abbr: 'RF'  },
  { name: 'Apex Services',       abbr: 'AS'  },
  { name: 'Meridian Digital',    abbr: 'MD'  },
  { name: 'Forge Collective',    abbr: 'FC'  },
]

export function ClientLogos() {
  return (
    <section className="client-logos" aria-label="Clients we work with">
      <p className="client-logos__label label">Trusted by forward-thinking businesses</p>
      <div className="client-logos__track-wrap" aria-hidden="true">
        <div className="client-logos__track">
          {[...LOGOS, ...LOGOS].map(({ name, abbr }, i) => (
            <div key={`${name}-${i}`} className="client-logos__item">
              <span className="client-logos__abbr">{abbr}</span>
              <span className="client-logos__name">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
