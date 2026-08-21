import { ThreeBackground } from '@/components/ThreeBackground'

export default function Home() {
  return (
    <main style={{ position: 'relative', minHeight: '100vh' }}>
      <ThreeBackground accent="#F5B841" />
      <section
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          minHeight: '100vh',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '2rem',
        }}
      >
        <h1 style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)', fontWeight: 800, letterSpacing: '-0.02em' }}>
          Kristina-Irwin-Site
        </h1>
        <p style={{ marginTop: '1rem', maxWidth: '42rem', opacity: 0.8 }}>Kristina Irwin one-page website — client SiteGround rebuild (successor to archived Kristina-Irwin).</p>
      </section>
    </main>
  )
}
