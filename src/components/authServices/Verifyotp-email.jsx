import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "../../components/ui/input-otp"
import { MoveLeft, History } from 'lucide-react';
import { Link } from "react-router-dom"
import CTAButton from "../core/HomePage/Button"


const VerifyOTP = () => {

  return (
    <div className='container mx-auto'>
      <div className='flex items-center justify-center py-32'>
        <div>
          <Card className="max-w-md px-5">
            <CardHeader>
              <CardTitle className="text-2xl">Verify email</CardTitle>
              <CardDescription className="text-[16px]">A verification code has been sent to you. Enter the code below</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center flex-col space-y-6 px-5">
              <InputOTP maxLength={6}>
                <InputOTPGroup >
                  <InputOTPSlot index={0} />
                </InputOTPGroup>
                <InputOTPGroup>
                  <InputOTPSlot index={1} />
                </InputOTPGroup>
                <InputOTPGroup>
                  <InputOTPSlot index={2} />
                </InputOTPGroup>
                <InputOTPGroup>
                  <InputOTPSlot index={3} />
                </InputOTPGroup>
                <InputOTPGroup>
                  <InputOTPSlot index={4} />
                </InputOTPGroup>
                <InputOTPGroup>
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
              <CTAButton active={true} linkto={'#'} className="w-[360px]">Verify email</CTAButton>
            </CardContent>
            <CardFooter className="flex items-center justify-between px-8">
              <Link to='/login' className='flex items-center space-x-2'>
                <span><MoveLeft /></span>
                <span className='text-[14px]'>Back to login</span>
              </Link>
              <Link to='#' className='flex items-center space-x-2'>
                <span><History className='size-5 text-sky-500' /></span>
                <span className='text-[14px] text-sky-500'>resend it</span>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default VerifyOTP