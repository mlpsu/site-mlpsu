import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export const alt = 'ML@PSU - Machine Learning Club at Penn State University'
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'
 
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'black',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <svg width="120" height="120" viewBox="0 0 400 400" fill="none">
            <defs>
              <linearGradient id="topGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ff4d4d"/>
                <stop offset="100%" stopColor="#ff4d4d" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="bottomLeftGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#ff4d4d"/>
                <stop offset="100%" stopColor="#ff4d4d" stopOpacity="0"/>
              </linearGradient>
            </defs>
            <g style={{ mixBlendMode: 'multiply' }}>
              <circle cx="200" cy="160" r="120" fill="url(#topGradient)"/>
              <circle cx="160" cy="240" r="120" fill="url(#bottomLeftGradient)"/>
              <circle cx="240" cy="240" r="120" fill="url(#topGradient)"/>
            </g>
          </svg>
          <div
            style={{
              fontSize: 80,
              fontWeight: 'bold',
              fontFamily: 'monospace',
              color: 'white',
              marginTop: '2rem',
            }}
          >
            ML@PSU
          </div>
          <div
            style={{
              fontSize: 32,
              color: '#888',
              marginTop: '1rem',
            }}
          >
            Machine Learning Club at Penn State University
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
} 