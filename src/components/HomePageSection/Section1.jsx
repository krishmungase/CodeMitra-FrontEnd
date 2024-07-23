import React from 'react'
import { Link } from "react-router-dom";

import { ArrowRightOutlined } from "@ant-design/icons";

import CTAButton from "../core/HomePage/Button";
import GradientText from "../core/HomePage/GradientText";

const Section1 = () => {
  return (
    <div className="container mx-auto">
      <div className="py-16 flex items-center justify-center space-y-2 flex-col">
        <Link to={"/signup"}>
          <div className="rounded-full bg-[#161D29] font-semibold text-[#999DAA] px-6 py-2 transition-all duration-200 hover:scale-95 shadow-slate-200 max-w-sm">
            <div className="flex text-[15px] items-center rounded-full space-x-3">
              <p>Become an Instructor</p>
              <ArrowRightOutlined />
            </div>
          </div>
        </Link>

        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center flex-col">
            <div className="text-[36px] font-semibold flex flex-col items-center justify-center">
              <span className="text-center w-full">
                {" "}
                Empower Your Future with
              </span>{" "}
              <GradientText text={"Coding Skills"} />
            </div>
            <div className="text-[#838894] text-center spae-y-2 text-[14px] max-w-3xl">
              With our online coding courses, you can learn at your own pace,
              from anywhere in the world, and get access to a wealth of
              resources, including hands-on projects, quizzes, and
              personalized feedback from instructors.{" "}
            </div>
          </div>

          <div className="flex items-center justify-center space-x-7 mt-8">
            <CTAButton active={true} linkto={"/signup"}>
              Learn More
            </CTAButton>

            <CTAButton active={false} linkto={"/signup"}>
              Book a Demo
            </CTAButton>
          </div>
        </div>
      </div>

      <div className="py-10 flex items-center justify-center">
        <div className="relative shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] max-w-3xl lg:max-w-[70%] z-30">
          <video autoPlay muted loop className="h-full w-full">
            <source src="/assets/video/Frame37.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="absolute -z-10 w-full h-full top-5 left-5 bg-white"></div>
        </div>
      </div>
    </div>
  )
}

export default Section1