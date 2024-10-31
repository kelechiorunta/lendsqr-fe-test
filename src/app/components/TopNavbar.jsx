'use client'
import React, { useContext } from 'react'
import { ModeToggle } from '@/components/ui/theme-switcher'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { NotebookIcon, ChevronDown } from 'lucide-react'
import { Sidebar, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { useSession } from 'next-auth/react'
import { signOut } from 'next-auth/react'
// import UserContext from './UserContext'
import { EmailContext } from './UserContext'
import { EmailSearch } from './Datatable_Users/EmailSearch'



export default function Navbar() {

  const userEmailContext = useContext(EmailContext);
  const { filterEmail, setFilterEmail } = userEmailContext;
  const { data: session, loading, status } = useSession();
  const signout = () => {
    signOut();
}
const handleSearch = (value) => {
  // console.log("Hello")
  setFilterEmail(value);
  console.log(filterEmail)
};

  return (
    <header className='max-w-full bg-white top-0 sticky border-2 flex items-center justify-between p-2 z-20'>
        <Image
        alt='header-logo'
        width={144.8}
        height={30}
        src={'/imgs/Group.svg'}
        className={cn('min-w-[40px] min-h-[40px]')}/>

        <EmailSearch onSearch={handleSearch} />

        <span className='underline'>Docs</span>
        
        <nav className='flex items-center gap-x-2'>
          <Image
          alt='notification'
          width={20}
          height={20}
          src={'/imgs/notification.png'}
          className='min-w-[20px] min-h-[20px] rounded-full shadow-md'/>

          <Image
          alt='avatar'
          width={40}
          height={40}
          src={'/imgs/avatar.png'}
          className='min-w-[40px] min-h-[40px] rounded-full border shadow-md'/>
          
          <SidebarMenu className='w-max dark:text-black'>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton>
                    {status==='authenticated' ? session?.user?.email : 'Switch Organization'}
                    <ChevronDown className="ml-auto" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                side='top'
                className="w-[--radix-popper-anchor-width]">
                  <DropdownMenuItem>
                    <span>Acme Inc</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Acme Corp.</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Account</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Billing</span>
                  </DropdownMenuItem>
                    <DropdownMenuItem>
                  <span onClick={signout}>Logout</span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
          
          <ModeToggle/>
        </nav>
    </header>
  )
}