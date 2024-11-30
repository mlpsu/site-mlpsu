import Link from 'next/link'
import { MotionDiv, fadeIn, stagger } from '@/components/motion'

const resources = [
  {
    title: 'Getting Started with ML',
    description: 'A curated list of beginner-friendly ML resources and tutorials.',
    link: '/resources/getting-started'
  },
  {
    title: 'Research Papers',
    description: 'Latest research papers we find interesting and worth discussing.',
    link: '/resources/papers'
  }
]

export default function Resources() {
  return (
    <div className="min-h-screen bg-black">
      <MotionDiv 
        className="max-w-4xl mx-auto px-4 py-16 space-y-12"
        {...stagger}
      >
        <MotionDiv 
          className="space-y-4"
          {...fadeIn}
        >
          <h1 className="text-4xl md:text-6xl font-bold">Resources</h1>
          <p className="text-xl text-gray-300">
            Explore our curated collection of AI/ML resources and articles
          </p>
        </MotionDiv>

        <MotionDiv 
          className="grid gap-6 md:grid-cols-2"
          {...fadeIn}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {resources.map((resource) => (
            <Link
              key={resource.title}
              href={resource.link}
              className="block p-6 bg-gray-900/50 rounded-lg transition-transform hover:transform hover:scale-105"
            >
              <h2 className="text-2xl font-bold mb-2">{resource.title}</h2>
              <p className="text-gray-300">{resource.description}</p>
              <span className="arrow-link mt-4 inline-block">Read more</span>
            </Link>
          ))}
        </MotionDiv>

        <MotionDiv 
          className="prose prose-invert max-w-none"
          {...fadeIn}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-6">Latest Articles</h2>
          <p className="text-gray-300">
            Check back soon for our latest articles and tutorials on AI/ML topics!
          </p>
        </MotionDiv>
      </MotionDiv>
    </div>
  )
} 