// Users columns (client component) that will contain our column definitions.
// "use client"

import React, { useState } from 'react'
import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal, MoreVertical, ArrowUpDown, Network, Wifi, ChevronDown } from "lucide-react"
import { Sidebar, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar'

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

const handleToggle = (user) => {
    // console.log(index)
    return {...user, status: 'Active'}
    // index && setToggle(!toggle)
}

export const Payment = {
    organisation: '',
    username: '',
    email: '',
    phone: '',
    date_joined: '',
    status: "pending" | "processing" | "success" | "failed",
    
  }

  export const Organization_popup = () => {
    return (
      <SidebarMenu className='w-max z-50 absolute top-10 -right-2 bg-black'>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton>
               Switch Organization
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
            <span>Logout</span>
              </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
    )
  }
   

export const columns = [
  {//ORGANIZATION HEADER
    accessorKey: "organization",
    header: ({ column }) => {
      const [togglePopup, setTogglePopUp] = useState(false)
      return (
        <span
          className='relative cursor-pointer flex w-full justify-start gap-x-4 items-center font-extrabold'
          variant="ghost"
          onClick={() => setTogglePopUp(!togglePopup)}
        >
          ORGANIZATION
          <Wifi className=" h-4 w-4" />
          {togglePopup && <Organization_popup/>}
        </span>
      )
    },
  },
  {//USERNAME HEADER
    accessorKey: "username",
    header: ({ column }) => {
      return (
        <span
          className='cursor-pointer flex w-full justify-start gap-x-4 items-center font-extrabold'
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          USERNAME
          <Wifi className=" h-4 w-4" />
        </span>
      )
    },
  },
  {//EMAIL HEADER
    accessorKey: "email",
    header: ({ column }) => {
        return (
          <span
            className='cursor-pointer flex w-full justify-start gap-x-4 items-center font-extrabold'
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            EMAIL
            <Wifi className=" h-4 w-4" />
          </span>
        )
      },
  },
  {//PHONE HEADER
    accessorKey: "phone",
    header: ({ column }) => {
      return (
        <span
          className='cursor-pointer flex w-full justify-start gap-x-4 items-center font-extrabold'
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          PHONE
          <Wifi className=" h-4 w-4" />
        </span>
      )
    },
  },
  {//DATE HEADER
    accessorKey: "date_joined",
    header: ({ column }) => {
      return (
        <span
          className='cursor-pointer flex w-full justify-start gap-x-4 items-center font-extrabold'
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          DATE JOINED
          <Wifi className=" h-4 w-4" />
        </span>
      )
    },
  },
  {//STATUS HEADER
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <span
          className='cursor-pointer flex w-full justify-start gap-x-4 items-center font-extrabold'
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          STATUS
          <Wifi className=" h-4 w-4" />
        </span>
      )
    },
  },

  { //ACTION HEADER BUTTON AT THE END OF THE HEADER ...
    id: "actions",
    cell: ({ row }) => {
      const user = row.original
      const [toggle, setToggle] = useState(user);
 
      return (
        <DropdownMenu key={user}>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(user.username)}
            >
              Copy Username
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View User</DropdownMenuItem>
            <DropdownMenuItem>View User Details</DropdownMenuItem>
            <DropdownMenuItem onClick={()=>setToggle(prev=>({
                ...prev, status: 'Active'
            }))}>Toggle Status</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },

//   {
//     accessorKey: "amount",
//     header: () => <div className="text-right">Amount</div>,
//     cell: ({ row }) => {
//       const amount = parseFloat(row.getValue("amount"))
//       const formatted = new Intl.NumberFormat("en-US", {
//         style: "currency",
//         currency: "USD",
//       }).format(amount)
 
//       return <div className="text-right font-medium">{formatted}</div>
//     },
//   },
]

