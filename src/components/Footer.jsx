export default function Footer() {
  return (
    <footer style={{
      background: '#0F1520',
      borderTop: '1px solid rgba(201,168,76,0.15)',
      padding: '2.5rem 2rem',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
        <div>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.4rem', color: '#C9A84C', letterSpacing: '0.1em' }}>
            JC's Plumbing
          </div>
          <div style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: '#8A9BB0', textTransform: 'uppercase' }}>
            High Altitude Durability
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#4CAF50', display: 'inline-block', boxShadow: '0 0 8px #4CAF50' }}/>
          <span style={{ color: '#8A9BB0', fontSize: '0.8rem' }}>Always Open · 24/7</span>
        </div>

        <div style={{ color: '#8A9BB0', fontSize: '0.8rem', textAlign: 'right' }}>
          <div>PO Box 1751, Crestline, CA</div>
          <div style={{ marginTop: '0.2rem' }}>
            <a href="tel:9093339652" style={{ color: '#C9A84C', textDecoration: 'none' }}>(909) 333-9652</a>
            {' · '}
            <a href="mailto:joe.cortez.1@icloud.com" style={{ color: '#8A9BB0', textDecoration: 'none' }}>joe.cortez.1@icloud.com</a>
          </div>
        </div>
      </div>

      <div style={{
        maxWidth: '1100px', margin: '1.5rem auto 0',
        paddingTop: '1.5rem', borderTop: '1px solid rgba(138,155,176,0.1)',
        textAlign: 'center', color: '#2E3A50', fontSize: '0.75rem', letterSpacing: '0.1em',
      }}>
        © {new Date().getFullYear()} JC's Plumbing — Serving the San Bernardino Mountains for 25+ Years
      </div>
    </footer>
  )
}
