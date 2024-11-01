'use client'
import React, { useState, createContext } from 'react'

export const EmailContext = createContext(null)

export default function UserContext({children}) {

    const [filterEmail, setFilterEmail] = useState("");
    const [togglePopup, setTogglePopUp] = useState(false)

    const emailContextValue = {filterEmail, setFilterEmail}

  return (
    <EmailContext.Provider value={{filterEmail, setFilterEmail, togglePopup, setTogglePopUp}}>
        {children}
    </EmailContext.Provider>
  )
}
