import React from 'react'
import GradientText from '../core/HomePage/GradientText'
import ExplorePage from '../core/HomePage/ExplorePage'

const Section3 = () => {
  return (
    <div className="container mx-auto">
      <div className="flex relative items-center flex-col space-y-16 py-32 justify-center max-w-full">
        <div className="flex flex-col items-center justify-center space-y-4 pb-[350px]">
          <div className="text-[36px] font-semibold">
            <span>Unlock the</span> <GradientText text={"Power of Code"} />
          </div>
          <p className="text-[15px] text-[#838894]">
            Learn to Build Anything You Can Imagine
          </p>
        </div>

        <div className="flex lg:absolute top-60 flex-col md:flex-row">
          <ExplorePage />
        </div>
      </div>
    </div>
  )
}

export default Section3