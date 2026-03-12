export function Note({ children }) {
  return (
    <p
      style={{
        fontSize: 'var(--text-sm)',
        marginBottom: 'var(--space-md)',
        color: 'var(--color-text-muted)',
        textAlign: 'center',
      }}
    >
      {children}
    </p>
  )
}
