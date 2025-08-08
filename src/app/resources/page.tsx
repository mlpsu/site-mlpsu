import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { MotionDiv, fadeIn, stagger } from '../../components/motion'
import Navigation from '../../components/Navigation'

export const metadata: Metadata = {
  title: 'ML@PSU Resources',
  description: 'A comprehensive collection of machine learning resources for the ML@PSU community.',
  openGraph: {
    title: 'ML@PSU Resources',
    description: 'A comprehensive collection of machine learning resources, papers, courses, and tools.',
    images: [
      {
        url: '/api/og?title=ML@PSU Resources&description=Comprehensive collection of ML resources, papers, courses, and tools',
        width: 1200,
        height: 630,
        alt: 'ML@PSU Resources'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ML@PSU Resources',
    description: 'A comprehensive collection of machine learning resources for the ML@PSU community.',
    images: ['/api/og?title=ML@PSU Resources&description=Comprehensive collection of ML resources, papers, courses, and tools'],
  }
}

const scrollingText = [
  "Do machines dream?",
  "Can machines be creative?",
  "Do AIs experience time?",
  "What's in the black box?",
  "What do LLMs think about?",
  "Can AI understand poetry?",
  "Do models have souls?",
  "Is consciousness computable?",
  "Can AI feel love?",
  "What are machine dreams made of?",
  "Do neural nets have memories?",
  "Are they conscious?",
  "Can AI feel emotions?",
  "Do neural networks hallucinate?"
]

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white relative pb-16">
      {/* Scrolling Text Bar */}
      <MotionDiv 
        className="scrolling-container"
        variants={fadeIn}
      >
        <div className="scrolling-text text-sm font-pixel">
          {scrollingText.map((text, index) => (
            <span key={index} className="hover-glow mx-8">
              {text}
            </span>
          ))}
        </div>
      </MotionDiv>

      {/* Add a spacer div to account for the fixed scrolling bar */}
      <div className="h-24" />

      <MotionDiv
        className="w-full"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        {/* Navigation */}
        <Navigation className="mb-12 text-gray-800" />

        {/* Content */}
        <div className="max-w-6xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-8 text-gray-900">📜 resources</h1>
          <div className="grid gap-6">
            <a
              href="https://pranav-karra.notion.site/Pranav-Karra-s-ML-Resources-122182bee24580bd8491dfc7a88ad801"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-white border border-gray-200 rounded-lg shadow-lg 
                       hover:shadow-xl transition-all duration-300 ease-in-out
                       hover:scale-[1.02] hover:-translate-y-1 cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-8 h-8">
                  <Image
                    src="/Notion-logo.svg.png"
                    alt="Notion Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <h2 className="text-2xl font-semibold text-gray-900">ML Resources</h2>
              </div>
              <p className="text-gray-700 mb-4">
                A comprehensive collection of machine learning resources, including research papers,
                courses, tutorials, and tools.
              </p>
              <div className="text-sm text-gray-600">
                <span>Updated regularly • Curated by Pranav Karra</span>
              </div>
            </a>
          </div>
        </div>
      </MotionDiv>
    </div>
  )
}