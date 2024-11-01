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
    'MONTHLY INCOME': [200000, 400000],//`&#8358;200,000.00 - &#8358;400,000.00`,
    'LOAN REPAYMENT': [40000]//`&#8358;40,000.00`,
}

const userSocialDetails = {
    'TWITTER': "@grace_effiom",
    'FACEBOOK': 'Grace Effiom',
    'INSTAGRAM': '@grace_effiom',
}

const userGuarantorDetails = {
    'FULL NAME': "Debby Ogana",
    'PHONE NUMBER': '07060780922',
    'EMAIL ADDRESS': 'debby@gmail.com',
    'RELATIONSHIP': 'Sister',
}



export default function PersonalInfo() {
    const personalDetails = Object.entries(userPersonalDetails);
    const educationDetails = Object.entries(userEducationDetails);
    const socialDetails = Object.entries(userSocialDetails);
    const guarantorDetails = Object.entries(userGuarantorDetails);
  return (
    <div className='flex flex-col gap-y-0 shadow-xl rounded-md'>

        {/* /USER PERSONAL DETAILS SECTION */}
        <div className='flex flex-col gap-4 shadow-none p-4 border border-b-none'>
            <h1 className='text-md leading-[18.77px] font-medium px-4 mt-4'>Personal Information</h1>
            <ul className='gap-x-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5'>
                {personalDetails.map((item, index)=>(<DetailsCard key={index} title={item[0]} description={item[1]}/>))}
            </ul>
        </div>

        <hr className='border-2 bg-background w-[80%] mx-auto h-1'/>

        {/* /EMPLOYMENT AND EDUCATION DETAILS SECTION */}
        <div className='flex flex-col gap-4 p-4 shadow-none border border-b-0'>
            <h1 className='text-md leading-[18.77px] font-medium px-4 mt-4'>Education and Employment</h1>
            <ul className='gap-x-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                {educationDetails.map((item, index)=>(<DetailsCard key={index} title={item[0]} description={item[1]}/>))}
            </ul>
        </div>

        <hr className='border-2 bg-background w-[80%] mx-auto h-1'/>

        {/* /SOCIAL DETAILS SECTION */}
        <div className='flex flex-col gap-4 p-4 shadow-none border border-b-0'>
            <h1 className='text-md leading-[18.77px] font-medium px-4 mt-4'>Socials</h1>
            <ul className='gap-x-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                {socialDetails.map((item, index)=>(<DetailsCard key={index} title={item[0]} description={item[1]}/>))}
            </ul>
        </div>

        <hr className='border-2 bg-background w-[80%] mx-auto h-1'/>

        {/* /GUARANTOR DETAILS SECTION */}
        <div className='flex flex-col gap-4 p-4 shadow-none border border-b-0'>
            <h1 className='text-md leading-[18.77px] font-medium px-4 mt-4'>Guarantor</h1>
            <ul className='gap-x-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                {guarantorDetails.map((item, index)=>(<DetailsCard key={index} title={item[0]} description={item[1]}/>))}
            </ul>
        </div>

        <hr className='border-2 bg-background w-[80%] mx-auto h-1'/>

        {/* /GUARANTOR DETAILS SECTION */}
        <div className='flex flex-col gap-4 p-4 shadow-none border border-b-0'>
            <h1 className='text-md leading-[18.77px] font-medium px-4 mt-4'></h1>
            <ul className='gap-x-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                {guarantorDetails.map((item, index)=>(<DetailsCard key={index} title={item[0]} description={item[1]}/>))}
            </ul>
        </div>
    </div>
  )
}
