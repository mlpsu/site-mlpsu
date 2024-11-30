import { MotionDiv } from '@/components/motion'

export default function About() {
  return (
    <div className="min-h-screen">
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-4 py-16 space-y-8"
      >
        <h1 className="text-4xl md:text-6xl font-bold">About Us</h1>
        
        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-6 text-lg text-gray-300"
        >
          <p>
            Hey there! We're just a group of friends who are absolutely fascinated by AI - its applications, 
            its research, and most importantly, its incredible potential to change the world.
          </p>

          <p>
            Our passion for AI led us to start this club with a simple goal: finding like-minded people 
            who share our enthusiasm and want to explore this exciting field together.
          </p>

          <p>
            What do we do? We love bringing in people who are doing amazing things in AI to talk about 
            their work. It's like having a front-row seat to the future! Plus, we're big on helping 
            others get started in AI - whether you're just curious or ready to dive deep into building 
            your own projects.
          </p>

          <p>
            We believe in learning by doing, sharing knowledge freely, and creating a space where 
            everyone - from beginners to experts - can grow and contribute.
          </p>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 p-6 bg-gray-900/50 rounded-lg"
        >
          <h2 className="text-2xl font-bold mb-4">Want to join us?</h2>
          <p className="text-gray-300">
            Whether you're a complete beginner or an AI enthusiast, we'd love to have you! 
            Drop us an email at{' '}
            <a href="mailto:machinelearningpennstate@gmail.com" className="text-[#FA8072] hover:underline">
              machinelearningpennstate@gmail.com
            </a>
          </p>
        </MotionDiv>
      </MotionDiv>
    </div>
  )
} 