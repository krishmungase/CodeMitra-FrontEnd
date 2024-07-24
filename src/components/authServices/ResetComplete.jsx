import React from 'react'
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
import CTAButton from "../core/HomePage/Button"

const ResetComplete = () => {
  return (
    <div className='container mx-auto'>
      <div className='flex items-center justify-center py-32'>
        <div>
          <Card className="max-w-md px-5">
            <CardHeader>
              <CardTitle className="text-2xl">Reset complete!</CardTitle>
              <CardDescription className="text-[16px]">All done! We have sent an email to m***********@gmail.com to confirm</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center flex-col space-y-6 px-5 max-w-full">
              <CTAButton active={true} linkto={'#'} className="w-[360px]">Return to login</CTAButton>
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

export default ResetComplete