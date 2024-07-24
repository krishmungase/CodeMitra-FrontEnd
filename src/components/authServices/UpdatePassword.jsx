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
import { Link, useLocation, useNavigate } from "react-router-dom"
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { apiConnector } from '@/services/apiconnector';
import toast from 'react-hot-toast';
import Loading from '../core/common/Loading';


const UpdatePassword = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const [confirmPassword, setConfirmPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")


  const [showPassword, setShowPassword] = useState({
    createPassword: false,
    confirmPassword: false,
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleClick = (buttonName) => {
    setShowPassword({
      ...showPassword,
      [buttonName]: !showPassword[buttonName],
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const token = location.pathname.split('/').at(-1);
    try {
      setIsLoading(true)
      console.log("passwrods: ", newPassword, confirmPassword);
      const response = await apiConnector().resetnewPassword({ method: 'POST', bodyData: { password: newPassword, confirmPassword: confirmPassword, token }, url: "/auth/resetpassword" })
      console.log("Responsed : ", response);
      toast.success("Password reset successfully!!")
      navigate('/')
    } catch (error) {
      toast.error(error);
      console.error(error);
    }
    finally {
      setIsLoading(true)
    }
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className='container mx-auto'>
      <div className='flex items-center justify-center py-32'>
        <Card className="max-w-md px-5">
          <CardHeader>
            <CardTitle className="text-2xl">Choose  new password</CardTitle>
            <CardDescription className="text-[16px]">Almost done. Enter your new password and youre all set.</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-center flex-col space-y-6 px-5 max-w-full">
            <form className='max-w-full space-y-5' onSubmit={handleOnSubmit}>
              <div className='flex items-center flex-col space-y-5'>
                <label className="w-full relative">
                  <p className="text-richblack-5 mb-1 text-[0.875rem] leading-[1.375rem]">
                    New Password<sup className="text-red-400">*</sup>
                  </p>
                  <input
                    className="bg-richblack-800 rounded-[4px] w-full px-[12px] py-[8px]"
                    required
                    type={showPassword.createPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    value={newPassword}
                    onChange={(e) => { setNewPassword(e.target.value) }}
                    placeholder="Enter New Password"
                  />

                  <span
                    className="absolute top-[38px] right-3 z-10 cursor-pointer"
                    onClick={() => handleClick("createPassword")}
                  >
                    {showPassword.createPassword ? (
                      <AiOutlineEyeInvisible />
                    ) : (
                      <AiOutlineEye />
                    )}
                  </span>
                </label>
                <label className="w-full relative">
                  <p className="text-richblack-5 mb-1 text-[0.875rem] leading-[1.375rem]">
                    Confirm New Password<sup className="text-red-400">*</sup>
                  </p>
                  <input
                    className="bg-richblack-800 rounded-[4px] w-full px-[12px] py-[8px]"
                    required
                    type={showPassword.confirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => { setConfirmPassword(e.target.value) }}
                    placeholder="Confirm New Password"
                  />

                  <span
                    className="absolute top-[38px] right-1.5 z-10 cursor-pointer"
                    onClick={() => handleClick("confirmPassword")}
                  >
                    {showPassword.confirmPassword ? (
                      <AiOutlineEyeInvisible />
                    ) : (
                      <AiOutlineEye />
                    )}
                  </span>
                </label>
              </div>
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
    </div>
  )
}

export default UpdatePassword