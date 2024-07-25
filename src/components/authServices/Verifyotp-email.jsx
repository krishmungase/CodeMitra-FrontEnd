import React, { useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card"
import { MoveLeft, History } from 'lucide-react';
import { Link, useNavigate } from "react-router-dom"
import OtpInput from 'react-otp-input';
import Loading from '../core/common/Loading';
import { apiConnector } from '@/services/apiconnector';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';



const VerifyOTP = () => {
  const [otp, setOtp] = useState('')
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()

  const { user } = useSelector((state) => state.auth)
  console.log("user data", user);
  const handleOnSubmit = async () => {
    if (!otp) {
      toast.error("Please enter the OTP");
      return;
    }
    setIsLoading(true);
    try {
      const result = await apiConnector().verifyOtp({ method: "POST", bodyData: { firstName: user.firstName, lastName: user.lastName, email: user.email, password: user.password, confirmPassword: user.confirmPassword, accountType: user.accountType, otp: otp }, url: "/auth/signup" })
      console.log("Data to store", result);
      toast.success("Account created successfully!");
      navigate('/dashboard')
    } catch (error) {
      toast.error(error.response.data);
      console.log("error", error);
    } finally {
      setIsLoading(false);
    }
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className='container mx-auto'>
      <div className='flex items-center justify-center py-32'>
        <div className='max-w-md'>
          <Card className="max-w-md px-5">
            <CardHeader>
              <CardTitle className="text-2xl">Verify email</CardTitle>
              <CardDescription className="text-[16px]">A verification code has been sent to you. Enter the code below</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center flex-col space-y-6 px-5">
              <form onSubmit={handleOnSubmit} className='flex items-center justify-center flex-col'>
                <OtpInput
                  value={otp}
                  onChange={(value) => {
                    setOtp(value);
                    console.log(value);
                  }}
                  numInputs={6}
                  renderInput={(props) => (
                    <input
                      {...props}
                      // className="bg-[#161D29] text-lg text-center text-[#FFFFFF] px-6 py-4 m-1 rounded"
                      style={{
                        backgroundColor: '#161D29',
                        fontSize: '1.125rem',
                        textAlign: 'center',
                        color: '#FFFFFF',
                        margin: '0.25rem',
                        height: '55px',
                        width: '55px',
                        borderRadius: '0.25rem',
                      }}
                    />
                  )}
                />
                <button className="w-[360px] mt-6 bg-[#FFD60A] text-black text-center text-[16px] px-6 py-[10px] rounded-[4px] font-semibold transition-all duration-200 hover:scale-95">Verify Email</button>
              </form>
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