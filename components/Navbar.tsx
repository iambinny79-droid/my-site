export default function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '18px 48px',
      borderBottom: '1px solid #f0f0f0'
    }}>
      <div style={{ fontWeight: 700, fontSize: '18px' }}>
        <span style={{ color: '#000' }}>Your</span>
        <span style={{ color: '#D85A30' }}>Brand</span>
      </div>

      <ul style={{
        display: 'flex',
        gap: '32px',
        listStyle: 'none',
        margin: 0,
        padding: 0,
        fontSize: '14px',
        color: '#444'
      }}>
        {['Products','Services','Industries','Case Studies','Insights','About'].map(item => (
          <li key={item} style={{ cursor: 'pointer' }}>{item}</li>
        ))}
      </ul>

      <button style={{
        background: '#D85A30',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '6px',
        cursor: 'pointer',
        fontSize: '14px',
        fontWeight: 500
      }}>
        Let's Talk →
      </button>
    </nav>
  )
}
