import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../components/ui/breadcrumb"
import { SlashIcon } from "@radix-ui/react-icons"
import { TbEdit } from "react-icons/tb";



const MyProfile = () => {
  const { user } = useSelector((state) => state.auth);

  console.log("user: ", user);
  console.log("additionalDetails: ", user.addtionalDetails);
  console.log("additionalDetails about : ", user.addtionalDetails.about);
  return (
    <div className='flex flex-col space-y-3'>
      <div className='flex flex-col space-y-2'>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <SlashIcon />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <SlashIcon />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>My Profile</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className='text-2xl font-bold'>My Profile</h1>
      </div>

      {/* section 1 */}
      <div className='flex items-center justify-center pt-8 max-w-[69rem] container mx-auto'>
        <div className='flex items-center justify-between w-full px-32 bg-[#161D29] min-h-36 rounded-[10px]'>
          <div className='flex items-center justify-center space-x-8'>
            <img src={user?.image} alt="Logo" className='rounded-full w-20' />
            <div>
              <p className='text-xl font-semibold'>{user?.firstName}{" "}{user?.lastName}</p>
              <p className='text-[#838894]'>{user.email}</p>
            </div>
          </div>
          <Link to={'/dashboard/settings'} className='flex items-center justify-center bg-yellow-400 hover:bg-yellow-500 text-black px-3 rounded-[8px] py-[0.40rem] space-x-2'>
            <span className='text-md font-semibold'>Edit</span>
            <TbEdit className='font-semibold' />
          </Link>
        </div>
      </div>

      {/* section 2 */}
      <div className='max-w-[69rem] container mx-auto py-8'>
        <div className='flex items-start px-32 py-8 justify-between flex-col bg-[#161D29] rounded-[10px] min-h-36'>
          <div className='flex items-center justify-between w-full '>
            <p className='text-xl font-bold'>About</p>
            <Link to={'/dashboard/settings'} className='flex items-center justify-center bg-yellow-400 hover:bg-yellow-500 text-black px-3 rounded-[8px] py-[0.40rem] space-x-2'>
              <span className='text-md font-semibold'>Edit</span>
              <TbEdit className='font-semibold' />
            </Link>
          </div>
          <p className='text-[#838894]'>{user?.addtionalDetails?.about ?? "Write something about yourself"}</p>
        </div>
      </div>


      {/* section 3 */}
      <div className='max-w-[69rem] container mx-auto'>
        <div className='flex items-start px-32 py-8 justify-between flex-col bg-[#161D29] rounded-[10px] min-h-36'>
          <div className='flex items-center justify-between w-full '>
            <p className='text-xl font-bold'>Personal Details</p>
            <Link to={'/dashboard/settings'} className='flex items-center justify-center bg-yellow-400 hover:bg-yellow-500 text-black px-3 rounded-[8px] py-[0.40rem] space-x-2'>
              <span className='text-md font-semibold'>Edit</span>
              <TbEdit className='font-semibold' />
            </Link>
          </div>
          <div className='flex items-center flex-col justify-center space-y-6 py-2'>
            <div className='flex items-center justify-between w-[450px]'>
              <div>
                <p className='text-[#838894] text-sm'>First Name</p>
                <p>{user.firstName}</p>
              </div>
              <div>
                <p className='text-[#838894] text-sm'>Last Name</p>
                <p>{user.lastName}</p>
              </div>
            </div>
            <div className='flex items-center justify-between w-[450px]'>
              <div>
                <p className='text-[#838894] text-sm'>Email</p>
                <p>{user.email}</p>
              </div>
              <div>
                <p className='text-[#838894] text-sm'>contact Number</p>
                <p>{user.addtionalDetails.about}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default MyProfile 