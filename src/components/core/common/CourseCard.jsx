import React, { useRef } from 'react'
import { Separator } from "../../../components/ui/separator"

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../../../components/ui/card"
import { Users } from 'lucide-react';
import { Workflow } from 'lucide-react';
import { cn } from '@/lib/utils';

const CourseCard = ({ cardData, currentCard, setCurrentCard }) => {

    return (
        <Card className={cn("py-4 px-6 cursor-pointer", currentCard === cardData.id && "bg-[#F9F9F9] shadow-[5px_5px_0px_0px_rgba(255,255,0,1)] scale-110")} onClick={() => setCurrentCard(cardData.id)}>
            <CardHeader>
                <CardTitle className={cn("text-[20px]", currentCard === cardData.id && "text-black")}>{cardData.heading}</CardTitle>
            </CardHeader>
            <CardContent className="mb-8">
                <p className={cn("text-[#6E727F] text-[15px]", currentCard === cardData.id && "text-[#585D69]")}>This course covers the basic concepts of HTML including creating and structuring web pages, adding text, links, images, and more.</p>
            </CardContent>
            <div className='border border-b'></div>
            <CardFooter className="flex justify-between items-center space-x-6 py-3">
                <div className={cn("flex space-x-2 items-center justify-center", currentCard === cardData.id && "flex space-x-2 items-center justify-center text-[#0A5A72]")}>
                    <Users /> <span>{cardData.level}</span>
                </div>
                <div className={cn("flex space-x-2 items-center justify-center", currentCard === cardData.id && "flex space-x-2 items-center justify-center text-[#0A5A72]")}>
                    <Workflow /> <span>{cardData.lessonNumber} &nbsp; Lessons</span>
                </div>
            </CardFooter>
        </Card>
    )
}

export default CourseCard