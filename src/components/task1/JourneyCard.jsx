export function JourneyCard({ title, subtitle, body, bgColor }) {
  function handleMouseEnter(e) {
    e.currentTarget.style.transform = 'translateY(-4px)'
  }
  function handleMouseLeave(e) {
    e.currentTarget.style.transform = 'translateY(0)'
  }
  return (
    <div
      className="journey-card"
      style={{
        backgroundColor: bgColor,
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--space-lg)',
        color: '#fff',
        minHeight: 260,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        transition: 'transform 0.2s ease',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h2 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-xs)' }}>
        {title}
      </h2>
      <p style={{ fontSize: 'var(--text-sm)', opacity: 0.95, marginBottom: 'var(--space-sm)' }}>
        {subtitle}
      </p>
      <p style={{ fontSize: 'var(--text-sm)', lineHeight: 1.5, opacity: 0.95 }}>
        {body}
      </p>
    </div>
  )
}
