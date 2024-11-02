'use client'

import { Home, UserCheck2, DollarSign, Wallet, 
  Calendar, Users2, Users, House, Inbox, Search, 
  Settings, ChevronDown, UserCheck, UserX, GitMerge,
  Sliders, PiggyBank, FileText, Navigation, Hand,
  Handshake, Log,
  LogOut,
  MessageCircle
 } from "lucide-react"

 import Image from "next/image"
 
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
      icon: Home,
      image: '/imgs/dashboard.png'
    },
]

const customers = [
  {
    title: "Users",
    url: "/dashboard/users",
    icon: Users,
    image: '/imgs/customers/users.png'
  },
  {
    title: "Guarantors",
    url: "#",
    icon: UserCheck2,
    image: '/imgs/customers/guarantors.png'
  },
  {
    title: "Loans",
    url: "#",
    icon: Wallet,
    image: '/imgs/customers/loans.png'
  },
  {
    title: "Decision Models",
    url: "#",
    icon: Handshake,
    image: '/imgs/customers/decision_models.png'
  },
  {
    title: "Savings",
    url: "#",
    icon: Settings,
    image: '/imgs/customers/savings.png'
  },
  {
    title: "Loan Requests",
    url: "#",
    icon: Settings,
    image: '/imgs/customers/loan_request.png'
  },
  {
    title: "Whitelist",
    url: "#",
    icon: UserCheck,
    image: '/imgs/customers/whitelist.png'
  },
  {
    title: "Karma",
    url: "#",
    icon: UserX,
    image: '/imgs/customers/karma.png'
  },
]

const businesses = [
    {
      title: "Organization",
      url: "#",
      icon: Users2,
      image: '/imgs/businesses/organization.png'
    },
    {
      title: "Loan Products",
      url: "#",
      icon: Users,
      image: '/imgs/businesses/loan_products.png'
    },
    {
      title: "Saving Products",
      url: "#",
      icon: Calendar,
      image: '/imgs/businesses/savings_products.png'
    },
    {
      title: "Fees and Charges",
      url: "#",
      icon: Search,
      image: '/imgs/businesses/fees_charges.png'
    },
    {
      title: "Transactions",
      url: "#",
      icon: Settings,
      image: '/imgs/businesses/transactions.png'
    },
    {
      title: "Services",
      url: "#",
      icon: Settings,
      image: '/imgs/businesses/services.png'
    },
    {
      title: "Services Account",
      url: "#",
      icon: UserCheck,
      image: '/imgs/businesses/service_account.png'
    },
    {
      title: "Settlements",
      url: "#",
      icon: UserX,
      image: '/imgs/businesses/settlements.png'
    },
    {
      title: "Reports",
      url: "#",
      icon: UserX,
      image: '/imgs/businesses/reports.png'
    },
  ]

  const settings = [
    {
      title: "Preferences",
      url: "#",
      icon: Users2,
      image: '/imgs/settings/preferences.png'
    },
    {
      title: "Fees and Pricing",
      url: "#",
      icon: Users,
      image: '/imgs/settings/fees_pricing.png'
    },
    {
      title: "Audit Logs",
      url: "#",
      icon: Calendar,
      image: '/imgs/settings/audit_logs.png'
    },
    {
      title: "System Messages",
      url: "#",
      icon: MessageCircle,
      image: '/imgs/settings/system_messages.png'
    },
    ]

    const logout = [
      {
        title: "Logout",
        url: "#",
        icon: LogOut,
        image: '/imgs/logout.png'
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
    <Sidebar className='min-h-full' >
       
  <SidebarHeader>
    <SidebarMenu className='mt-14'>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton>
              <Image 
                width={16}
                height={16}
                src='/imgs/businesses/organization.png' 
                alt='organization'/>
              Switch Organization
              <ChevronDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent 
          side='top'
          className="w-[--radix-popper-anchor-width]">
            <DropdownMenuItem>
              <span>Lendsqr</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Irorun</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Lendstar</span>
            </DropdownMenuItem>
            {/* <DropdownMenuItem>
              <span>Billing</span>
            </DropdownMenuItem>
              <DropdownMenuItem>
            <span onClick={signout}>Sign out</span>
              </DropdownMenuItem> */}
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
                      <Image 
                        width={16}
                        height={16}
                        src={item.image} 
                        alt={item.title}/>
                      {/* <item.icon /> */}
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      {/* </SidebarContent> */}
      
    <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>CUSTOMERS</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {customers.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <Image 
                        width={16}
                        height={16}
                        src={item.image} 
                        alt={item.title}/>
                      {/* <item.icon /> */}
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
                      <Image 
                        width={16}
                        height={16}
                        src={item.image} 
                        alt={item.title}/>
                      {/* <item.icon /> */}
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
                      <Image 
                        width={16}
                        height={16}
                        src={item.image} 
                        alt={item.title}/>
                      {/* <item.icon /> */}
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarContent className=''>
        <SidebarGroup>
          <SidebarGroupLabel>
            <hr className='h-2 w-[80%] mx-auto'/>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {logout.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a onClick={signout} 
                       href={item.url}>
                      <Image 
                        width={16}
                        height={16}
                        src={item.image} 
                        alt={item.title}/>
                      {/* <item.icon /> */}
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>

            <SidebarMenu>
             
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <span>v1.2.0</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          
            </SidebarMenu>

          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      

      
</Sidebar>

  )
}