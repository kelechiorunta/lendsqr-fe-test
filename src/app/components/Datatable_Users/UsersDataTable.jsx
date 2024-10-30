'use client'

import React, { useContext } from 'react'
import { columns } from "./UsersColumns"
import { UsersTable } from "./UsersTable"
import { EmailContext } from "../UserContext"

function getData(){
  // Fetch data from your API here.
  return [
    {
      organization: "Lendsqr",
      username: 'Adedeji',
      email: "adedeji@lendsqr.com",
      phone: "08078903721",
      date_joined:"May 15, 2020 10:00 AM",
      status:"Inactive", 
    },
    {
      organization: "Irorun",
      username: 'Debby Onaga',
      email: "debby2@irorun.com",
      phone: "08160780928",
      date_joined:"Apr 30, 2020 10:00 AM",
      status:"Pending"
    },
    {
      organization: "Lendstar",
      username: 'Grace Effiom',
      email: "grace@lendstar.com",
      phone: "07060780922",
      date_joined:"Apr 30, 2020 10:00 AM",
      status:"Blacklisted"
    },
    {
      organization: "Lendsqr",
      username: 'Tosin Dokunmu',
      email: "tosin@lendsqr.com",
      phone: "07003309226",
      date_joined:"Apr 10, 2020 10:00 AM",
      status:"Pending"
    },
    {
      organization: "Lendstar",
      username: 'Grace Effiom',
      email: "grace@lendstar.com",
      phone: "07060780922",
      date_joined:"Apr 30, 2020 10:00 AM",
      status:"Active"
    },
    {
      organization: "Lendsqr",
      username: 'Tosin Dokunmu',
      email: "tosin@lendsqr.com",
      phone: "07003309226",
      date_joined:"Apr 10, 2020 10:00 AM",
      status:"Active"
    },
    {
      organization: "Lendstar",
      username: 'Grace Effiom',
      email: "grace@lendstar.com",
      phone: "07060780922",
      date_joined:"Apr 30, 2020 10:00 AM",
      status:"Blacklisted"
    },
    {
      organization: "Lendsqr",
      username: 'Tosin Dokunmu',
      email: "tosin@lendsqr.com",
      phone: "07003309226",
      date_joined:"Apr 10, 2020 10:00 AM",
      status:"Inactive"
    },
    {
      organization: "Lendstar",
      username: 'Grace Effiom',
      email: "grace@lendstar.com",
      phone: "07060780922",
      date_joined:"Apr 30, 2020 10:00 AM",
      status:"Inactive"
    },
    // ...
  ]
}

export default function UsersDataTable() {
  const userEmailContext = useContext(EmailContext);
  const { filterEmail, setFilterEmail } = userEmailContext;
  const data = getData()

  return (
    <div className="container mx-auto py-10">
      <UsersTable columns={columns} data={data} filterEmail={filterEmail} 
      />
    </div>
  )
}
