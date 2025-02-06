"use client"

import Link from 'next/link'
import Image from 'next/image'
import { MotionDiv, fadeIn, stagger } from '../components/motion'
import { ArrowUpRight, Mail, Linkedin } from 'lucide-react'
import { useState, useEffect } from 'react'

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
  {name: 'Greg Fiengold', link: 'https://www.linkedin.com/in/greg-feingold-3a890a91/'},
  { name: 'Sree Bhattacharya', link: 'https://www.linkedin.com/in/sree-bhattacharyya/' },
  { name: 'Marmik Chaudhari', link: 'https://marmik.xyz' }
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
  const [showEmail] = useState(false)
  const [footerOffset, setFooterOffset] = useState(100) // Start fully hidden

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
    <div className="min-h-screen bg-black relative pb-16">
      <MotionDiv 
        className="max-w-4xl mx-auto px-4 py-8 md:py-16"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mb-12 pt-8 text-sm md:text-base">
          <Link href="/about" className="hover:text-[#FA8072] transition-colors flex items-center gap-1">
            about <ArrowUpRight className="w-4 h-4 text-[#1E90FF]" />
          </Link>
          <Link href="/resources" className="hover:text-[#FA8072] transition-colors flex items-center gap-1">
            resources <ArrowUpRight className="w-4 h-4 text-[#1E90FF]" />
          </Link>
          <Link href="/articles" className="hover:text-[#FA8072] transition-colors flex items-center gap-1">
            articles <ArrowUpRight className="w-4 h-4 text-[#1E90FF]" />
          </Link>
          <Link href="/contact" className="hover:text-[#FA8072] transition-colors flex items-center gap-1">
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
        </MotionDiv>

        <MotionDiv 
          className="text-center flex flex-col md:flex-row justify-center gap-4 md:gap-8 mb-32"
          variants={fadeIn}
        >
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSelQdK7kY8PMDSgemp9ksCSRHwji2qg3HgybPZuGuFMFrSVLg/viewform?usp=sf_link"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg hover:text-[#FA8072] transition-colors flex items-center justify-center gap-1"
          >
            become a member <ArrowUpRight className="w-4 h-4 text-[#FA8072]" />
          </Link>
          <Link
            href="/become-a-speaker"
            className="text-lg hover:text-[#FA8072] transition-colors flex items-center justify-center gap-1"
          >
            become a speaker <ArrowUpRight className="w-4 h-4 text-[#FA8072]" />
          </Link>
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
                    <span className="text-lg text-white">{member.name}</span> // Uses span instead of link
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
              <div key={speaker.name}>
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

      <div 
        className="fixed bottom-0 left-0 right-0 h-16 bg-zinc-900 flex items-center px-4"
        style={{ transform: `translateY(${footerOffset}px)` }}
      >
        <div className="ml-auto flex items-center gap-8">
          <Link
            href="https://www.linkedin.com/company/machine-learning-penn-state/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FA8072] transition-colors"
          >
            <Linkedin className="w-6 h-6 text-zinc-400" />
          </Link>

          <div className="relative" style={{ marginTop: '2px'}}>
            <Link
              href="mailto:machinelearningpennstate@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FA8072] transition-colors"
            >
              <Mail className="w-6 h-6 text-zinc-400" />
            </Link>
            {showEmail && (
              <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-700 px-4 py-2 rounded-md whitespace-nowrap">
                mlpsu@psu.edu
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
