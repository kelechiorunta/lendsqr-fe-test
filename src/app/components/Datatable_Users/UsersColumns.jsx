// Users columns (client component) that will contain our column definitions.
// "use client"

import React, { useState, useContext } from 'react'
import { EmailContext } from '../UserContext'
import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal, MoreVertical, ArrowUpDown, Network, Wifi, ChevronDown, Eye, UserX, UserCheck } from "lucide-react"
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

import { useRouter } from 'next/navigation'

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
      <Card className="w-max max-w-[350px] absolute top-10 right-100 z-10">
      <CardHeader>
        <CardTitle></CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4 capitalize">
            
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="organisation">Organisation</Label>
              <Select>
                <SelectTrigger id="organisation">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="lendsqr">Lendsqr</SelectItem>
                  <SelectItem value="irorun">Irorun</SelectItem>
                  <SelectItem value="lendstar">Lendstar</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Username</Label>
              <Input id="name" placeholder="User" />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type='email' placeholder="Email" />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="date">Date</Label>
              <Input id="date" type='date' placeholder="Date" />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" placeholder="Phone Number" />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="status">Status</Label>
              <Select>
                <SelectTrigger id="status">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="inactive">InActive</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="blacklisted">Blacklisted</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex items-center gap-x-4 justify-between">
        <Button variant="outline">Reset</Button>
        <Button className='bg-[#39cdcc]'>Filter</Button>
      </CardFooter>
    </Card> 

    )
  }
   

export const columns = [
  {//ORGANIZATION HEADER
    accessorKey: "organization",
    scope:'col',
    label: 'Organisation',
    header: ({ column }) => {
      const user_Context = useContext(EmailContext);
      const { setTogglePopUp, togglePopup } = user_Context;
      // const [togglePopup, setTogglePopUp] = useState(false)
      return (
        <span
          className='min-w-[100%] w-full relative cursor-pointer flex justify-between xl:justify-start gap-x-4 items-center font-extrabold'
          variant="ghost"
          onClick={() => setTogglePopUp(!togglePopup)}
        >
          <h1>ORGANIZATION</h1>
          <Wifi className=" h-4 w-4" />
          {/* <div className='z-50 absolute w-max'>{togglePopup && <Organization_popup/>}</div> */}
        </span>
      )
    },
  },
  {//USERNAME HEADER
    accessorKey: "username",
    header: ({ column }) => {
      return (
        <span
          className='min-w-[100%] w-full relative cursor-pointer flex justify-between xl:justify-start gap-x-4 items-center font-extrabold'
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
            className='min-w-[100%] w-full relative cursor-pointer flex justify-between xl:justify-start gap-x-4 items-center font-extrabold'
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
          className='min-w-[100%] w-full relative cursor-pointer flex justify-between xl:justify-start gap-x-4 items-center font-extrabold'
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
          className='min-w-[100%] w-full relative cursor-pointer flex justify-between xl:justify-start gap-x-4 items-center font-extrabold'
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
          className='min-w-[100%] w-full relative cursor-pointer flex justify-between xl:justify-start gap-x-4 items-center font-extrabold'
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
      const router = useRouter();
 
      return (
        <DropdownMenu 
        className='min-w-[100%] w-full relative cursor-pointer flex md:justify-between xl:justify-start gap-x-4 items-center font-extrabold'
        key={user}>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='p-4' align="end">
            <DropdownMenuLabel></DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(user.username)}
            >
              {/* <Eye/>
              View Details */}
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={()=>router.push(`/dashboard/users`)} //Make this a dynamic route later
              className='flex gap-x-2 items-center mb-2'>
                <Eye/>
              View Details
            </DropdownMenuItem>
            <DropdownMenuItem 
              className='flex gap-x-2 items-center mb-2'>
                <UserX/>
              Blacklist User
            </DropdownMenuItem>
            <DropdownMenuItem 
              className='flex gap-x-2 items-center mb-2'>
                <UserCheck/>
              Activate User
            </DropdownMenuItem>
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

