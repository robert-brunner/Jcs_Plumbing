const mainLogo = '/main_Logo.webp'

export default function Hero() {
  return (
    <section id="hero" style={{
      position: 'relative', minHeight: '100vh',
      display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
      textAlign: 'center', overflow: 'hidden',
      background: 'linear-gradient(170deg, #0F1520 0%, #1C2333 50%, #0F1520 100%)',
      padding: '120px 2rem 0',
    }}>
      <Stars />

      <svg viewBox="0 0 1440 500" preserveAspectRatio="xMidYMax slice"
        style={{ position: 'absolute', bottom: 0, left: 0, right: 0, width: '100%', opacity: 0.18 }}>
        <polygon points="0,500 180,200 320,320 500,100 680,280 860,60 1020,240 1200,140 1440,300 1440,500" fill="#2E3A50"/>
        <polygon points="0,500 200,280 400,380 600,180 800,320 1000,140 1200,260 1440,180 1440,500" fill="#1C2333"/>
      </svg>

      <svg viewBox="0 0 1440 500" preserveAspectRatio="xMidYMax slice"
        style={{ position: 'absolute', bottom: 0, left: 0, right: 0, width: '100%', opacity: 0.22 }}>
        <polygon points="460,120 500,100 540,120 520,110 500,105 480,110" fill="white"/>
        <polygon points="840,80 860,60 880,80 865,72 860,68 855,72" fill="white"/>
        <polygon points="1180,155 1200,140 1220,155 1205,148 1200,145 1195,148" fill="white"/>
      </svg>

      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-60%)',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }}/>

      <div style={{ position: 'relative', zIndex: 2, marginBottom: '2rem' }}>
        <img src={mainLogo} alt="JC's Plumbing" style={{ width: 220, height: 220, objectFit: 'contain', filter: 'drop-shadow(0 0 30px rgba(201,168,76,0.35))' }} />
      </div>

      <div style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          fontSize: 'clamp(0.7rem, 2vw, 0.85rem)', letterSpacing: '0.35em',
          color: '#C9A84C', textTransform: 'uppercase', marginBottom: '0.8rem',
          fontFamily: "'Source Serif 4', serif",
        }}>
          Crestline, CA · Since 1999
        </div>

        <h1 style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 'clamp(3.5rem, 9vw, 7rem)',
          lineHeight: 0.95, letterSpacing: '0.05em',
          color: '#F0EDE6', marginBottom: '0.5rem',
        }}>
          JC's <span style={{ color: '#C9A84C' }}>Plumbing</span>
        </h1>

        <div style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 'clamp(1rem, 3vw, 1.6rem)',
          letterSpacing: '0.25em', color: '#8A9BB0', marginBottom: '1.8rem',
        }}>
          HIGH ALTITUDE DURABILITY
        </div>

        <p style={{ maxWidth: '520px', margin: '0 auto 2.5rem', fontSize: '1.05rem', lineHeight: 1.7, color: '#8A9BB0' }}>
          Over 25 years serving mountain communities. We understand what high-elevation homes demand — and we deliver work that holds up year after year.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="tel:9093339652" style={{
            background: 'linear-gradient(135deg, #C9A84C, #E2C97E)',
            color: '#0F1520', padding: '0.9rem 2.2rem', borderRadius: '3px',
            textDecoration: 'none', fontFamily: "'Bebas Neue', sans-serif",
            fontSize: '1.2rem', letterSpacing: '0.1em',
            boxShadow: '0 4px 24px rgba(201,168,76,0.3)', transition: 'transform 0.2s, box-shadow 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(201,168,76,0.45)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 4px 24px rgba(201,168,76,0.3)' }}
          >Call Now: (909) 333-9652</a>
          <a href="#services" style={{
            border: '1px solid rgba(201,168,76,0.4)', color: '#C9A84C',
            padding: '0.9rem 2.2rem', borderRadius: '3px',
            textDecoration: 'none', fontFamily: "'Bebas Neue', sans-serif",
            fontSize: '1.2rem', letterSpacing: '0.1em', transition: 'background 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(201,168,76,0.08)'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >Our Services</a>
        </div>

        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          marginTop: '2rem', padding: '0.4rem 1rem',
          border: '1px solid rgba(138,155,176,0.2)', borderRadius: '20px',
        }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#4CAF50', display: 'inline-block', boxShadow: '0 0 8px #4CAF50' }}/>
          <span style={{ fontSize: '0.8rem', color: '#8A9BB0', letterSpacing: '0.1em' }}>ALWAYS OPEN · 24/7 EMERGENCY SERVICE</span>
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ display: 'block', width: '100%' }}>
          <path d="M0,80 L0,40 L180,60 L360,20 L540,55 L720,15 L900,50 L1080,25 L1260,55 L1440,30 L1440,80 Z" fill="#0F1520"/>
          <path d="M360,20 L390,8 L420,20 L400,14 L380,10 Z" fill="rgba(255,255,255,0.6)"/>
          <path d="M720,15 L750,2 L780,15 L760,8 L740,5 Z" fill="rgba(255,255,255,0.7)"/>
        </svg>
      </div>
    </section>
  )
}

function Stars() {
  const stars = Array.from({ length: 60 }, (_, i) => ({
    x: Math.random() * 100, y: Math.random() * 60,
    r: Math.random() * 1.2 + 0.3, op: Math.random() * 0.5 + 0.2,
  }))
  return (
    <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
      {stars.map((s, i) => <circle key={i} cx={`${s.x}%`} cy={`${s.y}%`} r={s.r} fill="white" opacity={s.op}/>)}
    </svg>
  )
}