import React from 'react'
import { User, BookCopy, Bookmark, ShoppingCart, GraduationCap, Settings, LogOut } from "lucide-react";

const Drawer = () => {
  return (
    <div className="fixed mt-20 inset-y-[50px] left-4 hidden w-[240px] bg-[#1A191B] flex-col items-start border rounded-[10px] sm:flex py-16 z-10">
      <div className="flex space-y-6 items-start px-8 justify-center flex-col">
        <div className="flex justify-center space-x-3">
          <User className="size-5" />
          <span className="text-[15px] font-semibold">My Profile</span>
        </div>
        <div className="flex flex-row items-center justify-center space-x-3">
          <BookCopy className="size-5" />
          <span className="text-[15px] font-semibold">Enrolled Courses</span>
        </div>
        <div className="flex flex-row items-center justify-center space-x-3">
          <Bookmark className="size-5" />
          <span className="text-[15px] font-semibold">Wishlist</span>
        </div>
        <div className="flex flex-row items-center justify-center space-x-3">
          <ShoppingCart className="size-5" />
          <span className="text-[15px] font-semibold">Purchase History</span>
        </div>
        <div className="flex flex-row items-center justify-center space-x-3">
          <GraduationCap className="size-5" />
          <span className="text-[15px] font-semibold">Courses</span>
        </div>
      </div>
      <div className='border w-[85%] border-b ml-4 my-5'></div>
      <div className="flex space-y-6 items-start px-8 justify-center flex-col">
        <div className="flex flex-row items-center justify-center space-x-3">
          <Settings className="size-5" />
          <span className="text-[15px] font-semibold">Setting</span>
        </div>
        <div className="flex flex-row items-center justify-center space-x-3">
          <LogOut className="size-5" />
          <span className="text-[15px] font-semibold">Logout</span>
        </div>
      </div>
    </div>
  )
}

export default Drawer