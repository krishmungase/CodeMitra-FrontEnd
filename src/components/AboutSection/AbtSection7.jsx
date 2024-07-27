import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card"
import { Textarea } from "../../components/ui/textarea"
import ContactForm from '../core/common/ContactForm'

const AbtSection7 = () => {
  return (
    <div className="container mx-auto py-32">
      <div className="max-w-full flex items-center justify-center">
        <Card className="max-w-3xl">
          <CardHeader className="flex items-center justify-center flex-col">
            <CardTitle>Get in Touch</CardTitle>
            <CardDescription className="text-[16px]">We’d love to here for you, Please fill out this form.</CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default AbtSection7