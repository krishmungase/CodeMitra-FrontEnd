import React from 'react'
import GradientText from '../core/HomePage/GradientText'

const AbtSection2 = () => {
  return (
    <div className="container mx-auto py-16">
      <div className="flex items-center justify-center max-w-full pt-32">
        <div className="h-32"></div>
        <p className="px-8 text-center text-[30px] md:text-[36px] font-semibold text-[#AFB2BF]">
          <span className="text-[#424854]">"</span> We are passionate about
          revolutionizing the way we learn. Our innovative platform{" "}
          <GradientText text={"combines technology"} />, expertise, and
          community to create an{" "}
          <span class="bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
            unparalleled educational experience
          </span>
          .<span className="text-[#424854]">"</span>
        </p>
      </div>
    </div>
  )
}

export default AbtSection2