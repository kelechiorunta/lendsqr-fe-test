// 'use client'
// import React, { useContext } from 'react'
// import { ModeToggle } from '@/components/ui/theme-switcher'
// import Image from 'next/image'
// import { cn } from '@/lib/utils'
// import { NotebookIcon, ChevronDown } from 'lucide-react'
// import { Sidebar, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar'
// import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu'
// import { useSession } from 'next-auth/react'
// import { signOut } from 'next-auth/react'
// import { HamburgerMenuIcon } from '@radix-ui/react-icons'
// import { EmailContext } from './UserContext'
// import { EmailSearch } from './Datatable_Users/EmailSearch'
// import Link from 'next/link'



// export default function Navbar() {

//   const userEmailContext = useContext(EmailContext);
//   const { filterEmail, setFilterEmail } = userEmailContext;
//   const { data: session, loading, status } = useSession();
//   const signout = () => {
//     signOut();
// }
// const handleSearch = (value) => {
//   // console.log("Hello")
//   setFilterEmail(value);
//   console.log(filterEmail)
// };

//   return (
//     <header className='max-w-full bg-white top-0 sticky border-2 flex items-center justify-between p-2 z-20'>
//         <Image
//         alt='header-logo'
//         width={144.8}
//         height={30}
//         src={'/imgs/Group.svg'}
//         className={cn('min-w-[40px] min-h-[40px]')}/>

//         <EmailSearch onSearch={handleSearch} />

//         <Link href='#'><span className='underline'>Docs</span></Link>
        
//         <nav className='flex items-center gap-x-2'>
//           <Image
//           alt='notification'
//           width={20}
//           height={20}
//           src={'/imgs/notification.png'}
//           className='min-w-[20px] min-h-[20px] rounded-full shadow-md'/>

//           <Image
//           alt='avatar'
//           width={40}
//           height={40}
//           src={'/imgs/avatar.png'}
//           className='min-w-[40px] min-h-[40px] rounded-full border shadow-md'/>
          
//           <SidebarMenu className='w-max dark:text-black'>
//             <SidebarMenuItem>
//               <DropdownMenu>
//                 <DropdownMenuTrigger asChild>
//                   <SidebarMenuButton>
//                     {status==='authenticated' ? session?.user?.email : 'Switch Organization'}
//                     <ChevronDown className="ml-auto" />
//                   </SidebarMenuButton>
//                 </DropdownMenuTrigger>
//                 <DropdownMenuContent 
//                 side='top'
//                 className="w-[--radix-popper-anchor-width]">
//                   {/* <DropdownMenuItem>
//                     <span>Acme Inc</span>
//                   </DropdownMenuItem>
//                   <DropdownMenuItem>
//                     <span>Acme Corp.</span>
//                   </DropdownMenuItem>
//                   <DropdownMenuItem>
//                     <span>Account</span>
//                   </DropdownMenuItem>
//                   <DropdownMenuItem>
//                     <span>Billing</span>
//                   </DropdownMenuItem> */}
//                     <DropdownMenuItem>
//                   <span onClick={signout}>Logout</span>
//                     </DropdownMenuItem>
//                 </DropdownMenuContent>
//               </DropdownMenu>
//             </SidebarMenuItem>
//           </SidebarMenu>
          
//           <ModeToggle/>
//         </nav>
//     </header>
//   )
// }

'use client';
import React, { useContext } from 'react';
import { ModeToggle } from '@/components/ui/theme-switcher';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import { SidebarMenu, SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { useSession, signOut } from 'next-auth/react';
import { EmailContext } from './UserContext';
import { EmailSearch } from './Datatable_Users/EmailSearch';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';

export default function Navbar() {
  const userEmailContext = useContext(EmailContext);
  const { filterEmail, setFilterEmail } = userEmailContext;
  const { data: session, loading, status } = useSession();

  const handleSearch = (value) => {
    setFilterEmail(value);
    console.log(filterEmail);
  };

  return (
    <header className="max-w-full bg-white top-0 sticky border-2 flex items-center justify-between p-2 z-20">
      {/* Logo */}
      <Image
        alt="header-logo"
        width={144.8}
        height={30}
        src={'/imgs/Group.svg'}
        className={cn('min-w-[40px] min-h-[40px]')}
      />

      {/* Email Search - visible on larger screens only */}
      <div className="hidden lg:block">
        <EmailSearch onSearch={handleSearch} />
      </div>

      {/* Docs link - visible on larger screens only */}
      <div className="hidden lg:block">
        <Link href="#"><span className="underline">Docs</span></Link>
      </div>

      {/* Hamburger Menu for mobile screens */}
      <div className="lg:hidden">
        <DropdownMenu className='text-black dark:text-white'>
          <DropdownMenuTrigger asChild>
            <button aria-label="Menu" className="text-gray-600 focus:outline-none">
              <FaBars size={24} />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="bottom" align="end" className="w-48 bg-white shadow-md rounded-lg py-2">
            <DropdownMenuItem asChild>
              <EmailSearch onSearch={handleSearch} />
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="#"><span className=" underline ml-[8rem] dark:text-black">Docs</span></Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="#" className='w-full flex justify-end'>
              <Image
                alt="notification"
                width={20}
                height={20}
                src={'/imgs/notification.png'}
                className="min-w-[20px] min-h-[20px] rounded-full shadow-md"
              />
               <Image
                  alt="avatar"
                  width={40}
                  height={40}
                  src={'/imgs/avatar.png'}
                  className="min-w-[40px] min-h-[40px] rounded-full border shadow-md"
                />
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
            <SidebarMenu className="w-full text-right flex justify-end dark:text-black ">
                <SidebarMenuItem>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <SidebarMenuButton className='text-right flex justify-end'>
                        <p className='text-right ml-12 dark:text-black'>{status === 'authenticated' && 'Adedeji' }</p>
                        {/* //session?.user?.email : 'Switch Organization'} */}
                        <ChevronDown className="-mr-[10%]" />
                      </SidebarMenuButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent 
                      side="top"
                      className="w-[--radix-popper-anchor-width]"
                    >
                      <DropdownMenuItem asChild onClick={() => signOut()}>
                        <span>Logout</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </SidebarMenuItem>
              </SidebarMenu>

            </DropdownMenuItem>
            <DropdownMenuItem asChild onClick={() => signOut()}>
              <span className="underline block ml-28 dark:text-black">Logout</span>
            </DropdownMenuItem>

            <div className='ml-[8rem]'><ModeToggle /></div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Nav Menu for larger screens */}
      <nav className="hidden lg:flex items-center gap-x-2">
        <Image
          alt="notification"
          width={20}
          height={20}
          src={'/imgs/notification.png'}
          className="min-w-[20px] min-h-[20px] rounded-full shadow-md"
        />

        <Image
          alt="avatar"
          width={40}
          height={40}
          src={'/imgs/avatar.png'}
          className="min-w-[40px] min-h-[40px] rounded-full border shadow-md"
        />

        <SidebarMenu className="w-max dark:text-black">
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  {status === 'authenticated' ? session?.user?.email : 'Switch Organization'}
                  <ChevronDown className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem asChild onClick={() => signOut()}>
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>

        <ModeToggle />
      </nav>
    </header>
  );
}

