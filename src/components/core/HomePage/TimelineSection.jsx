import React from 'react'
import Logo1 from '/assets/Logo/Logo11.png'
import Logo2 from '/assets/Logo/Logo22.png'
import Logo3 from '/assets/Logo/Logo33.png'
import Logo4 from '/assets/Logo/Logo33.png'
import { Separator } from "../../../components/ui/separator"



const timeline = [
    {
        Logo: Logo1,
        Heading: "Leardership",
        Description: "Fully commited to success company",
    },
    {
        Logo: Logo2,
        Heading: "Responsibility",
        Description: "Students will always be our top priority",
    },
    {
        Logo: Logo3,
        Heading: "Flexibility",
        Description: "The ability to switch is an important skills",
    },
    {
        Logo: Logo4,
        Heading: "Solve the problem",
        Description: "Code your way to a solution",
    },
]


const TimelineSection = () => {
    return (

        <div className='flex justify-between flex-col md:flex-row space-y-16 items-center px-6 py-10'>
            <div className='flex flex-col gap-5 relative'>
                {
                    timeline.map((ele, idx) => {
                        return (
                            <div key={idx} className='flex gap-6 items-center relative h-[80px]'>
                                <img src={ele.Logo} alt="Logo" className='w-[60px] h-[60px] object-contain' />
                                <div className='flex flex-col space-y-2'>
                                    <h2 className='font-semibold text-[16px] text-[#161D29] leading-tight text-left'>{ele.Heading}</h2>
                                    <p className='text-[14px] text-[#2C333F] leading-tight text-center'>{ele.Description}</p>
                                </div>
                                {
                                    idx < timeline.length - 1 && (
                                        <Separator orientation="vertical" className="absolute bg-[#AFB2BF] left-[30px] top-[60px]" />
                                    )
                                }
                            </div>
                        )
                    })
                }
            </div>
            <div className='relative flex items-center flex-col shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] max-w-2xl'>
                <video autoPlay muted loop className='w-full'>
                    <source src='/assets/video/Frame51.mp4' type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className='bg-[#014A32] max-w-md absolute bottom-[-36px] md:left-28 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] h-[90px]'>
                    <div className="h-full w-full flex justify-around items-center px-4 py-6">
                        <div className="flex items-center space-x-2 text-center p-6">
                            <h1 className="text-xl md:text-3xl font-bold text-white">10</h1>
                            <p className="text-[9px] md:text-[16px] text-[#05A77B]">YEARS OF EXPERIENCE</p>
                        </div>
                        <Separator orientation="veritcal" className="bg-[#037957]" />
                        <div className="flex items-center text-center space-x-2 px-6">
                            <h1 className="text-xl md:text-3xl font-bold text-white">250</h1>
                            <p className="text-[9px] md:text-[16px] text-[#05A77B]">TYPES OF COURSES</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TimelineSection