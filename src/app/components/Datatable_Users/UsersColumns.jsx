// Users columns (client component) that will contain our column definitions.
// "use client"

import React, { useState } from 'react'
import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal, MoreVertical, ArrowUpDown } from "lucide-react"


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
   

export const columns = [
  {//ORGANIZATION HEADER
    accessorKey: "organization",
    header: "Organization",
  },
  {//USERNAME HEADER
    accessorKey: "username",
    header: "Username",
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
            <ArrowUpDown className=" h-4 w-4" />
          </span>
        )
      },
  },
  {//PHONE HEADER
    accessorKey: "phone",
    header: "Phone Number",
  },
  {//DATE HEADER
    accessorKey: "date_joined",
    header: "Date Joined",
  },
  {//STATUS HEADER
    accessorKey: "status",
    header: "Status",
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

