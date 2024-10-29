import React from 'react'
import ProfileForm from './ProfileForm'
import Logo from './Logo'

export default function LoginForm() {
  return (
    <div className='grid grid-cols-2 max-w-full container'>
        <Logo/>
        <ProfileForm/>
    </div>
  )
}
