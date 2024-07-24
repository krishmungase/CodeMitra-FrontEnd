import React, { useState } from 'react'
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
import { apiConnector } from '@/services/apiconnector';
import toast from 'react-hot-toast';
import Loading from '../core/common/Loading';

const VerifyEmail = ({ email }) => {

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const result = await apiConnector().forgotResetPassword({ method: "POST", bodyData: { email }, url: "/auth/resetpasword-token" })
      toast.success("Email Resend Successfully!")
    } catch (error) {
      console.log("Error is generating token : ", error)
      toast.error("Email resended Error!")
    }
    finally {
      setIsLoading(false);
    }
  }

  if (isLoading) {
    return <Loading />
  }


  return (
    <div className='container mx-auto'>
      <div className='flex items-center justify-center py-32'>
        <div>
          <Card className="max-w-md px-5">
            <CardHeader>
              <CardTitle className="text-2xl">Check email</CardTitle>
              <CardDescription className="text-[16px]">{`We have sent the reset email to ${email}`}</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center flex-col space-y-6 px-5 max-w-full">
              <button onClick={handleSubmit} className="w-[360px] mt-6 bg-[#FFD60A] text-black text-center text-[16px] px-6 py-[10px] rounded-[4px] font-semibold transition-all duration-200 hover:scale-95">Resend Email</button>
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

export default VerifyEmail