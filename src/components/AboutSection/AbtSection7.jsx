import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card"
import { Textarea } from "../../components/ui/textarea"

const AbtSection7 = () => {
  return (
    <div className="container mx-auto py-32">
      <div className="max-w-full flex items-center justify-center">
        <Card className="max-w-3xl">
          <CardHeader className="flex items-center justify-center flex-col">
            <CardTitle>Get in Touch</CardTitle>
            <CardDescription className="text-[16px]">We’d love to here for you, Please fill out this form.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="flex flex-col w-full gap-y-4 mt-6">
              <div className="flex gap-x-4">
                <label className="w-full">
                  <p className="text-richblack-5 mb-1 text-[0.875rem] leading-[1.375rem]">
                    First Name<sup className="text-pink-200">*</sup>
                  </p>
                  <input
                    className="bg-richblack-800 rounded-[4px] w-full px-[12px] py-[8px]"
                    required
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="Enter first name"
                  />
                </label>

                <label className="w-full">
                  <p className="text-richblack-5 mb-1 text-[0.875rem] leading-[1.375rem]">
                    Last Name<sup className="text-pink-200">*</sup>
                  </p>
                  <input
                    className="bg-richblack-800 rounded-[4px] w-full px-[12px] py-[8px]"
                    required
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Enter last name"
                  />
                </label>
              </div>

              <label className="w-full">
                <p className="text-richblack-5 mb-1 text-[0.875rem] leading-[1.375rem]">
                  Email Address<sup className="text-red-200">*</sup>
                </p>
                <input
                  className="bg-richblack-800 rounded-[4px] w-full px-[12px] py-[8px]"
                  required
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter email address"
                />
              </label>

              <label className="w-full">
                <p className="text-richblack-5 mb-1 text-[0.875rem] leading-[1.375rem]">
                  Message<sup className="text-red-200">*</sup>
                </p>
                <Textarea placeholder="Type your message here." className="bg-richblack-800 text-[16px] rounded-[6px]" />
              </label>


              <button className="bg-yellow-50 text-richblack-900 font-semibold px-[12px] rounded-[8px] py-[8px] mt-6">
                Send Message
              </button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default AbtSection7