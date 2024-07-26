import React from 'react'
import Frame38 from "/assets/images/Frame38.png"

const AbtSection3 = () => {
  return (
    <div className="container mx-auto py-32">
      <div className="flex items-center md:justify-between justify-center flex-col md:flex-row max-w-full">
        <div className="max-w-2xl px-16 space-y-8">
          <span className="bg-gradient-to-r from-red-500 via-pink-500 to-violet-500 text-transparent bg-clip-text text-[36px] font-semibold">
            Our Founding Story
          </span>
          <div className="space-y-5 text-[15px] text-[#838894]">
            <div className="text-left">
              Our e-learning platform was born out of a shared vision and
              passion for transforming education. It all began with a group of
              educators, technologists, and lifelong learners who recognized
              the need for accessible, flexible, and high-quality learning
              opportunities in a rapidly evolving digital world.
            </div>
            <div className="text-left">
              As experienced educators ourselves, we witnessed firsthand the
              limitations and challenges of traditional education systems. We
              believed that education should not be confined to the walls of a
              classroom or restricted by geographical boundaries. We
              envisioned a platform that could bridge these gaps and empower
              individuals from all walks of life to unlock their full
              potential.
            </div>
          </div>
        </div>
        <div>
          <img src={Frame38} alt="" />
        </div>
      </div>
    </div>
  )
}

export default AbtSection3