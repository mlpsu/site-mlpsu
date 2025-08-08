import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get('title') ?? 'ML@PSU'
  const description = searchParams.get('description') ?? 'Machine Learning Club at Penn State University'
  const type = searchParams.get('type') ?? 'default'

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          fontFamily: 'Inter',
          padding: '80px',
        }}
      >
        {/* Background subtle pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'radial-gradient(circle at 25px 25px, #f3f4f6 2px, transparent 0), radial-gradient(circle at 75px 75px, #f3f4f6 2px, transparent 0)',
            backgroundSize: '100px 100px',
            opacity: 0.4,
          }}
        />
        
        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            zIndex: 1,
          }}
        >
          {/* Logo area - simplified since we can't easily load SVGs */}
          <div
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              backgroundColor: '#000',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '40px',
              fontSize: '48px',
              fontWeight: 'bold',
              color: 'white',
            }}
          >
            ML
          </div>
          
          {/* Title */}
          <h1
            style={{
              fontSize: type === 'blog' ? '64px' : '72px',
              fontWeight: 'bold',
              color: '#000',
              margin: '0 0 24px 0',
              lineHeight: 1.1,
              maxWidth: '800px',
            }}
          >
            {title}
          </h1>
          
          {/* Description */}
          <p
            style={{
              fontSize: '32px',
              color: '#6b7280',
              margin: '0',
              lineHeight: 1.4,
              maxWidth: '700px',
            }}
          >
            {description}
          </p>
          
          {/* Bottom branding */}
          <div
            style={{
              position: 'absolute',
              bottom: '40px',
              right: '40px',
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              fontSize: '24px',
              color: '#9ca3af',
            }}
          >
            <span>ML@PSU</span>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}