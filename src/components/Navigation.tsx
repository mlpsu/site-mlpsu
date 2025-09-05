import Link from 'next/link'

interface NavigationProps {
  className?: string
}

export default function Navigation({ className = "text-black" }: NavigationProps) {
  return (
    <div className={`flex flex-wrap justify-center items-center gap-4 md:gap-8 text-sm md:text-base ${className}`}>
      <Link href="/" className="underline hover:text-[#FA8072] transition-all duration-200 underline-offset-4">
        home
      </Link>
      <Link href="/about" className="underline hover:text-[#FA8072] transition-all duration-200 underline-offset-4">
        about
      </Link>
      <Link href="/contact" className="underline hover:text-[#FA8072] transition-all duration-200 underline-offset-4">
        contact us
      </Link>
    </div>
  )
}