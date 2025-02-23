import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ML@PSU',
  description: 'Machine Learning Club at Penn State University',
  metadataBase: new URL('https://mlpsu.org'),
  openGraph: {
    title: 'ML@PSU',
    description: 'Machine Learning Club at Penn State University',
    url: 'https://mlpsu.org',
    siteName: 'ML@PSU',
    images: [
      {
        url: '/preview-square.png',
        width: 256,
        height: 256,
        alt: 'ML@PSU - Machine Learning Club at Penn State University'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'ML@PSU',
    description: 'Machine Learning Club at Penn State University',
    images: ['/preview-square.png'],
  },
  other: {
    'og:image:type': 'image/png',
    'og:image:secure_url': 'https://mlpsu.org/preview-square.png',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
