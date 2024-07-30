import React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../components/ui/breadcrumb"
import { SlashIcon } from "@radix-ui/react-icons"
import SetSection1 from '../SettingCom/SetSection1';
import SetSection2 from '../SettingCom/SetSection2';
import SetSection3 from '../SettingCom/SetSection3';


const Setting = () => {
  return (
    <div>
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
              <BreadcrumbPage>settings</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className='text-2xl font-bold'>Settings</h1>
      </div>

      <SetSection1 />

      <SetSection2 />

      <SetSection3 />

    </div>
  )
}

export default Setting