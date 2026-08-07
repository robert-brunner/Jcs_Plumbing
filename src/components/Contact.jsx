export default function Contact() {
  return (
    <section id="contact" style={{
      background: '#1C2333', padding: '6rem 2rem',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Mountain top divider */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0 }}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ display: 'block', width: '100%' }}>
          <path d="M0,0 L0,30 L240,50 L480,20 L720,45 L960,15 L1200,40 L1440,25 L1440,0 Z" fill="#0F1520"/>
        </svg>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ fontSize: '0.75rem', letterSpacing: '0.35em', color: '#C9A84C', textTransform: 'uppercase', marginBottom: '0.75rem', fontFamily: "'Source Serif 4', serif" }}>
            Get In Touch
          </div>
          <h2 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(2.5rem, 6vw, 4rem)', letterSpacing: '0.05em',
            color: '#F0EDE6',
          }}>
            Ready to <span style={{ color: '#C9A84C' }}>Get it Fixed?</span>
          </h2>
          <p style={{ color: '#8A9BB0', marginTop: '1rem', lineHeight: 1.7 }}>
            Reach out any time — we're always open. For emergencies, call directly.
          </p>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '2rem',
        }} className="contact-grid">
          {/* Contact info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {[
              { icon: '📞', label: 'Phone', val: '(909) 333-9652', href: 'tel:9093339652' },
              { icon: '✉️', label: 'Email', val: 'joe.cortez.1@icloud.com', href: 'mailto:joe.cortez.1@icloud.com' },
              { icon: '📍', label: 'Address', val: 'PO Box 1751, Crestline, CA', href: null },
              { icon: '🕐', label: 'Hours', val: 'Always Open — 24/7', href: null },
            ].map((item, i) => (
              <ContactRow key={i} {...item} />
            ))}

            <div style={{
              marginTop: '1rem', padding: '1.5rem',
              border: '1px solid rgba(201,168,76,0.2)',
              background: 'rgba(201,168,76,0.04)',
            }}>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.1rem', color: '#C9A84C', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                🏔️ Mountain Service Area
              </div>
              <p style={{ color: '#8A9BB0', fontSize: '0.9rem', lineHeight: 1.6 }}>
                Crestline · Lake Arrowhead · Running Springs · Big Bear · Wrightwood · Blue Jay & surrounding communities
              </p>
            </div>
          </div>

          {/* CTA panel */}
          <div style={{
            background: 'linear-gradient(145deg, #0F1520, #1C2333)',
            border: '1px solid rgba(201,168,76,0.2)',
            padding: '2.5rem', display: 'flex', flexDirection: 'column',
            justifyContent: 'center', alignItems: 'center', textAlign: 'center',
            gap: '1.5rem',
          }}>
            <div style={{
              width: '80px', height: '80px', borderRadius: '50%',
              background: 'rgba(201,168,76,0.1)', border: '2px solid rgba(201,168,76,0.3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '2rem',
            }}>🔧</div>

            <div>
              <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.8rem', color: '#F0EDE6', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>
                Emergency? Call Now.
              </h3>
              <p style={{ color: '#8A9BB0', fontSize: '0.9rem', lineHeight: 1.6 }}>
                Don't wait on a mountain emergency. Joe picks up.
              </p>
            </div>

            <a href="tel:9093339652" style={{
              background: 'linear-gradient(135deg, #C9A84C, #E2C97E)',
              color: '#0F1520', padding: '1rem 2.5rem',
              textDecoration: 'none', fontFamily: "'Bebas Neue', sans-serif",
              fontSize: '1.4rem', letterSpacing: '0.1em', borderRadius: '3px',
              boxShadow: '0 4px 24px rgba(201,168,76,0.3)',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(201,168,76,0.45)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 4px 24px rgba(201,168,76,0.3)'; }}
            >
              (909) 333-9652
            </a>

            <a href="mailto:joe.cortez.1@icloud.com" style={{
              color: '#8A9BB0', fontSize: '0.85rem', letterSpacing: '0.08em',
              textDecoration: 'none', borderBottom: '1px solid rgba(138,155,176,0.3)',
              transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.color = '#C9A84C'}
              onMouseLeave={e => e.currentTarget.style.color = '#8A9BB0'}
            >
              Or send an email →
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

function ContactRow({ icon, label, val, href }) {
  const content = (
    <div style={{
      display: 'flex', alignItems: 'flex-start', gap: '1rem',
      padding: '1rem 1.2rem',
      border: '1px solid rgba(201,168,76,0.1)',
      background: 'rgba(15,21,32,0.4)',
      transition: 'border-color 0.2s',
    }}
      onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)'}
      onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(201,168,76,0.1)'}
    >
      <span style={{ fontSize: '1.3rem', flexShrink: 0 }}>{icon}</span>
      <div>
        <div style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: '#C9A84C', textTransform: 'uppercase', marginBottom: '0.2rem' }}>{label}</div>
        <div style={{ color: '#F0EDE6', fontSize: '0.95rem' }}>{val}</div>
      </div>
    </div>
  )

  return href
    ? <a href={href} style={{ textDecoration: 'none', display: 'block' }}>{content}</a>
    : content
}
