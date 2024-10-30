'use client'

import { Calendar, Users2, Users, House, Inbox, Search, Settings, ChevronDown, UserCheck, UserX } from "lucide-react"
 
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarGroupAction,
  
} from "@/components/ui/sidebar"

import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"

import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { signOut } from "next-auth/react"
// Menu items.
const dashboard = [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: House,
    },
]

const customers = [
  {
    title: "Users",
    url: "/dashboard/users",
    icon: Users2,
  },
  {
    title: "Guarantors",
    url: "#",
    icon: Users,
  },
  {
    title: "Loans",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Decision Models",
    url: "#",
    icon: Search,
  },
  {
    title: "Savings",
    url: "#",
    icon: Settings,
  },
  {
    title: "Loan Requests",
    url: "#",
    icon: Settings,
  },
  {
    title: "Whitelist",
    url: "#",
    icon: UserCheck,
  },
  {
    title: "Karma",
    url: "#",
    icon: UserX,
  },
]

const businesses = [
    {
      title: "Organization",
      url: "#",
      icon: Users2,
    },
    {
      title: "Loan Products",
      url: "#",
      icon: Users,
    },
    {
      title: "Saving Products",
      url: "#",
      icon: Calendar,
    },
    {
      title: "Fees and Charges",
      url: "#",
      icon: Search,
    },
    {
      title: "Transactions",
      url: "#",
      icon: Settings,
    },
    {
      title: "Services",
      url: "#",
      icon: Settings,
    },
    {
      title: "Services Account",
      url: "#",
      icon: UserCheck,
    },
    {
      title: "Settlements",
      url: "#",
      icon: UserX,
    },
    {
      title: "Reports",
      url: "#",
      icon: UserX,
    },
  ]

  const settings = [
    {
      title: "Preferences",
      url: "#",
      icon: Users2,
    },
    {
      title: "Fees and Pricing",
      url: "#",
      icon: Users,
    },
    {
      title: "Audit Logs",
      url: "#",
      icon: Calendar,
    },
    ]
 
import { useSidebar } from "@/components/ui/sidebar"
 
export function AppSidebar() {

  const signout = () => {
    signOut();
}

  const {
    state,
    open,
    setOpen,
    openMobile,
    setOpenMobile,
    isMobile,
    toggleSidebar,
  } = useSidebar();

  return (
    <Sidebar  >
       
  <SidebarHeader>
    <SidebarMenu className='mt-14'>
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
            <span onClick={signout}>Sign out</span>
              </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>   
  </SidebarHeader>

  {/* <SidebarContent> */}
        <SidebarGroup>
          {/* <SidebarGroupLabel>CUSTOMERS</SidebarGroupLabel> */}
          <SidebarGroupContent>
            <SidebarMenu>
              {dashboard.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      {/* </SidebarContent> */}

    {/* <Collapsible defaultOpen className="group/collapsible">
      <SidebarGroup>
        <SidebarGroupLabel asChild>
          <CollapsibleTrigger>
            Help
            <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
          </CollapsibleTrigger>
        </SidebarGroupLabel>
        
        {customers.map((item) => (
                <CollapsibleContent key={item.title} className=''>
                  
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                
                </CollapsibleContent>
              ))}
    
      </SidebarGroup>
    </Collapsible> */}
      
    <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>CUSTOMERS</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {customers.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>BUSINESSES</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {businesses.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>SETTINGS</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {settings.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
</Sidebar>

  )
}

{/* <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton className='text-white'>
              Switch Organization
              <ChevronDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent > */}
        {/* //   className="w-[--radix-popper-anchor-width]"> */}
            {/* <DropdownMenuItem>
              <span>Acme Inc</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Acme Corp.</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu> */}