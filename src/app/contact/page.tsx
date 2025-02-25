import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { MotionDiv, fadeIn, stagger } from '../../components/motion'

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

export default function Contact() {
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
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mb-12 text-sm md:text-base">
          <Link 
            href="/" 
            className="text-gray-800 hover:text-[#FA8072] transition-colors flex items-center gap-1"
          >
            home <ArrowUpRight className="w-4 h-4 text-[#1E90FF]" />
          </Link>
          <Link 
            href="/about" 
            className="text-gray-800 hover:text-[#FA8072] transition-colors flex items-center gap-1"
          >
            about <ArrowUpRight className="w-4 h-4 text-[#1E90FF]" />
          </Link>
          <Link
            href="/articles"
            className="text-gray-800 hover:text-[#FA8072] transition-colors flex items-center gap-1" 
          >
            articles <ArrowUpRight className="w-4 h-4 text-[#1E90FF]" />
          </Link>
          <Link 
            href="/contact" 
            className="text-gray-800 hover:text-[#FA8072] transition-colors flex items-center gap-1"
          >
            contact <ArrowUpRight className="w-4 h-4 text-[#1E90FF]" />
          </Link>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="space-y-8">
            <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
            <p className="text-gray-700">
              We&apos;d love to hear from you! Whether you have questions about joining the club, want to collaborate, or just want to chat about ML, feel free to reach out.
            </p>
            <div className="space-y-4">
              <a
                href="mailto:machinelearningpennstate@gmail.com"
                className="text-[#FA8072] hover:underline block"
              >
                machinelearningpennstate@gmail.com
              </a>
            </div>
          </div>
        </div>
      </MotionDiv>
    </div>
  )
} 