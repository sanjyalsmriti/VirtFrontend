export function PageLayout({ children, maxWidth = '1200px' }) {
  return (
    <main
      style={{
        maxWidth,
        margin: '0 auto',
        padding: 'var(--space-xl)',
      }}
    >
      {children}
    </main>
  )
}
