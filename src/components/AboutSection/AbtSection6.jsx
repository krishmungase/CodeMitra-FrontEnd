import React from 'react'
import GradientText from '../core/HomePage/GradientText';
import CTAButton from "../core/HomePage/Button"

const LearningGreedArray = [
  {
    id: -1,
    heading: "World-Class Learning for",
    highlight: "Anyone, Anywhere",
    description: "CodeMitra partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.",
    btnText: "Learn More",
    btnLink: "/"
  },

  {
    id: 1,
    heading: "Curriculum Based on Industry Needs",
    description: "Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs."
  },
  {
    id: 2,
    heading: "Our Learning Methods",
    description: "The learning process uses the namely online and offline."
  },
  {
    id: 3,
    heading: "Rating \"Auto-grading\"",
    description: "You will immediately get feedback during the learning process without having to wait for an answer or response from the mentor."
  },
  {
    id: 4,
    heading: "Ready to Work",
    description: "Connected with over 150+ hiring partners, you will have the opportunity to find a job after graduating from our program."
  },
  {
    id: 5,
    heading: "Certification",
    description: "You will get a certificate that can be used as a certification during job hunting."
  }
];


const AbtSection6 = () => {
  return (
    <div className='container mx-auto py-32'>
      <div className='flex items-center justify-center'>
        <div className="grid grid-cols-1 lg:grid-cols-4">
          {
            LearningGreedArray.map((card, index) => {
              return (
                <div
                  key={index}
                  className={`${index === 0 && "lg:col-span-2 min-h-[250px]"} ${card.id % 2 === 1 ? "bg-[#2C333F] min-h-[250px]" : "bg-[#161D29] min-h-[250px]"
                    }  ${card.id === 3 && "lg:col-start-2"}
                    ${card.id < 0 && "bg-transparent"}
                    `}
                >
                  {
                    card.id < 0 ? (
                      <div className='flex flex-col space-y-4 px-2 py-2'>
                        <div className='text-[36px] font-semibold flex flex-col items-start'>
                          {card.heading}{"  "}
                          <GradientText text={card.highlight} />
                        </div>
                        <p className='text-[15px] text-[#838894] tracking-wider'>{card.description}</p>
                        <div>
                          <CTAButton active={true} linkto={card.btnLink} className="w-[150px]">
                            {card.btnText}
                          </CTAButton>
                        </div>
                      </div>
                    ) : (<div className='flex items-start justify-center space-y-8 flex-col px-5 py-8'>
                      <h2 className='text-[18px] font-medium'>{card.heading}</h2>
                      <p className='text-[#AFB2BF] text-[15px]'>{card.description}</p>
                    </div>)
                  }
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default AbtSection6