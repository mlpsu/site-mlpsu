import { MotionDiv, fadeIn, stagger } from '@/components/motion'

export default function Contact() {
  return (
    <div className="min-h-screen bg-black">
      <MotionDiv 
        className="max-w-4xl mx-auto px-4 py-16"
        {...stagger}
      >
        <MotionDiv 
          className="space-y-8"
          {...fadeIn}
        >
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="text-gray-300">
            We&apos;d love to hear from you! Whether you have questions about joining the club, want to collaborate, or just want to chat about ML, feel free to reach out.
          </p>
          <div className="space-y-4">
            <a
              href="mailto:machinelearningpennstate@gmail.com"
              className="text-[#FA8072] hover:underline block"
            >
              machinelearningpennstate@gmail.com
            </a>
          </div>
        </MotionDiv>
      </MotionDiv>
    </div>
  )
} 