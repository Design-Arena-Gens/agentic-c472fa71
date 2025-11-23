import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Competitive Programming Roadmap',
  description: 'Complete roadmap to master competitive programming',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
