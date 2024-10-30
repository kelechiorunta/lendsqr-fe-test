'use client'
import React from 'react'
import { signOut } from 'next-auth/react'
import UserOverview from '../components/UserOverview';
import UsersDataTable from '../components/Datatable_Users/UsersDataTable';

export default function page() {
    const signout = () => {
        signOut();
    }
  return (
    // bg-[#fbfbfb]
    <div className='p-8  max-w-full container '>
        <h1 className='text-3xl px-2'>USERS</h1>
        <UserOverview/>
        <UsersDataTable/>
        <button onClick={signout}>Logout</button>
    </div>
  )
}
