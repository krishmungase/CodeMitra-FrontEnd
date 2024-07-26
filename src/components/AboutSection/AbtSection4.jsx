import React from 'react'

const AbtSection4 = () => {
  return (
    <div className="container mx-auto py-32">
      <div className="flex items-center justify-between flex-col space-y-16 lg:space-y-0 md:flex-row max-w-full">
        <div className="max-w-2xl px-16 space-y-8">
          <span class="bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent text-[36px] font-semibold">
            Our Vision
          </span>
          <div className="space-y-5 text-[15px] text-[#838894]">
            <div className="text-left">
              With this vision in mind, we set out on a journey to create an
              e-learning platform that would revolutionize the way people
              learn. Our team of dedicated experts worked tirelessly to
              develop a robust and intuitive platform that combines
              cutting-edge technology with engaging content, fostering a
              dynamic and interactive learning experience.
            </div>
          </div>
        </div>
        <div>
          <div className="max-w-2xl px-16 space-y-8">
            <span class="bg-gradient-to-r from-blue-500 via-green-500 to-teal-500 text-transparent bg-clip-text text-[36px] font-semibold">
              Our Mission
            </span>
            <div className="space-y-5 text-[15px] text-[#838894]">
              <div className="text-left">
                our mission goes beyond just delivering courses online. We
                wanted to create a vibrant community of learners, where
                individuals can connect, collaborate, and learn from one
                another. We believe that knowledge thrives in an environment
                of sharing and dialogue, and we foster this spirit of
                collaboration through forums, live sessions, and networking
                opportunities.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AbtSection4