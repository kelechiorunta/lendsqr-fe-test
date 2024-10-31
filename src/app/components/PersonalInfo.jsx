import React from 'react'
import DetailsCard from './DetailsCard';

const userPersonalDetails = {
    'FULL NAME': "Grace Effiom",
    'PHONE NUMBER': '07060780922',
    'EMAIL ADDRESS': 'grace@gmail.com',
    'BVN': '07060780922',
    'GENDER': 'Female',
    'MARITAL STATUS': 'Single',
    'CHILDREN': 'None',
    'TYPE OF RESIDENCE': "Parent's Apartment",
}

const userEducationDetails = {
    'LEVEL OF EDUCATION': "B.Sc",
    'EMPLOYMENT STATUS': 'Employed',
    'SECTOR OF EMPLOYMENT': 'FinTech',
    'DURATION OF EMPLOYMENT': '2 years',
    'OFFICE EMAIL': 'grace@lendsqr.com',
    'MONTHLY INCOME': `&#8358;200,000.00 - &#8358;400,000.00`,
    'LOAN REPAYMENT': `&#8358;40,000.00`,
}

export default function PersonalInfo() {
    const personalDetails = Object.entries(userPersonalDetails);
    const educationDetails = Object.entries(userEducationDetails);
  return (
    <div className='flex flex-col gap-y-0 shadow-xl border'>

        {/* /USER PERSONAL DETAILS SECTION */}
        <div className='flex flex-col gap-4 shadow-none p-4 border border-b-none'>
            <h1 className='text-2xl px-4'>Personal Information</h1>
            <ul className='grid grid-cols-5 gap-x-2'>
                {personalDetails.map((item, index)=>(<DetailsCard key={index} title={item[0]} description={item[1]}/>))}
            </ul>
        </div>

        <hr className='border-2 bg-background w-[80%] mx-auto h-1'/>

        {/* /EMPLOYMENT AND EDUCATION DETAILS SECTION */}
        <div className='flex flex-col gap-4 shadow-xl p-4 border'>
            <h1 className='text-2xl px-4'>Education and Employment</h1>
            <ul className='grid grid-cols-4 gap-x-2'>
                {educationDetails.map((item, index)=>(<DetailsCard key={index} title={item[0]} description={item[1]}/>))}
            </ul>
        </div>
    </div>
  )
}
