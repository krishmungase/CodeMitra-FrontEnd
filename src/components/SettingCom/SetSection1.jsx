import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { useSelector } from 'react-redux';
import { Upload } from "lucide-react"

const SetSection1 = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className='flex items-center justify-center pt-8 max-w-[69rem] container mx-auto'>
      <div className='flex items-center justify-between w-full px-16 bg-[#161D29] min-h-36 rounded-[10px]'>
        <div className='flex items-center justify-center space-x-8'>
          <img src={user?.image} alt="Logo" className='rounded-full w-20' />
          <div>
            <p className='text-md font-semibold'>Change Profile Picture</p>
            <div className='flex items-center justify-center space-x-3 py-3'>
              <button className='flex items-center justify-center text-white hover:bg-[#2C333F] bg-gray-700 px-5 rounded-[8px] py-[13px] space-x-2'>
                <Label htmlFor="picture">Select</Label>
                <Input id="picture" type="file" className="hidden" />
              </button>
              <button className='flex items-center justify-center bg-yellow-400 hover:bg-yellow-500 text-black px-3 rounded-[8px] py-[0.40rem] space-x-2'>
                <span className='text-md font-semibold'>Upload</span>
                <Upload className='font-semibold size-5' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SetSection1