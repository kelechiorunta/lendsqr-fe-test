import React from 'react'
import ProfileForm from './ProfileForm'
import Logo from './Logo'

export default function LoginForm() {
  return (
    <div className='grid grid-cols-1 gap-0 max-w-full container md:grid-cols-1 lg:grid-cols-2'>
        <Logo/>
        <ProfileForm/>
    </div>
  )
}
