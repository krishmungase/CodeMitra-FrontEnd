import { ArrowRightOutlined } from '@ant-design/icons'
import React from 'react'
import CTAButton from "../core/HomePage/Button"

const Section4 = () => {
  return (
    <div class="inset-0 -z-10 h-[310px] bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      <div className="flex items-center flex-col justify-between gap-5 mx-auto">
        <div className="h-[150px]"></div>
        <div className="flex items-center justify-center space-x-12">
          <CTAButton active={true} linkto={"/signup"}>
            <div className="flex items-center justify-center gap-2 ">
              Explore Full Catalog
              <ArrowRightOutlined />
            </div>
          </CTAButton>
          <CTAButton active={false} linkto={"/login"}>
            Learn More
          </CTAButton>
        </div>
      </div>
    </div>
  )
}

export default Section4