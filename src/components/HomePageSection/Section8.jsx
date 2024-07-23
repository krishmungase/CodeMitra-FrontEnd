import React from 'react'
import CTAButton from "../core/HomePage/Button"
import { ArrowRightOutlined } from '@ant-design/icons'
import GradientText from '../core/HomePage/GradientText'

const Section8 = () => {
  return (
    <div>
      <div className="container mx-auto py-16">
        <div className="max-w-full flex flex-col space-y-10 lg:space-y-0 lg:flex-row items-center lg:space-x-32 justify-center">
          <div className="">
            <img src="/assets/images/instructor.png" alt="" />
          </div>

          <div className="flex flex-col justify-center space-y-8 items-start max-w-full md:max-w-md">
            <div className="flex flex-col text-[36px] font-semibold">
              <span>Become an</span> <GradientText text={"instructor"} />
            </div>
            <p className="text-[14px] text-[#838894]">
              Instructors from around the world teach millions of students on
              StudyNotion. We provide the tools and skills to teach what you
              love.
            </p>
            <CTAButton active={true}>
              <div className="flex items-center space-x-2">
                <p>Start teaching today</p>
                <ArrowRightOutlined />
              </div>
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section8