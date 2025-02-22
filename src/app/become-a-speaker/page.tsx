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

export default function BecomeASpeaker() {
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
      <div className="h-24" /> {/* This creates space for the fixed bar */}

      <MotionDiv 
        className="max-w-4xl mx-auto px-4 py-8 md:py-16"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        {/* Navigation */}
        <MotionDiv 
          variants={fadeIn}
          className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mb-12 text-sm md:text-base"
        >
          <Link href="/" className="text-gray-800 hover:text-[#FA8072] transition-colors flex items-center gap-1">
            home <ArrowUpRight className="w-4 h-4 text-[#1E90FF]" />
          </Link>
          <Link href="/about" className="text-gray-800 hover:text-[#FA8072] transition-colors flex items-center gap-1">
            about <ArrowUpRight className="w-4 h-4 text-[#1E90FF]" />
          </Link>
          <Link href="/resources" className="text-gray-800 hover:text-[#FA8072] transition-colors flex items-center gap-1">
            resources <ArrowUpRight className="w-4 h-4 text-[#1E90FF]" />
          </Link>
          <Link href="/contact" className="text-gray-800 hover:text-[#FA8072] transition-colors flex items-center gap-1">
            contact <ArrowUpRight className="w-4 h-4 text-[#1E90FF]" />
          </Link>
        </MotionDiv>

        {/* Content */}
        <MotionDiv variants={fadeIn} className="space-y-12">
          <h1 className="text-3xl font-mono tracking-tight">become a speaker</h1>
          
          <section className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              we love hearing from people who are passionate about what they do! if you&apos;re interested in speaking at one of our events, 
              just <Link href="/contact" className="text-[#FA8072] hover:opacity-80 inline-flex items-center">
                shoot us an email <ArrowUpRight className="w-4 h-4 ml-1" />
              </Link>. we&apos;ll review your proposal and send you a calendar booking link.
            </p>

            <p className="text-gray-300 leading-relaxed">
              you can choose to speak either in-person or online. we do prefer in-person talks and can provide travel and accommodation 
              arrangements at our convenience.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-mono">you might be a great fit if you:</h2>
            <ul className="text-gray-300 space-y-2 list-none">
              <li className="flex items-center gap-2">
                <ArrowUpRight className="w-4 h-4 text-[#FA8072]" />
                have done something really cool
              </li>
              <li className="flex items-center gap-2">
                <ArrowUpRight className="w-4 h-4 text-[#FA8072]" />
                are distinguished in your field
              </li>
              <li className="flex items-center gap-2">
                <ArrowUpRight className="w-4 h-4 text-[#FA8072]" />
                have unique experiences to share
              </li>
              <li className="flex items-center gap-2">
                <ArrowUpRight className="w-4 h-4 text-[#FA8072]" />
                are a researcher in ai/ml
              </li>
              <li className="flex items-center gap-2">
                <ArrowUpRight className="w-4 h-4 text-[#FA8072]" />
                work in academia
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-mono">what&apos;s in it for you?</h2>
            <ul className="text-gray-300 space-y-2 list-none">
              <li className="flex items-center gap-2">
                <ArrowUpRight className="w-4 h-4 text-[#FA8072]" />
                connect with an engaged audience passionate about technology
              </li>
              <li className="flex items-center gap-2">
                <ArrowUpRight className="w-4 h-4 text-[#FA8072]" />
                network with other speakers and industry professionals
              </li>
              <li className="flex items-center gap-2">
                <ArrowUpRight className="w-4 h-4 text-[#FA8072]" />
                get your talk recorded and featured on our platform
              </li>
              <li className="flex items-center gap-2">
                <ArrowUpRight className="w-4 h-4 text-[#FA8072]" />
                build your personal brand and speaking portfolio
              </li>
            </ul>
            <p className="text-sm text-gray-400 mt-4">
              with your consent, we record all talks and make them available on our website and youtube channel, helping you reach 
              an even wider audience.
            </p>
          </section>
        </MotionDiv>

        {/* Footer */}
        <div className="w-full bg-gray-100 text-gray-800 py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div>
                <h3 className="font-bold mb-4">MORE LINKS</h3>
                <div className="space-y-2">
                  <Link href="#" className="block hover:text-[#FA8072] transition-colors">
                    Back to Top ↗
                  </Link>
                  <Link href="/" className="block hover:text-[#FA8072] transition-colors">
                    Home ↗
                  </Link>
                  <Link href="/about" className="block hover:text-[#FA8072] transition-colors">
                    About ↗
                  </Link>
                  <Link href="/contact" className="block hover:text-[#FA8072] transition-colors">
                    Contact ↗
                  </Link>
                </div>
              </div>

              <div>
                <h3 className="font-bold mb-4">NEWSLETTER</h3>
                <div>
                  <Link 
                    href="https://lu.ma/mlpsu"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="inline-block bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700 transition-colors"
                  >
                    Subscribe to Events
                  </Link>
                </div>
              </div>
            </div>

            {/* Footer text image */}
            <div className="w-full px-8 md:px-16">
              <Image
                src="/Footer Text.png"
                alt="Footer Text"
                width={1920}
                height={200}
                className="w-full object-contain max-w-[2400px] mx-auto"
                priority
              />
            </div>
          </div>
        </div>
      </MotionDiv>
    </div>
  )
}
