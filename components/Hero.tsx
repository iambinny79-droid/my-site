export default function Hero() {
  return (
    <section style={{
      padding: '80px 48px',
      maxWidth: '1200px',
    }}>
      <div style={{
        display: 'inline-block',
        border: '1px solid #ddd',
        borderRadius: '20px',
        padding: '4px 14px',
        fontSize: '12px',
        color: '#555',
        marginBottom: '32px'
      }}>
        AI · SAAS · CUSTOM SOFTWARE
      </div>

      <h1 style={{
        fontSize: '80px',
        fontWeight: 900,
        lineHeight: 1.05,
        margin: '0 0 24px 0'
      }}>
        <span style={{ color: '#111', display: 'block' }}>Domain</span>
        <span style={{ color: '#111', display: 'block' }}>Expertise</span>
        <span style={{ color: '#D85A30', display: 'block', fontStyle: 'italic' }}>Makes It</span>
        <span style={{ color: '#aaa', display: 'block', fontWeight: 300 }}>Actually Work.</span>
      </h1>

      <p style={{
        fontSize: '16px',
        color: '#555',
        maxWidth: '480px',
        lineHeight: 1.7,
        marginBottom: '36px'
      }}>
        We build custom AI solutions, SaaS platforms, CRMs, and enterprise
        software for retail and enterprise businesses — across 5 continents
        since 2013.
      </p>

      <div style={{ display: 'flex', gap: '16px' }}>
        <button style={{
          background: '#D85A30',
          color: 'white',
          border: 'none',
          padding: '14px 28px',
          borderRadius: '6px',
          cursor: 'pointer',
          fontSize: '15px',
          fontWeight: 500
        }}>
          Start a Conversation →
        </button>
        <button style={{
          background: 'transparent',
          color: '#333',
          border: '1px solid #ddd',
          padding: '14px 28px',
          borderRadius: '6px',
          cursor: 'pointer',
          fontSize: '15px'
        }}>
          See Our Work
        </button>
      </div>
    </section>
  )
}
