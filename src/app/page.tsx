import Link from 'next/link'
import Image from 'next/image'

const staff = [
  { name: 'Vanisha Gupta', role: 'President', link: 'https://www.linkedin.com/in/vanishagupta/' },
  { name: 'Pranav Karra', role: 'Vice President', link: 'https://pranavkarra.me' },
  { name: 'Ian Yee', role: 'Treasurer', link: '#' },
  { name: 'Krishna Pagrut', role: 'Tech Lead', link: 'https://www.linkedin.com/in/krishnapagrut/' },
  { name: 'Pihu Agarwal', role: 'Secretary', link: 'https://www.linkedin.com/in/pihuagarwal/' },
  { name: 'Manit Garg', role: 'Event Planner', link: 'https://www.linkedin.com/in/manitgarg/' },
]

const pastSpeakers = [
  { name: 'Marmik Chaudhari', link: 'https://marmik.xyz' },
  { name: 'Sree Bhattacharya', link: 'https://www.linkedin.com/in/sree-bhattacharyya/' },
]

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

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="flex justify-center items-center space-x-8 mb-12 pt-8">
          <Link href="/about" className="hover:text-[#FA8072] transition-colors">
            about <span className="text-[#1E90FF]">↗</span>
          </Link>
          <Link href="/resources" className="hover:text-[#FA8072] transition-colors">
            resources <span className="text-[#1E90FF]">↗</span>
          </Link>
          <Link href="/articles" className="hover:text-[#FA8072] transition-colors">
            articles <span className="text-[#1E90FF]">↗</span>
          </Link>
          <Link href="/contact" className="hover:text-[#FA8072] transition-colors">
            contact us <span className="text-[#1E90FF]">↗</span>
          </Link>
        </div>

        <div className="flex justify-between items-center mb-24">
          <h1 className="text-4xl font-mono tracking-tight">ml@psu</h1>
          <Image
            src="/logo.svg"
            alt="ML@PSU Logo"
            width={60}
            height={60}
            priority
            className="animate-spin-slow"
          />
        </div>

        <div className="scrolling-container mb-32">
          <div className="scrolling-text text-sm font-pixel">
            {scrollingText.map((text, index) => (
              <span key={index} className="hover-glow mx-8">
                {text}
              </span>
            ))}
          </div>
        </div>

        <div className="text-left max-w-2xl mx-auto space-y-8 mb-32">
          <p className="text-gray-300 leading-relaxed whitespace-pre-wrap">
            Hey, nice to meet you through the web! We&apos;re just a group of friends who got really excited about machine learning and wanted to create a space where we could geek out together.
          </p>
          <p className="text-gray-300 leading-relaxed whitespace-pre-wrap">
            We started this club because we wanted a place to meet other cool people interested in ML, invite interesting speakers, and get some funding to support members building awesome projects or attending conferences.
          </p>
          <p className="text-gray-300 leading-relaxed whitespace-pre-wrap">
            We regularly hold events - sometimes it&apos;s a guest speaker sharing their work, other times it&apos;s casual workshops where we walk through cool ML concepts together. We&apos;ve got a pretty active Discord server too, where we share everything from research papers to the latest AI news and tools.
          </p>
          <p className="text-gray-300 leading-relaxed whitespace-pre-wrap">
            If you&apos;re motivated and curious about ML, we can help you out with resources like subscriptions, and maybe even take you along to conferences. We&apos;re all about supporting each other&apos;s learning journey!
          </p>
        </div>

        <div className="text-center flex justify-center gap-8 mb-32">
          <Link
            href="/join"
            className="text-lg hover:text-[#FA8072] transition-colors flex items-center gap-1"
          >
            become a member <span className="text-[#FA8072]">↗</span>
          </Link>
          <Link
            href="/speak"
            className="text-lg hover:text-[#FA8072] transition-colors flex items-center gap-1"
          >
            become a speaker <span className="text-[#FA8072]">↗</span>
          </Link>
        </div>

        <div className="space-y-8 mb-32">
          <h2 className="text-2xl font-bold">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {staff.map((member) => (
              <div key={member.name} className="space-y-2">
                <Link 
                  href={member.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-lg link-style"
                >
                  {member.name}
                </Link>
                <p className="text-gray-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <h2 className="text-2xl font-bold">Past Speakers</h2>
          <div className="space-y-4">
            {pastSpeakers.map((speaker) => (
              <div key={speaker.name}>
                <Link 
                  href={speaker.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-lg link-style"
                >
                  {speaker.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
