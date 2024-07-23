import React from 'react'
import GradientText from '../core/HomePage/GradientText'
import CTAButton from "../core/HomePage/Button"

const Section5 = () => {
  return (
    <div className="bg-[#F9F9F9] py-16">
      <div className="container mx-auto text-[#2C333F]">
        <div className="flex flex-col md:flex-row space-y-8 items-center w-full justify-between space-x-10">
          <div className="text-[36px] font-semibold flex flex-col">
            <span>Get the skills you need for a </span>
            <GradientText text={"job that is in demand"} />
          </div>
          <div className="flex flex-col items-start space-y-[25px] max-w-2xl">
            <p>
              The modern StudyNotion is the dictates its own terms. Today, to
              be a competitive specialist requires more than professional
              skills.
            </p>
            <CTAButton active={true} linkto={"/login"}>
              Learn More
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section5