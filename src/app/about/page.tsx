import { Metadata } from 'next'
import Link from 'next/link'
import { MotionDiv, fadeIn, stagger } from '../../components/motion'
import Navigation from '../../components/Navigation'
import Image from 'next/image'

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

export const metadata: Metadata = {
  title: 'About ML@PSU',
  description: 'Learn about ML@PSU and our mission to advance machine learning education and research at Penn State.',
  openGraph: {
    title: 'About ML@PSU',
    description: 'Learn about ML@PSU and our mission to advance machine learning education and research at Penn State.',
    images: [
      {
        url: '/api/og?title=About ML@PSU&description=Our mission to advance machine learning education and research at Penn State',
        width: 1200,
        height: 630,
        alt: 'About ML@PSU'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About ML@PSU',
    description: 'Learn about ML@PSU and our mission to advance machine learning education and research at Penn State.',
    images: ['/api/og?title=About ML@PSU&description=Our mission to advance machine learning education and research at Penn State'],
  }
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white relative pb-16">
      {/* Scrolling Text Bar */}
      <MotionDiv 
        className="scrolling-container mb-32"
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

      <MotionDiv
        className="max-w-4xl mx-auto px-4 py-8"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        {/* Navigation */}
        <MotionDiv
          variants={fadeIn}
          className="pt-8"
        >
          <Navigation className="mb-12 text-gray-800" />
        </MotionDiv>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <MotionDiv 
            variants={fadeIn}
            className="mb-12"
          >
            <h1 className="text-4xl font-bold font-mono text-gray-900">
              ML@PSU is a community of machine learning enthusiasts
            </h1>
          </MotionDiv>

          <div className="space-y-12 font-mono text-gray-700">
            <MotionDiv 
              variants={fadeIn}
              className="space-y-4"
            >
              <h2 className="text-2xl font-bold text-gray-900">
                Our Mission
              </h2>
              <p className="text-lg leading-relaxed">
                We&apos;re on a mission to make machine learning education accessible, engaging, and fun. 
                Through workshops, talks, and hands-on projects, we help students dive into the 
                exciting world of AI.
              </p>
            </MotionDiv>

            <MotionDiv 
              variants={fadeIn}
              className="space-y-4"
            >
              <h2 className="text-2xl font-bold text-gray-900">
                What We Do
              </h2>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start gap-2">
                  <span className="text-gray-600">•</span>
                  Host weekly workshops and tech talks
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-600">•</span>
                  Organize hands-on coding sessions
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-600">•</span>
                  Connect students with industry experts
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-600">•</span>
                  Build cool ML projects together
                </li>
              </ul>
            </MotionDiv>

            <MotionDiv 
              variants={fadeIn}
              className="space-y-4"
            >
              <h2 className="text-2xl font-bold text-gray-900">
                Join Us
              </h2>
              <p className="text-lg leading-relaxed">
                Whether you&apos;re a complete beginner or a seasoned ML engineer, there&apos;s a place for you here. 
                We believe in learning together and helping each other grow.
              </p>
            </MotionDiv>

            <MotionDiv 
              variants={fadeIn}
              className="space-y-4"
            >
              <h2 className="text-2xl font-bold text-gray-900 text-center">
                Get Involved
              </h2>
              <div className="flex flex-wrap gap-6 justify-center">
                <Link
                  href="https://docs.google.com/forms/d/e/1FAIpQLSelQdK7kY8PMDSgemp9ksCSRHwji2qg3HgybPZuGuFMFrSVLg/viewform?usp=sf_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-1"
                >
                  become a member
                </Link>
                <Link
                  href="/become-a-speaker"
                  className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-1"
                >
                  become a speaker
                </Link>
              </div>
            </MotionDiv>
          </div>
        </div>
      </MotionDiv>
    </div>
  )
}