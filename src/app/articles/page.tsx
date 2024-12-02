import { Metadata } from 'next'
import Link from 'next/link'
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
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png'
    }
  }
  if (url.includes('medium.com')) {
    return {
      name: 'Medium',
      logo: 'https://miro.medium.com/v2/resize:fill:176:176/1*sHhtYhaCe2Uc3IU0IgKwIQ.png'
    }
  }
  if (url.includes('linkedin.com')) {
    return {
      name: 'LinkedIn',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png'
    }
  }
  if (url.includes('twitter.com')) {
    return {
      name: 'X (Twitter)',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/5/53/X_logo_2023_original.svg'
    }
  }
  // Default case
  return {
    name: 'Article',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/8/80/Circle-icons-document.svg'
  }
}

// Add your articles here
const articles: Article[] = [
  {
    title: "what you need to know about anthropic’s model context protocol (MCP)",
    url: "https://medium.com/@pranavkarra001/what-you-need-to-know-about-anthropics-model-context-protocol-mcp-4200d17911d7",
    description: "anthropic has open-sourced a protocol that lets AI models interact with your computer and apps.",
    date: "2024-11-25",
    author: {
      name: "Pranav Karra",
      role: "ML@PSU Vice-President",
      avatar: "https://pranavkarra.me/_next/image?url=%2FPranav_Karra_Professional_Headshot.png&w=128&q=75"
    }
  },
  {
    title: "my guide to get shit done in machine learning.",
    url: "https://medium.com/@pranavkarra001/my-guide-to-get-shit-done-in-machine-learning-f96b1cf9080b",
    description: "yall are probably thinking whos this guy and why did he write a guide and why should i follow it? dont follow it, idc honestly.",
    date: "2024-11-18",
    author: {
      name: "Pranav Karra",
      role: "ML@PSU President",
      avatar: "https://pranavkarra.me/_next/image?url=%2FPranav_Karra_Professional_Headshot.png&w=128&q=75"
    }
  },
  // Add more articles as needed
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
                  <img
                    src={platform.logo}
                    alt={`${platform.name} Logo`}
                    className="w-8 h-8"
                  />
                  <h2 className="text-2xl font-semibold">{article.title}</h2>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {article.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {article.author.avatar && (
                      <img
                        src={article.author.avatar}
                        alt={article.author.name}
                        className="w-6 h-6 rounded-full"
                      />
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