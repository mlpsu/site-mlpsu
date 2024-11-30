import { MotionDiv } from '@/components/motion'
import Link from 'next/link'

const resources = [
  {
    title: 'Getting Started with AI',
    description: 'A beginner-friendly guide to understanding AI concepts',
    link: '/resources/getting-started',
  },
  {
    title: 'Machine Learning Resources',
    description: 'Curated list of ML tutorials, courses, and papers',
    link: '/resources/ml-resources',
  },
  {
    title: 'Research Papers',
    description: 'Latest research papers in AI and ML',
    link: '/resources/research-papers',
  },
]

export default function Resources() {
  return (
    <div className="min-h-screen">
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-4 py-16 space-y-12"
      >
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold">Resources</h1>
          <p className="text-xl text-gray-300">
            Explore our curated collection of AI/ML resources and articles
          </p>
        </div>

        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid gap-6 md:grid-cols-2"
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="prose prose-invert max-w-none"
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