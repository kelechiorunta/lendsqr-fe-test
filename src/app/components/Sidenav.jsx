'use client'
import React, { useState } from 'react'
import { Nav } from '../../components/ui/nav'
import {
    AlertCircle,
    Archive,
    ArchiveX,
    File,
    Inbox,
    MessagesSquare,
    Search,
    Send,
    ShoppingCart,
    LayoutDashboard,
    UsersRound,
    Settings,
    Trash2,
    Users2,
    ChevronRight,
    UserRoundX,
    ChevronLeft,
  } from "lucide-react"
import { Button } from '@/components/ui/button'
import {
    useWindowSize,
    useWindowWidth,
    useWindowHeight,
  } from '@react-hook/window-size'

export default function Sidenav() {
    const onlyWidth = useWindowWidth();
    const [isCollapsed, setIsCollapsed] = useState(onlyWidth && onlyWidth < 1180)
    
    // const mobileWidth = (onlyWidth && onlyWidth < 1026)


    function toggleSidebar(){
        setIsCollapsed(!isCollapsed)
    }
  return (
    <div className='relative min-w-[80px] border-r pr-5 pb-10 pt-[88px]'>
        {/* <p>width-{onlyWidth}</p> */}
        {!(onlyWidth && (onlyWidth < 1180)) && (
        <div className='absolute right-[-20px] top-7'>
            <Button 
                onClick={toggleSidebar}
                variant={'secondary'} 
                className='rounded-full p-2'>
                {isCollapsed? <ChevronRight/> : <ChevronLeft/>}
            </Button>
        </div>
        )}
         <Nav
            //Change to true later
            isCollapsed={(onlyWidth && (onlyWidth < 1180))? true : isCollapsed}
            navlinks={[
              {
                title: "Dashboard",
                label: "",
                icon: LayoutDashboard,
                variant: "ghost" || "default",
                href:"/admin/dashboard",
              },
              {
                title: "User Management",
                label: "",
                icon: UsersRound,
                variant: "ghost",
                href:"/admin/users",
              },
              {
                title: "Transaction Management",
                label: "",
                icon: ShoppingCart,
                variant: "ghost",
                href:"/admin/payments",
              },
              {
                title: "Analytics",
                label: "",
                icon: Settings,
                variant: "ghost",
                href:"/admin/analytics"
              },
              {
                title: "Coupon",
                label: "",
                icon: UserRoundX,
                variant: "ghost",
                href:"/admin/coupon"
              },
              {
                title: "Archive",
                label: "",
                icon: Archive,
                variant: "ghost",
              },
            ]}
          />
    </div>
  )
}
