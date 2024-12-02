import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About ML@PSU',
  description: 'Learn about ML@PSU and our mission to advance machine learning education and research.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mb-12 pt-8 text-sm md:text-base">
        <Link 
          href="/" 
          className="hover:text-[#FA8072] transition-colors flex items-center gap-1"
        >
          home <ArrowUpRight className="w-4 h-4" />
        </Link>
        <Link 
          href="/about" 
          className="hover:text-[#FA8072] transition-colors flex items-center gap-1"
        >
          about <ArrowUpRight className="w-4 h-4" />
        </Link>
        <Link
          href="/articles"
          className="hover:text-[#FA8072] transition-colors flex items-center gap-1" 
        >
          articles <ArrowUpRight className="w-4 h-4" />
        </Link>
        <Link 
          href="/contact" 
          className="hover:text-[#FA8072] transition-colors flex items-center gap-1"
        >
          contact <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-12 font-mono">
          <span className="text-[#FA8072]">ML@PSU</span> is a community of
          <span className="bg-gradient-to-r from-[#FA8072] to-[#FFB6C1] text-transparent bg-clip-text"> machine learning enthusiasts</span>
        </h1>

        <div className="space-y-12 font-mono">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold bg-[#FA8072] text-white px-4 py-2 inline-block transform -rotate-1">
              Our Mission
            </h2>
            <p className="text-lg leading-relaxed">
              We&apos;re on a mission to make machine learning education accessible, engaging, and fun. 
              Through <span className="text-[#FA8072]">workshops</span>, <span className="text-[#FA8072]">talks</span>, 
              and <span className="text-[#FA8072]">hands-on projects</span>, we help students dive into the 
              exciting world of AI.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold bg-[#FA8072] text-white px-4 py-2 inline-block transform rotate-1">
              What We Do
            </h2>
            <ul className="space-y-3 text-lg">
              <li className="flex items-start gap-2">
                <span className="text-[#FA8072]">→</span>
                Host weekly workshops and tech talks
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FA8072]">→</span>
                Organize hands-on coding sessions
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FA8072]">→</span>
                Connect students with industry experts
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FA8072]">→</span>
                Build cool ML projects together
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold bg-[#FA8072] text-white px-4 py-2 inline-block transform -rotate-1">
              Join Us
            </h2>
            <p className="text-lg leading-relaxed">
              Whether you&apos;re a <span className="text-[#FA8072]">complete beginner</span> or 
              a <span className="text-[#FA8072]">seasoned ML engineer</span>, there&apos;s a place for you here. 
              We believe in learning together and helping each other grow.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold bg-[#FA8072] text-white px-4 py-2 inline-block transform rotate-1">
              Get Involved
            </h2>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#FA8072] text-white rounded-lg
                         hover:bg-[#FF6B5B] transition-colors transform hover:-rotate-1"
              >
                Contact Us <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/become-a-speaker"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#FA8072] text-[#FA8072]
                         rounded-lg hover:bg-[#FA8072] hover:text-white transition-colors transform hover:rotate-1"
              >
                Become a Speaker <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
} 