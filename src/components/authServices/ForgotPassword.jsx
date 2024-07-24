import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card"
import { MoveLeft } from 'lucide-react';
import { Link } from "react-router-dom"
import CTAButton from "../core/HomePage/Button"

const ForgotPassword = () => {
  return (
    <div className='container mx-auto'>
      <div className='flex items-center justify-center py-32'>
        <div>
          <Card className="max-w-md px-5">
            <CardHeader>
              <CardTitle className="text-2xl">Reset your password</CardTitle>
              <CardDescription className="text-[16px]">Have no fear. We’ll email you instructions to reset your password. If you dont have access to your email we can try account recovery</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center flex-col space-y-6 px-5 max-w-full">
              <div className='max-w-full'>
                <label htmlFor="" className="w-full">
                  <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                    Email Address
                    <sup className="text-pink-200">*</sup>
                  </p>

                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    name="email"
                    className="bg-richblack-800 rounded-[0.35rem] w-[360px] p-[12px] text-richblack-5"
                  />
                </label>
              </div>
              <CTAButton active={true} linkto={'#'} className="w-[360px]">Reset Password</CTAButton>
            </CardContent>
            <CardFooter className="flex items-center justify-between px-8">
              <Link to='/login' className='flex items-center space-x-2'>
                <span><MoveLeft /></span>
                <span className='text-[14px]'>Back to login</span>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword