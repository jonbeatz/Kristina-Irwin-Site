import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kristina-Irwin-Site',
  description: 'Kristina Irwin one-page website — client SiteGround rebuild (successor to archived Kristina-Irwin).',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
