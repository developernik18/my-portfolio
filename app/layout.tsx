import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'Nikhil Kumar',
  description: 'Hi, My name is nikhil kumar',
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
