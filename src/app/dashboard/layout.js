'use client'

import React from 'react'
// import Sidenav from '../components/Sidenav'
import Navbar from '../components/TopNavbar'
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from '../components/AppSidebar'

export default function DashBoardLayout({children}) {
  return (
    <>
    <SidebarProvider>
        <div className='flex flex-col container max-w-screen-2xl'>
            <Navbar/>
            
            <main className='flex max-w-screen-2xl'>
                <AppSidebar/>
                <SidebarTrigger />
                {/* <SidebarInset> */}
                {/* <Sidenav/> */}
                    {children}
                {/* </SidebarInset> */}
            </main>
        </div>
    </SidebarProvider>
    </>
    
  )
}
