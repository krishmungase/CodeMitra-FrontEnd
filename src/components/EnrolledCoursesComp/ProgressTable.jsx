import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"



const ProgressTable = ({ enrolledCourses }) => {
  return (
    <div className='py-16'>
      <Table className="w-full border-collapse">
        <TableHeader className="">
          <TableRow className="text-left">
            <TableHead className="p-4 text-[#C5C7D4] text-sm font-semibold">Course Name</TableHead>
            <TableHead className="p-4 pl-2 text-[#C5C7D4] text-sm font-semibold">Duration</TableHead> {/* Reduced padding-left */}
            <TableHead className="p-4 pl-8 text-[#C5C7D4] text-sm font-semibold">Progress</TableHead> {/* Increased padding-left */}
          </TableRow>
        </TableHeader>
        <TableBody>
          {enrolledCourses.map((course) => (
            <TableRow key={course._id} className="border-t">
              <TableCell className="py-4 flex items-start space-x-4">
                <div className="w-20 h-16 overflow-hidden rounded-md border border-gray-200">
                  <img src={course.thumbnail} alt={course.courseName} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col">
                  <p className="text-lg font-semibold text-gray-200">{course.courseName}</p>
                  <p className="text-sm text-gray-500 mt-1">{course.courseDescription}</p>
                </div>
              </TableCell>
              <TableCell className="p-4 pl-2 text-gray-700">
                {/* Add duration logic here */}
                time duration
              </TableCell>
              <TableCell className="p-4 pl-8">

                <div className='flex flex-col items-start space-y-1'>
                  <label htmlFor="progress" className='text-[10px]'>Progress</label>
                  <Progress id="progress" value={43} className="w-[60%]" />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

    </div>
  )
}

export default ProgressTable