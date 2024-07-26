import React from 'react'
import GradientText from '../core/HomePage/GradientText';
import Images from "../Profile/Images";

const AbtSection1 = () => {
  return (
    <div className="bg-[#161D29]">
      <div className="container relative mx-auto flex py-8 md:py-32 items-center justify-center flex-col max-w-full space-y-16">
        <p className="text-[#999DAA]">About us</p>
        <div className="flex items-center justify-center flex-col space-y-8">
          <div className="text-[36px] font-semibold flex flex-col items-center justify-center">
            <span className="text-center w-full">
              {" "}
              Driving Innovation in Online Education for a
            </span>{" "}
            <GradientText text={"Brighter Future"} />
          </div>
          <div className="text-[#838894] text-center spae-y-2 text-[15px] max-w-3xl pb-32">
            CodeMitra is at the forefront of driving innovation in online
            education. We're passionate about creating a brighter future by
            offering cutting-edge courses, leveraging emerging technologies,
            and nurturing a vibrant learning community.
          </div>
        </div>
      </div>
      <div className="flex lg:absolute bottom-0 left-40 right-12 flex-col md:flex-row">
        <Images />
      </div>
    </div>
  )
}

export default AbtSection1