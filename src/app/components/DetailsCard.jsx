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
  return (
    <Card className='border-none'>
        <CardHeader className='flex flex-col gap-2'>
            <CardTitle className='text-md'>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
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