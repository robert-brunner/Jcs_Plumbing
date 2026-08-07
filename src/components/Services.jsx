const services = [
  {
    icon: '🔧',
    title: 'Emergency Repairs',
    desc: 'Burst pipes, failed water heaters, frozen lines — we respond fast when mountain conditions strike without warning.',
    tag: '24/7 Available',
  },
  {
    icon: '🏔️',
    title: 'High-Altitude Installs',
    desc: 'Pressure regulation, freeze-proof systems, and altitude-correct fixture installs that standard plumbers miss.',
    tag: 'Our Specialty',
  },
  {
    icon: '🚿',
    title: 'Bathroom & Kitchen',
    desc: 'Full remodels or single fixture upgrades. We match mountain cabin aesthetics with modern plumbing reliability.',
    tag: 'Full Service',
  },
  {
    icon: '🔥',
    title: 'Water Heaters',
    desc: 'Tank, tankless, and propane systems sized right for elevation. We handle replacement, repair, and efficiency upgrades.',
    tag: 'All Types',
  },
  {
    icon: '🧊',
    title: 'Winterization',
    desc: 'Protect your property before the freeze hits. Pipe insulation, drain-down service, and seasonal prep for cabins and homes.',
    tag: 'Seasonal',
  },
  {
    icon: '🔍',
    title: 'Leak Detection',
    desc: 'Slab leaks, hidden pipe damage, and water loss diagnosis. We find what others miss with 25 years of mountain know-how.',
    tag: 'Diagnostic',
  },
]

export default function Services() {
  return (
    <section id="services" style={{
      background: '#0F1520', padding: '6rem 2rem',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{
            fontSize: '0.75rem', letterSpacing: '0.35em', color: '#C9A84C',
            textTransform: 'uppercase', marginBottom: '0.75rem',
            fontFamily: "'Source Serif 4', serif",
          }}>What We Do</div>
          <h2 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(2.5rem, 6vw, 4rem)', letterSpacing: '0.05em',
            color: '#F0EDE6',
          }}>
            Services Built for the <span style={{ color: '#C9A84C' }}>Mountain</span>
          </h2>
          <p style={{ color: '#8A9BB0', maxWidth: '520px', margin: '1rem auto 0', lineHeight: 1.7 }}>
            High elevation brings unique plumbing challenges. Every service we offer is tuned for the conditions of mountain living.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5px',
          background: 'rgba(201,168,76,0.1)',
          border: '1px solid rgba(201,168,76,0.1)',
        }}>
          {services.map((s, i) => (
            <ServiceCard key={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ icon, title, desc, tag }) {
  return (
    <div
      style={{
        background: '#1C2333', padding: '2.2rem',
        transition: 'background 0.25s',
        cursor: 'default',
        position: 'relative',
      }}
      onMouseEnter={e => e.currentTarget.style.background = '#243040'}
      onMouseLeave={e => e.currentTarget.style.background = '#1C2333'}
    >
      <div style={{
        position: 'absolute', top: '1.5rem', right: '1.5rem',
        fontSize: '0.65rem', letterSpacing: '0.15em',
        color: '#C9A84C', border: '1px solid rgba(201,168,76,0.3)',
        padding: '0.2rem 0.5rem', borderRadius: '2px',
      }}>{tag}</div>

      <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{icon}</div>
      <h3 style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: '1.5rem', letterSpacing: '0.06em',
        color: '#F0EDE6', marginBottom: '0.75rem',
      }}>{title}</h3>
      <p style={{ color: '#8A9BB0', lineHeight: 1.7, fontSize: '0.95rem' }}>{desc}</p>

      {/* Corner accent */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0,
        width: '3rem', height: '2px',
        background: 'linear-gradient(90deg, #C9A84C, transparent)',
      }}/>
    </div>
  )
}
