import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'ML@PSU Articles',
  description: 'Articles and writings about machine learning, AI, and technology.',
}

interface Article {
  title: string
  url: string
  description: string
  date: string
  author: {
    name: string
    avatar?: string
    role?: string
  }
}

// Function to determine the platform from URL
function getPlatformInfo(url: string): { name: string; logo: string } {
  if (url.includes('notion.so')) {
    return {
      name: 'Notion',
      logo: '/Notion-logo.svg.png'
    }
  }
  if (url.includes('medium.com')) {
    return {
      name: 'Medium',
      logo: '/medium-round-icon.webp'
    }
  }
  if (url.includes('linkedin.com')) {
    return {
      name: 'LinkedIn',
      logo: '/linkedin-icon.png'
    }
  }
  if (url.includes('twitter.com')) {
    return {
      name: 'X (Twitter)',
      logo: '/x-icon.png'
    }
  }
  // Default case
  return {
    name: 'Article',
    logo: '/article-icon.png'
  }
}

// Add your articles here
const articles: Article[] = [
  {
    title: "Getting Started with Machine Learning",
    url: "https://medium.com/@pranavkarra/getting-started-with-ml",
    description: "A beginner's guide to starting your journey in machine learning.",
    date: "2024-01-15",
    author: {
      name: "Pranav Karra",
      role: "ML@PSU President",
      avatar: "/Pranav_Karra_Professional_Headshot.png"
    }
  },
  {
    title: "Understanding Neural Networks",
    url: "https://pranav-karra.notion.site/understanding-neural-networks",
    description: "Deep dive into the fundamentals of neural networks and their applications.",
    date: "2024-01-10",
    author: {
      name: "Pranav Karra",
      role: "ML@PSU President",
      avatar: "/Pranav_Karra_Professional_Headshot.png"
    }
  }
]

export default function ArticlesPage() {
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
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">✍️ articles</h1>
        <div className="grid gap-6">
          {articles.map((article) => {
            const platform = getPlatformInfo(article.url)
            return (
              <a
                key={article.title}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg 
                         hover:shadow-xl transition-all duration-300 ease-in-out
                         hover:scale-[1.02] hover:-translate-y-1 cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative w-8 h-8">
                    <Image
                      src={platform.logo}
                      alt={`${platform.name} Logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h2 className="text-2xl font-semibold">{article.title}</h2>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {article.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {article.author.avatar && (
                      <div className="relative w-6 h-6">
                        <Image
                          src={article.author.avatar}
                          alt={article.author.name}
                          fill
                          className="rounded-full object-cover"
                        />
                      </div>
                    )}
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-medium">{article.author.name}</span>
                      {article.author.role && (
                        <span className="text-gray-400 dark:text-gray-500">
                          {' • '}{article.author.role}
                        </span>
                      )}
                      <div>
                        {new Date(article.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })} 
                        {' • '} 
                        {platform.name}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
} 