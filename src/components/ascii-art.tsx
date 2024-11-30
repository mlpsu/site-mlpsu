'use client'

import { useEffect, useState } from 'react'
import { MotionDiv } from './motion'

/* eslint-disable */
const mlpsuArt = 
`     __    __  _       ____   ____  _    _ 
    |  \\  /  || |     |  _ \\ / ___|| |  | |
    | |\\\\//| || |     | |_) |\\___ \\| |  | |
    | | \\/ | || |     |  __/ ___)  | |  | |
    | |    | || |____ | |   |____  | |__| |
    |_|    |_||______||_|   \\____/ \\____/ `
/* eslint-enable */

const BackgroundSpiral = () => {
  const [frame, setFrame] = useState(0)
  const [pattern, setPattern] = useState('')

  useEffect(() => {
    const generateSpiral = () => {
      const width = 120
      const height = 40
      const centerX = width / 2
      const centerY = height / 2
      let result = ''

      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const dx = x - centerX
          const dy = y - centerY
          const distance = Math.sqrt(dx * dx + dy * dy)
          const angle = Math.atan2(dy, dx)

          // Create multiple overlapping spiral patterns
          const time = frame * 0.05
          const spiral1 = distance + angle * 3 - time
          const spiral2 = distance - angle * 2 + time * 0.5
          const value = Math.sin(spiral1 * 0.3) * Math.cos(spiral2 * 0.2)

          // Use more varied characters for the pattern
          if (value > 0.85) result += '✧'
          else if (value > 0.6) result += '⋅'
          else if (value > 0.3) result += '·'
          else if (value > 0) result += '.'
          else if (value > -0.3) result += ' '
          else if (value > -0.6) result += '.'
          else if (value > -0.85) result += '·'
          else result += '⋅'
        }
        result += '\n'
      }
      return result
    }

    // Use requestAnimationFrame for smoother animation
    let animationFrame: number
    let lastTime = 0
    const animate = (currentTime: number) => {
      if (currentTime - lastTime > 50) { // Limit to 20fps for performance
        setFrame(f => f + 1)
        setPattern(generateSpiral())
        lastTime = currentTime
      }
      animationFrame = requestAnimationFrame(animate)
    }
    
    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [])

  return (
    <pre className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white opacity-10 pointer-events-none scale-125">
      {pattern}
    </pre>
  )
}

export const AsciiArt = () => {
  return (
    <div className="relative">
      <BackgroundSpiral />
      <pre className="font-mono text-center text-sm md:text-base whitespace-pre relative z-10">
        {mlpsuArt}
      </pre>
    </div>
  )
} 