import React, { useState } from 'react'
import { Label } from '../ui/label';
import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Button } from "../../components/ui/button"
import { Calendar } from "../../components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/ui/popover"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useSelector } from 'react-redux';

const SetSection2 = () => {
  const { user } = useSelector((state) => state.auth);
  const [date, setDate] = useState("");
  return (
    <div className='max-w-[69rem] container mx-auto py-8'>
      <div className='flex items-start px-16 py-8 justify-between flex-col bg-[#161D29] rounded-[10px] min-h-36'>
        <div className='flex items-center justify-between w-full '>
          <p className='text-lg font-bold'>Profile information</p>
        </div>
        <div className='flex items-center w-full flex-col justify-center space-y-6 py-3'>
          <div className='w-full flex items-center justify-between space-x-4'>
            <div className='flex-1'>
              <label htmlFor="first-name" className="block text-sm font-medium text-[#F1F2FF] mb-1">First Name</label>
              <input
                type="text"
                id="first-name"
                placeholder={user.firstName || 'Enter your first name'}
                className="w-full px-4 py-2 border bg-[#2C333F] rounded-[7px]"
              />
            </div>
            <div className='flex-1'>
              <label htmlFor="last-name" className="block text-sm font-medium text-[#F1F2FF] mb-1">Last Name</label>
              <input
                type="text"
                id="last-name"
                placeholder={user.lastName || 'Enter your last name'}
                className="w-full px-4 py-2 border bg-[#2C333F] rounded-[7px] "
              />
            </div>
          </div>
          <div className='w-full flex items-center justify-between space-x-4'>
            <div className='flex-1'>
              <label htmlFor="first-name" className="block text-sm font-medium text-[#F1F2FF] mb-1">
                Data of Birth
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal bg-[#2C333F] text-white rounded-[7px]",
                      !date && "text-gray-400"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className='flex-1'>
              <label htmlFor="first-name" className="block text-sm font-medium text-[#F1F2FF] mb-1">
                Gender
              </label>
              <div className='flex items-center justify-center w-full'>
                <RadioGroup defaultValue={user.addtionalDetails.gender} className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="default" id="r1" />
                    <Label htmlFor="r1">Male</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="comfortable" id="r2" />
                    <Label htmlFor="r2">Female</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="compact" id="r3" />
                    <Label htmlFor="r3">Other</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>

          <div className='w-full flex items-center justify-between space-x-4'>
            <div className='flex-1'>
              <label htmlFor="contact" className="block text-sm font-medium text-[#F1F2FF] mb-1">Contact Number</label>
              <input
                type="text"
                id="contact"
                placeholder={user.addtionalDetails.contactNumber || 'Enter your contact number'}
                className="w-full px-4 py-2 border bg-[#2C333F] rounded-[7px]"
              />
            </div>
            <div className='flex-1'>
              <label htmlFor="about" className="block text-sm font-medium text-[#F1F2FF] mb-1">About</label>
              <input
                type="text"
                id="about"
                placeholder={user.addtionalDetails.about || 'Write about yourself'}
                className="w-full px-4 py-2 border bg-[#2C333F] rounded-[7px] "
              />
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

export default SetSection2