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
    <Card className="min-w-[350px] border-none px-0">
      <CardHeader className='shadow-md'>
    <div className='flex flex-col gap-2 '>
      <div className='rounded-md flex gap-x-20 items-center py-8'>
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
      <TabsList className="flex text-[16px] space-x-4 px-4 bg-white w-full max-w-full items-center justify-between dark:bg-transparent">
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

      {/* <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter> */}
    </Card>
  )
}

{/* <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Framework</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Next.js</SelectItem>
                  <SelectItem value="sveltekit">SvelteKit</SelectItem>
                  <SelectItem value="astro">Astro</SelectItem>
                  <SelectItem value="nuxt">Nuxt.js</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card> */}


