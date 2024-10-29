'use client'
import React from 'react'
import { ModeToggle } from '@/components/ui/theme-switcher'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { NotebookIcon } from 'lucide-react'
import { FaUser } from 'react-icons/fa'

export default function Navbar() {
  return (
    <header className='max-w-full top-0 sticky border-2 flex items-center justify-between p-2 z-20 bg-primary dark:bg-header'>
        <Image
        width={144.8}
        height={30}
        src={'/imgs/Group.svg'}
        className={cn('min-w-[40px] min-h-[40px]', 'logo')}/>

        <span>Docs</span>
        
        <Image
        width={20}
        height={20}
        src={'/imgs/notification.png'}
        className='min-w-[20px] min-h-[20px] rounded-full shadow-md'/>

        <Image
        width={40}
        height={40}
        src={'/imgs/avatar.png'}
        className='min-w-[40px] min-h-[40px] rounded-full border shadow-md'/>
        <ModeToggle/>
    </header>
  )
}