import { MotionDiv } from '@/components/motion'

export default function Contact() {
  return (
    <div className="min-h-screen">
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-4 py-16 space-y-12"
      >
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold">Contact Us</h1>
          <p className="text-xl text-gray-300">
            Get in touch with the ML@PSU team
          </p>
        </div>

        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-8"
        >
          <div className="bg-gray-900/50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Join Our Community</h2>
            <p className="text-gray-300 mb-6">
              Interested in joining ML@PSU or have any questions? We'd love to hear from you!
            </p>
            <a
              href="mailto:machinelearningpennstate@gmail.com"
              className="join-button inline-block"
            >
              Email Us
            </a>
          </div>

          <div className="bg-gray-900/50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
            <ul className="space-y-4 text-gray-300">
              <li>
                <span className="font-bold">Email:</span>{' '}
                <a
                  href="mailto:machinelearningpennstate@gmail.com"
                  className="text-[#FA8072] hover:underline"
                >
                  machinelearningpennstate@gmail.com
                </a>
              </li>
              <li>
                <span className="font-bold">Location:</span> Penn State University
              </li>
            </ul>
          </div>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <p className="text-gray-300">
            Follow us on social media for updates and announcements!
          </p>
        </MotionDiv>
      </MotionDiv>
    </div>
  )
} 