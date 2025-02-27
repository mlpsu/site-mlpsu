"use client"

import Link from 'next/link'
import Image from 'next/image'
import { MotionDiv, fadeIn, stagger } from '../components/motion'
import { ArrowUpRight } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'

const staff = [
  { name: 'Pranav Karra', role: 'President', link: 'https://pranavkarra.me', image: '/team/pranav.jpeg' },
  { name: 'Vanisha Gupta', role: 'Vice President', link: 'https://www.linkedin.com/in/vanishagupta/', image: '/team/vanisha.jpeg' },
  { name: 'Ian Yee', role: 'Treasurer', link: '#', image: '/team/ian.jpg' },
  { name: 'Krishna Pagrut', role: 'Tech Lead', link: 'https://www.linkedin.com/in/krishnapagrut/', image: '/team/krishna.jpeg' },
  { name: 'Pihu Agarwal', role: 'Secretary', link: 'https://www.linkedin.com/in/pihuagarwal/', image: '/team/pihu.jpeg' },
  { name: 'Manit Garg', role: 'Event Planner', link: 'https://www.linkedin.com/in/manitgarg/', image: '/team/manit.jpeg' },
  { name: 'Evan Sinocchi', role: 'Software Engineer', link: 'https://www.linkedin.com/in/esinocchi/', image: '/team/evan.jpg' },
  { name: 'Dhruva Nagesh', role: 'Software Engineer', link: 'https://www.linkedin.com/in/dhruva-nagesh', image: '/team/dhruvah.jpeg' },
  { name: 'Andre Marinak', role: 'Outreach Chair', link: 'https://www.linkedin.com/in/andremarinak/', image: '/team/andre.jpeg'}
]

const pastSpeakers = [
  {
    name: 'Greg Fiengold',
    link: 'https://www.linkedin.com/in/greg-feingold-3a890a91/',
    company_logo: '/pplx logo.png'
  },
  { 
    name: 'Sree Bhattacharya',
    link: 'https://www.linkedin.com/in/sree-bhattacharyya/',
    company_logo: '/psu logo.png'
  },
  { 
    name: 'Marmik Chaudhari',
    link: 'https://marmik.xyz',
    company_logo: '/psu logo.png'
  }
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

const sponsors = [
  { name: 'warp', image: '/sponsor/warp.png' },
  { name: 'pplx', image: '/sponsor/pplx.png' },
  { name: 'modal labs', image: '/sponsor/modal.png' },
  { name: 'ugreen', image: '/sponsor/ugreen.png' },
  { name: 'psu', image: '/sponsor/psu.png' },
  { name: 'obsbot', image: '/sponsor/obsbot.png' },
  
  // Add all your sponsor images here
]

export default function Home() {
  const [footerOffset, setFooterOffset] = useState(100) // Start fully hidden
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      
      // Calculate how far we are from the bottom
      const distanceFromBottom = documentHeight - (scrollTop + windowHeight)
      
      // Calculate offset (0 = fully visible, 100 = fully hidden)
      const offset = Math.max(0, Math.min(100, distanceFromBottom))
      setFooterOffset(offset)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen relative pb-16">
      <MotionDiv 
        className="max-w-4xl mx-auto px-4 py-8 md:py-16"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mb-12 pt-8 text-sm md:text-base">
          <Link href="/about" className="hover:text-[#FA8072] transition-colors flex items-center gap-1 text-gray-800">
            about <ArrowUpRight className="w-4 h-4 text-[#1E90FF]" />
          </Link>
          <Link href="/resources" className="hover:text-[#FA8072] transition-colors flex items-center gap-1 text-gray-800">
            resources <ArrowUpRight className="w-4 h-4 text-[#1E90FF]" />
          </Link>
          <Link href="/articles" className="hover:text-[#FA8072] transition-colors flex items-center gap-1 text-gray-800">
            articles <ArrowUpRight className="w-4 h-4 text-[#1E90FF]" />
          </Link>
          <Link href="/contact" className="hover:text-[#FA8072] transition-colors flex items-center gap-1 text-gray-800">
            contact us <ArrowUpRight className="w-4 h-4 text-[#1E90FF]" />
          </Link>
        </div>

        <MotionDiv 
          className="flex justify-between items-center mb-24"
          variants={fadeIn}
        >
          <h1 className="text-4xl font-mono tracking-tight">ml@psu</h1>
          <Image
            src="/logo.svg"
            alt="ML@PSU Logo"
            width={60}
            height={60}
            priority
            className="animate-spin-slow"
          />
        </MotionDiv>

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
          className="text-left max-w-2xl mx-auto space-y-8 mb-32"
          variants={fadeIn}
        >
          <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
            Hey, nice to meet you through the web! We&apos;re just a group of friends who got really excited about machine learning and wanted to create a space where we could geek out together.
          </p>
          <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
            We started this club because we wanted a place to meet other cool people interested in ML, invite interesting speakers, and get some funding to support members building awesome projects or attending conferences.
          </p>
          <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
            We regularly hold events - sometimes it&apos;s a guest speaker sharing their work, other times it&apos;s casual workshops where we walk through cool ML concepts together. We&apos;ve got a pretty active Discord server too, where we share everything from research papers to the latest AI news and tools.
          </p>
          <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
            If you&apos;re motivated and curious about ML, we can help you out with resources like subscriptions, and maybe even take you along to conferences. We&apos;re all about supporting each other&apos;s learning journey!
          </p>
        </MotionDiv>

        <MotionDiv
          className="flex justify-center mb-32"
          variants={fadeIn}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-3xl">
            <a
              href="https://tally.so/r/mJWMy7"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ml-gradient glass-effect text-white px-4 py-3 rounded-full font-medium 
                       transform transition-all duration-300 ease-in-out
                       hover:scale-105 hover:shadow-lg hover:-translate-y-1
                       active:scale-95 active:translate-y-0 text-center
                       shadow-[0_0_15px_rgba(255,105,180,0.3)]
                       border border-white/20"
            >
              Join ML@PSU
            </a>
            <a
              href="https://discord.gg/4BUhteYYgT"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-discord-gradient glass-effect text-white px-4 py-3 rounded-full font-medium 
                       transform transition-all duration-300 ease-in-out
                       hover:scale-105 hover:shadow-lg hover:-translate-y-1
                       active:scale-95 active:translate-y-0 text-center
                       shadow-[0_0_10px_rgba(88,101,242,0.3)]
                       border border-white/20"
            >
              Join our Discord
            </a>
            <a
              href="https://groupme.com/join_group/103911031/6hLBvx9a"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-groupme-gradient glass-effect text-white px-4 py-3 rounded-full font-medium 
                       transform transition-all duration-300 ease-in-out
                       hover:scale-105 hover:shadow-lg hover:-translate-y-1
                       active:scale-95 active:translate-y-0 text-center
                       shadow-[0_0_10px_rgba(0,175,240,0.3)]
                       border border-white/20"
            >
              Join GroupMe
            </a>
            <a
              href="https://lu.ma/mlpsu"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-calendar-gradient glass-effect text-white px-4 py-3 rounded-full font-medium 
                       transform transition-all duration-300 ease-in-out
                       hover:scale-105 hover:shadow-lg hover:-translate-y-1
                       active:scale-95 active:translate-y-0 text-center
                       shadow-[0_0_10px_rgba(139,92,246,0.3)]
                       border border-white/20"
            >
              Join Calendar
            </a>
          </div>
        </MotionDiv>

        <MotionDiv 
          className="max-w-3xl mx-auto mb-32 text-center"
          variants={fadeIn}
        >
          <h2 className="text-xl font-bold mb-8">our sponsors</h2>
          <div className="sponsors-container">
            <div className="animate-scroll-sponsors">
              {[...sponsors, ...sponsors, ...sponsors].map((sponsor, index) => (
                <Image
                  key={`${sponsor.name}-${index}`}
                  src={sponsor.image}
                  alt={sponsor.name}
                  width={120}
                  height={60}
                  className="object-contain h-14 opacity-90 hover:opacity-100 transition-opacity filter brightness-110 contrast-110"
                />
              ))}
            </div>
          </div>
        </MotionDiv>

        <MotionDiv 
          className="max-w-3xl mx-auto mb-32"
          variants={fadeIn}
        >
          <div className="flex flex-col items-center justify-center">
            <div 
              className="relative mb-12 flex justify-center w-full" 
              style={{ height: '800px' }}
              ref={containerRef}
            >
              <div className="relative w-full max-w-[400px] flex flex-col items-center justify-center">
                {[0, 1, 2, 3, 4].map((index) => {
                  const macMiniRef = useRef(null);
                  const isInView = useInView(macMiniRef, { 
                    once: true, // Animation triggers only once
                    amount: 0.2, // When 20% of the element is visible
                    margin: "0px 0px -100px 0px" // Adjust trigger area
                  });
                  
                  return (
                    <motion.div 
                      key={`mac-mini-${index}`}
                      ref={macMiniRef}
                      className="absolute transform"
                      style={{
                        bottom: `${index * 155}px`,
                        zIndex: 5 - index,
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center'
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? 
                        { opacity: 1, y: 0 } : 
                        { opacity: 0, y: 20 }
                      }
                      transition={{ 
                        duration: 0.6, 
                        delay: index * 0.1,
                        ease: "easeOut"
                      }}
                    >
                      <Image
                        src="/MacMini.png"
                        alt={`Mac Mini Inference Server ${index + 1}`}
                        width={400}
                        height={400}
                        className="w-full h-auto"
                        priority={index < 2}
                        style={{ 
                          filter: 'drop-shadow(0px 5px 15px rgba(0, 0, 0, 0.1))'
                        }}
                      />
                    </motion.div>
                  );
                })}
              </div>
            </div>
            
            <div className="text-center max-w-xl">
              <h3 className="text-2xl font-medium mb-3">Our Mac Mini Inference Server</h3>
              <p className="text-gray-700 mb-6">Powering ML@PSU projects and demos with local inference capabilities.</p>
              
              <div className="bg-yellow-300/30 text-yellow-800 px-6 py-2 rounded-lg font-medium inline-block">
                Coming Soon
              </div>
            </div>
          </div>
        </MotionDiv>

        <MotionDiv 
          className="max-w-3xl mx-auto mb-32"
          variants={fadeIn}
        >
          <h2 className="text-xl font-bold mb-8 text-center">upcoming events</h2>
          <div className="w-full flex justify-center">
            <iframe
              src="https://lu.ma/embed/calendar/cal-3mrXkQHS4duefEd/events?lt=light"
              width="100%"
              height="450"
              style={{ border: '2px solid white', borderRadius: '12px' }}
              allowFullScreen
              aria-hidden="false"
              tabIndex={0}
            />
          </div>
          <div className="mt-6 text-center">
            <p className="text-gray-700 mb-4">We use Luma to manage our calendar, newsletter, and events.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://apps.apple.com/us/app/luma-delightful-events/id1546150895" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500/20 text-blue-700 hover:bg-blue-500/30 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="16" height="16" fill="currentColor">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                </svg>
                App Store
              </a>
              <a 
                href="https://play.google.com/store/apps/details?id=com.luma.studio&hl=en_US" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500/20 text-green-700 hover:bg-green-500/30 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16" height="16" fill="currentColor">
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
                </svg>
                Play Store
              </a>
              <a 
                href="https://lu.ma/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-500/20 text-gray-700 hover:bg-gray-500/30 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16" height="16" fill="currentColor">
                  <path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"/>
                </svg>
                Web
              </a>
            </div>
          </div>
        </MotionDiv>

        <MotionDiv 
          className="space-y-8 mb-32"
          variants={fadeIn}
        >
          <h2 className="text-2xl font-bold">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {staff.map((member) => ( // Iterates over every staff member
              <div key={member.name} className="flex items-center gap-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={64}
                  height={64}
                  className="rounded-full object-cover w-16 h-16 hover:scale-105 transition-transform"
                />
                <div className="space-y-2">
                  {member.name === 'Ian Yee' ? ( // Start of Ian Yee's link modification
                    <span className="text-lg">{member.name}</span> // Removed text-white class
                  ) : (
                    <Link // Link for other members if not Ian Yee
                      href={member.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-lg hover:text-[#FA8072] transition-colors flex items-center gap-1"
                    >
                      {member.name} <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  )}
                  <p className="text-gray-400">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </MotionDiv>

        <MotionDiv 
          className="space-y-8 mb-16"
          variants={fadeIn}
        >
          <h2 className="text-2xl font-bold">Past Speakers</h2>
          <div className="space-y-4">
            {pastSpeakers.map((speaker) => (
              <div key={speaker.name} className="flex items-center gap-4">
                <Image
                  src={speaker.company_logo}
                  alt={`${speaker.name}'s Company Logo`}
                  width={20}
                  height={20}
                  className="object-contain"
                />
                <Link 
                  href={speaker.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-lg hover:text-[#FA8072] transition-colors flex items-center gap-1"
                >
                  {speaker.name} <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </MotionDiv>
      </MotionDiv>
    </div>
  )
}
