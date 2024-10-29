'use client'
import React from 'react'
import { signOut } from 'next-auth/react'

export default function page() {
    const signout = () => {
        signOut();
    }
  return (
    <div className='p-8'>
        <h1 className='text-5xl'>Dashboard Page</h1>
        <button onClick={signout}>Logout</button>
    </div>
  )
}
