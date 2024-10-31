import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

export default function DetailsCard({title, description}) {

    const formatToNaira = (amount) => {
        return `${new Intl.NumberFormat('en-NG', {
            style: 'currency',
            currency: 'NGN',
            minimumFractionDigits: 2
        }).format(amount).replace('NGN', '').trim()}`;
    };
  return (
    <Card className='border-none border-0 shadow-none'>
        <CardHeader className='flex flex-col gap-2 border-none border-0'>
            <CardTitle className='text-md'>{title}</CardTitle>
            <CardDescription>
                {title === 'MONTHLY INCOME' && Array.isArray(description)
                ? `${formatToNaira(description[0])} - ${formatToNaira(description[1])}`
                : title === 'LOAN REPAYMENT'
                ? formatToNaira(description)
                : description}
            </CardDescription>
        </CardHeader>
        {/* <CardContent>
            <p>Card Content</p>
        </CardContent>
        <CardFooter>
            <p>Card Footer</p>
        </CardFooter> */}
    </Card>
  )
}