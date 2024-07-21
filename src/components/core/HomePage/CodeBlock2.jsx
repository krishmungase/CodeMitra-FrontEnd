import React from 'react'
import CTAButton from "../HomePage/Button"
import { ArrowRightOutlined } from '@ant-design/icons'
import { TypeAnimation } from 'react-type-animation'

const Codeblock2 = ({ heading, subheading, ctabtn1, ctabtn2, codeblock, codecolor }) => {
    return (
        <div className={`flex items-center justify-between flex-col lg:flex-row gap-x-20 gap-y-16 lg:gap-y-0`}>
            {/* code block */}
            <div className="flex z-50 h-[70%] w-full md:w-[550px] border-2 py-9 text-[13px] bg-gray-400 rounded-xl p-2 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-gray-100/40 relative">
                <div className='bg-gray-400/10 size-full absolute top-0 left-0 blur-lg shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]'></div>
                <div className='text-center flex space-y-[5px] flex-col w-[10%] font-semibold'>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                    <p>6</p>
                    <p>7</p>
                    <p>8</p>
                    <p>9</p>
                    <p>10</p>
                    <p>11</p>
                </div>
                <div className={`w-[90%] leading-[24px] flex flex-col gap-2 font-semibold ${codecolor} pr-2`}>
                    <TypeAnimation sequence={[codeblock, 2000, ""]} repeat={Infinity} omitDeletionAnimation={true}
                        style={{ whiteSpace: "pre-line", display: "block" }}
                    />
                </div>
            </div >

            {/* text block */}
            <div className="max-w-2xl">
                {heading}

                <div className='text-[#999DAA] text-md'>
                    {subheading}
                </div>

                <div className='flex mt-4 space-x-4 items-start'>
                    <CTAButton
                        active={ctabtn1.active}
                        linkto={ctabtn1.linkto}
                    >
                        <div className='flex gap-2 items-center font-bold'>
                            {ctabtn1.btnText}
                            <ArrowRightOutlined />
                        </div>
                    </CTAButton>

                    <CTAButton
                        active={ctabtn2.active}
                        linkto={ctabtn2.linkto}
                        className="font-bold"
                    >
                        {ctabtn2.btnText}
                    </CTAButton>
                </div>
            </div >
        </div >
    )
}

export default Codeblock2;