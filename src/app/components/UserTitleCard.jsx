import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"

import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar"
  

import { User } from "lucide-react"
import Image from "next/image"
import PersonalInfo from "./PersonalInfo"

export function UserTitleCard() {
  return (
    <Card className="min-w-[300px] border-0 px-0 overflow-hidden">
      <CardHeader className='shadow-md border'>
    <div className='flex flex-col gap-2 '>
      <div className='rounded-md flex gap-x-20 gap-y-8 items-center py-8 flex-wrap sm:gap-y-4 md:gap-y-0'>
        <div className='flex items-center gap-4 border-none border-r-2'>
            <div className='w-[100px] h-[100px] border rounded-full'>
                <Image 
                  width={100}
                  height={100}
                  className='w-[100px] h-[100px] border rounded-full'
                  src={'/imgs/avatar_user.png'} 
                  alt='avatar_details'/>
                {/* <User className='w-[100px] h-[100px] border rounded-full'/> */}
            </div>
            <div className='flex flex-col gap-2'>
                <CardTitle>Grace Effiom</CardTitle>
                <CardDescription>LSQFf587g90</CardDescription>
            </div>   
        </div>

        <div className='border-2 w-[3px] h-[60px]'></div>

        <div className='flex items-center gap-4 border-none border-r-2'>
            <div className='flex flex-col gap-2 items-center'>
                <CardTitle>User's Tier</CardTitle>
                <CardDescription className='flex gap-x-2'>
                    <Image src={'/imgs/star_bright.png'} alt={'bright'} width={16} height={16} />
                    <Image src={'/imgs/star_dull.png'} alt={'bright'} width={16} height={16} />
                    <Image src={'/imgs/star_dull.png'} alt={'bright'} width={16} height={16} />
                </CardDescription>
            </div>   
        </div>

        <div className='border-2 w-[3px] h-[60px]'></div>

        <div className='flex items-center gap-4 border-none border-r-2'>
            <div className='flex flex-col gap-2'>
                <CardTitle>
                    <p className="text-[22px] font-medium text-[rgba(33, 63, 125, 1)]">
                        &#8358;200,000.00
                    </p>
                </CardTitle>
                <CardDescription>9912345678/Providus Bank</CardDescription>
            </div>   
        </div>
    </div>
    </div> 
      </CardHeader>
      <CardContent className='-translate-y-10 max-w-full w-full px-0'>
  <div className="w-full max-w-full">
    <Tabs defaultValue="general" className="min-w-[400px] w-full max-w-full">
      <TabsList className="flex text-[16px] space-x-4 px-4 bg-white w-full max-w-full items-center overflow-hidden justify-start flex-wrap dark:bg-transparent md:justify-between">
        <TabsTrigger 
          value="general" 
          className="pb-2 px-4 border-b-2 rounded-none border-transparent data-[state=active]:border-[#7ddedd] data-[state=active]:text-[#7ddedd]"
        >
          General Details
        </TabsTrigger>
        <TabsTrigger 
          value="documents" 
          className="pb-2 px-4 border-b-2 rounded-none border-transparent data-[state=active]:border-[#7ddedd] data-[state=active]:text-[#7ddedd]"
        >
          Documents
        </TabsTrigger>
        <TabsTrigger 
          value="bank_details" 
          className="pb-2 px-4 border-b-2 rounded-none border-transparent data-[state=active]:border-[#7ddedd] data-[state=active]:text-[#7ddedd]"
        >
          Bank Details
        </TabsTrigger>
        <TabsTrigger 
          value="loans" 
          className="pb-2 px-4 border-b-2 rounded-none border-transparent data-[state=active]:border-[#7ddedd] data-[state=active]:text-[#7ddedd]"
        >
          Loans
        </TabsTrigger>
        <TabsTrigger 
          value="savings" 
          className="pb-2 px-4 border-b-2 rounded-none border-transparent data-[state=active]:border-[#7ddedd] data-[state=active]:text-[#7ddedd]"
        >
          Savings
        </TabsTrigger>
        <TabsTrigger 
          value="app_system" 
          className="pb-2 px-4 border-b-2 rounded-none border-transparent data-[state=active]:border-[#7ddedd] data-[state=active]:text-[#7ddedd]"
        >
          App and System
        </TabsTrigger>
      </TabsList>
      <TabsContent value="general" className='py-4 max-w-full min-w-full'>
        <PersonalInfo/>
      </TabsContent>
      <TabsContent value="documents" className='py-4 max-w-full min-w-full'>
        <p className='shadow-xl p-2 text-3xl'>Documents</p>
      </TabsContent>
      <TabsContent value="bank_details" className='py-4 max-w-full min-w-full'>
        <p className='shadow-xl p-2 text-3xl'>Bank Details</p>
      </TabsContent>
      <TabsContent value="loans" className='py-4 max-w-full min-w-full'>
        <p className='shadow-xl p-2 text-3xl'>Loans</p>
      </TabsContent>
      <TabsContent value="savings" className='py-4 max-w-full min-w-full'>
        <p className='shadow-xl p-2 text-3xl'>Savings</p>
      </TabsContent>
      <TabsContent value="app_system" className='p-4'>
        <p className='shadow-xl p-2 text-3xl'>App and System</p>
      </TabsContent>
    </Tabs>
  </div>
</CardContent>
</Card>
  )
}




