import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card"
import ContactForm from '@/components/core/common/ContactForm'
import { IoIosChatboxes } from "react-icons/io";
import { FaEarthAmericas } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import Footer from '@/components/core/common/Footer';


const Contact = () => {
  return (
    <div>
      <div className="container mx-auto py-20">
        <div className="max-w-full flex items-center justify-center space-x-10">
          <div className='max-w-lg flex-col space-y-5 bg-[#161D29] p-8 rounded-[10px]'>
            <div className='flex items-start justify-center flex-col'>
              <p className='flex items-center justify-center space-x-2'>
                <IoIosChatboxes className='text-[#AFB2BF]' />
                <span className='text-[18px] text-[#F1F2FF] font-medium'>chat on us</span>
              </p>
              <p className='px-6 text-[14px] text-[#999DAA]'>Our friendly team is here to help.</p>
              <p className='px-6 text-[14px] text-[#999DAA]'>@mail address</p>
            </div>
            <div className='flex items-start justify-center flex-col'>
              <p className='flex items-center justify-center space-x-2'>
                <FaEarthAmericas className='text-[#AFB2BF]' />
                <span className='text-[18px] text-[#F1F2FF] font-medium'>Visit us</span>
              </p>
              <p className='px-6 text-[14px] text-[#999DAA]'>Come and say hello at our office HQ.</p>
              <p className='px-6 text-[14px] text-[#999DAA]'>Here is the location/ address</p>
            </div>
            <div className='flex items-start justify-center flex-col space-y-1'>
              <p className='flex items-center justify-center space-x-2'>
                <MdCall className='text-[#AFB2BF]' />
                <span className='text-[18px] text-[#F1F2FF] font-medium'>Call us</span>
              </p>
              <p className='px-6 text-[14px] text-[#999DAA]'>Mon - Fri From 8am to 5pm</p>
              <p className='px-6 text-[14px] text-[#999DAA]'>+123 456 7890</p>
            </div>
          </div>
          <Card className="max-w-xl border rounded-[10px]">
            <CardHeader className="flex items-start justify-center flex-col">
              <CardTitle className="text-[36px]">Got a Idea? We’ve got the skills. Let’s team up</CardTitle>
              <CardDescription className="text-[16px]">Tall us more about yourself and what you’re got in mind.</CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </div>

      <div className='container mx-auto py-20'>
        <div className='flex items-center justify-center text-[36px] font-semibold'>
          Review Section
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Contact