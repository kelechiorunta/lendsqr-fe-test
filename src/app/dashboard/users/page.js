'use client'
import React from 'react'
import { useParams, useRouter } from 'next/navigation'
import { LucideArrowLeftFromLine } from 'lucide-react'
import { Button, buttonVariants } from '@/components/ui/button'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { UserTitleCard } from '@/app/components/UserTitleCard'

export default function page() {
   const router = useRouter();
  return (
    <div className='py-16 px-8 container max-w-full'>

        <Button 
          onClick={()=>router.back()}
          className='bg-transparent text-black flex gap-x-2 mb-4 items-center p-4 dark:text-white'>
          <Image src={'/imgs/arrow.png'} width={30} height={30} alt={'arrow'}/>
          Back to Users
        </Button>

        <div className='flex justify-between items-center mb-8'>
          <h1 className='text-1.5xl px-4 text-[rgba(33, 63, 125, 1)] font-medium'>Users Details</h1>
          <div className='flex items-center gap-x-2'>
            <Button className={cn(buttonVariants({ className:'text-[#eb5077] bg-transparent border-[#eb5077] border-2'}))}>
              BLACKLIST USER
            </Button>
            <Button className={cn(buttonVariants({className:'text-[#4ed2d1] bg-transparent border-[#4ed2d1] border-2'}))}>
              ACTIVATE USER
            </Button>
          </div>
          
        </div>
        
        <UserTitleCard/>
        {/* <button onClick={signout}>Logout</button> */}
    </div>
  )
}
