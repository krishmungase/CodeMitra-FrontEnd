import React, { useState } from 'react'
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const SetSection3 = () => {
  
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });

  const handleClick = (buttonName) => {
    setShowPassword({
      ...showPassword,
      [buttonName]: !showPassword[buttonName],
    });
  };


  return (
    <div className='max-w-[69rem] container mx-auto py-8'>
      <div className='flex items-start px-16 py-8 justify-between flex-col bg-[#161D29] rounded-[10px] min-h-36'>
        <div className='flex items-center justify-between w-full '>
          <p className='text-lg font-bold'>Change Password</p>
        </div>
        <div className='flex items-center w-full flex-col justify-center space-y-6 py-2'>
          <div className='w-full flex items-center justify-between space-x-4'>
            <div className='flex-1'>
              <label className="w-full relative">
                <p className="text-richblack-5 mb-1 text-[0.875rem] leading-[1.375rem]">
                  Current Password<sup className="text-pink-200">*</sup>
                </p>
                <input
                  className="bg-[#2C333F] rounded-[4px] w-full px-[12px] py-[8px]"
                  required
                  type={showPassword.password ? "text" : "password"}
                  name="currentPassword"
                  id="currentPassword"
                  placeholder="Enter current Password"
                />

                <span
                  className="absolute top-[38px] right-3 z-10 cursor-pointer"
                  onClick={() => handleClick("password")}
                >
                  {showPassword.password ? (
                    <AiOutlineEyeInvisible />
                  ) : (
                    <AiOutlineEye />
                  )}
                </span>
              </label>
            </div>
            <div className='flex-1'>
              <label className="w-full relative">
                <p className="text-richblack-5 mb-1 text-[0.875rem] leading-[1.375rem]">
                  New Password<sup className="text-pink-200">*</sup>
                </p>
                <input
                  className="bg-[#2C333F] rounded-[4px] w-full px-[12px] py-[8px]"
                  required
                  type={showPassword.confirmPassword ? "text" : "password"}
                  name="newPassword"
                  id="newPassword"
                  placeholder="Enter New Password"
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
          </div>
        </div>
      </div>
      <div className='flex items-center justify-end px-8 space-x-4 py-4'>
        <button className='flex items-center justify-center text-white hover:bg-[#2C333F] bg-gray-700 px-5 rounded-[8px] py-[9px] space-x-2'>
          <span htmlFor="picture">Cancel</span>
        </button>
        <button className='flex items-center justify-center bg-yellow-400 hover:bg-yellow-500 text-black px-6 rounded-[8px] py-[0.48rem] space-x-2'>
          <span className='text-md font-semibold'>Save</span>
        </button>
      </div>
    </div>
  )
}

export default SetSection3