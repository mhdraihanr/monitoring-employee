import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PUPUK KUJANG - Gate NPK2 Dashboard',
  description: 'Real-time monitoring dashboard for PUPUK KUJANG Gate NPK2',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}