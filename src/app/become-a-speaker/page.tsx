import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { MotionDiv, fadeIn, stagger } from '../../components/motion'

export default function BecomeASpeaker() {
  return (
    <div className="min-h-screen bg-black">
      <MotionDiv 
        className="max-w-4xl mx-auto px-4 py-8 md:py-16"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        {/* Navigation */}
        <MotionDiv 
          variants={fadeIn}
          className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mb-12 pt-8 text-sm md:text-base"
        >
          <Link href="/" className="hover:text-[#FA8072] transition-colors flex items-center gap-1">
            home <ArrowUpRight className="w-4 h-4" />
          </Link>
          <Link href="/about" className="hover:text-[#FA8072] transition-colors flex items-center gap-1">
            about <ArrowUpRight className="w-4 h-4" />
          </Link>
          <Link href="/resources" className="hover:text-[#FA8072] transition-colors flex items-center gap-1">
            resources <ArrowUpRight className="w-4 h-4" />
          </Link>
          <Link href="/contact" className="hover:text-[#FA8072] transition-colors flex items-center gap-1">
            contact <ArrowUpRight className="w-4 h-4" />
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
      </MotionDiv>
    </div>
  )
}
