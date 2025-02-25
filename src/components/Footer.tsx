import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <div 
      className="w-full py-16 text-white relative"
      style={{
        backgroundImage: "url('/footerback.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="max-w-4xl mx-auto px-4 relative z-10">
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
              <Link href="/resources" className="block hover:text-[#FA8072] transition-colors">
                Resources ↗
              </Link>
              <Link href="/contact" className="block hover:text-[#FA8072] transition-colors">
                Contact ↗
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">JOIN US</h3>
            <div className="space-y-2">
              <Link 
                href="https://tally.so/r/mJWMy7"
                target="_blank"
                rel="noopener noreferrer" 
                className="block hover:text-[#FA8072] transition-colors"
              >
                Join ML@PSU ↗
              </Link>
              <Link 
                href="https://discord.gg/4BUhteYYgT"
                target="_blank"
                rel="noopener noreferrer" 
                className="block hover:text-[#FA8072] transition-colors"
              >
                Join our Discord ↗
              </Link>
              <Link 
                href="https://groupme.com/join_group/103911031/6hLBvx9a"
                target="_blank"
                rel="noopener noreferrer" 
                className="block hover:text-[#FA8072] transition-colors"
              >
                Join GroupMe ↗
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">NEWSLETTER</h3>
            <div className="space-y-2">
              <Link 
                href="https://lu.ma/mlpsu"
                target="_blank"
                rel="noopener noreferrer" 
                className="block hover:text-[#FA8072] transition-colors"
              >
                Subscribe to Events ↗
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
  )
} 