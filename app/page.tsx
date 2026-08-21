/**
 * Placeholder one-pager scaffold (no Three.js yet — build-clean).
 * Design direction: .cursor/assets/KI-MockUps/ · SiteGround deploy when ready.
 */
export default function Home() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '2rem',
        background:
          'radial-gradient(ellipse at 50% 20%, rgba(245,184,65,0.18), transparent 55%), #040405',
        color: '#ededed',
      }}
    >
      <p style={{ letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.6, fontSize: '0.75rem' }}>
        Kristina Irwin
      </p>
      <h1 style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)', fontWeight: 800, letterSpacing: '-0.02em' }}>
        One-page site
      </h1>
      <p style={{ marginTop: '1rem', maxWidth: '42rem', opacity: 0.8 }}>
        Fresh scaffold · SiteGround SFTP verified · mockups in <code>.cursor/assets/KI-MockUps</code>
      </p>
    </main>
  )
}
