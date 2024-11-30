import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import Link from 'next/link'
import { MotionDiv } from '@/components/motion'

export const metadata = {
  title: 'ML PSU',
  description: 'Machine Learning Club at Penn State University',
}

const footerLinks = [
  { name: 'join us', path: '/join' },
  { name: 'speak at ml@psu', path: '/speak' },
  { name: 'email', path: 'mailto:machinelearningpennstate@gmail.com' },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main className="pb-24">
          {children}
        </main>
        <footer className="fixed bottom-0 left-0 w-full bg-black/50 backdrop-blur-sm">
          <div className="flex justify-center gap-8 px-8 py-4">
            {footerLinks.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="text-sm hover:text-[#FA8072] transition-colors flex items-center gap-1"
              >
                {item.name} <span className="text-[#FA8072]">↗</span>
              </Link>
            ))}
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  )
}
