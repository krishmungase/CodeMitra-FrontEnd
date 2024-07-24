import React, { useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card"
import { MoveLeft } from 'lucide-react';
import { Link } from "react-router-dom"
import CTAButton from "../core/HomePage/Button"
import { useDispatch } from 'react-redux';
import { apiConnector } from '@/services/apiconnector';
import toast from 'react-hot-toast';
import Loading from '../core/common/Loading';




const ForgotPassword = ({ email, setEmailSent, setEmail }) => {

  const [isLoading, setIsLoading] = useState(false);

  const handleOnsubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // console.log("email : ", email);
    try {
      const result = await apiConnector().forgotResetPassword({ method: "POST", bodyData: { email }, url: "/auth/resetpasword-token" })
      console.log("Result generated when : ", result.data)
      toast.success("Reset Email Send!")
      setEmailSent(true);
    } catch (error) {
      console.log("Error is generating token : ", error)
      toast.error("Reset Email Error!")
    }
    finally {
      setIsLoading(false);
    }
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <div>
      <Card className="max-w-md px-5">
        <CardHeader>
          <CardTitle className="text-2xl">Reset your password</CardTitle>
          <CardDescription className="text-[16px]">Have no fear. We’ll email you instructions to reset your password. If you dont have access to your email we can try account recovery</CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-center flex-col space-y-6 px-5 max-w-full">
          <form className='max-w-full space-y-4' onSubmit={handleOnsubmit}>
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
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            {/* <CTAButton type="submit" active={true} linkto={'#'} className="w-[360px] mt-6">Reset Password</CTAButton> */}
            <button className="w-[360px] mt-6 bg-[#FFD60A] text-black text-center text-[16px] px-6 py-[10px] rounded-[4px] font-semibold transition-all duration-200 hover:scale-95">Reset password</button>
          </form>
        </CardContent>
        <CardFooter className="flex items-center justify-between px-8">
          <Link to='/login' className='flex items-center space-x-2'>
            <span><MoveLeft /></span>
            <span className='text-[14px]'>Back to login</span>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}

export default ForgotPassword