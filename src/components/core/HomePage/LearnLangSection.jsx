import React from 'react'
import GradientText from './GradientText'
import KnowProgress from "/assets/images/Know_ProgressB.png"
import Compare from "/assets/images/compareB.png"
import Plan from "/assets/images/planB.png"
import CTAButton from '../../core/HomePage/Button'
const LearnLangSection = () => {
    return (
        <div className='flex flex-col items-center justify-center space-y-24 py-16 max-w-full'>
            <div className='flex flex-col max-w-full space-y-4  '>
                <div className='text-[36px] font-semibold'>
                    <span className='text-[36px] text-[#000814]'>Your swiss knife for</span> <GradientText text={"learning any language"} />
                </div>
                <div className='text-left md:text-center w-[790px] text-[#2C333F] max-w-full'>
                    Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.
                </div>
            </div>
            <div className='flex flex-col items-center max-w-full space-y-3 justify-center md:flex-row'>
                <div className='md:-mr-[80px] mr-0'>
                    <img src={KnowProgress} alt="" />
                </div>
                <div>
                    <img src={Compare} alt="" />
                </div>
                <div className='md:-ml-[50px] ml-0'>
                    <img src={Plan} alt="" />
                </div>
            </div>
            <div>
                <CTAButton active={true}>Learn More</CTAButton>
            </div>
        </div>
    )
}

export default LearnLangSection