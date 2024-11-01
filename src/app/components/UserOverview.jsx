import React from 'react';
import { cn } from '@/lib/utils';
import { Users2Icon, UsersRoundIcon, SaveIcon, Database } from 'lucide-react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Image from 'next/image';

const overviewData = [
    { image: '/imgs/icon_users.png', icon: Users2Icon, title: 'USERS', value: '2,453', bgColor: '#fce8ff', imgColor: '#f29eff' },
    { image: '/imgs/icon_activeusers.png', icon: UsersRoundIcon, title: 'ACTIVE USERS', value: '2,453', bgColor: '#e8f9ff', imgColor: '#96d4ff' },
    { image: '/imgs/icon_loans.png', icon: SaveIcon, title: 'USERS WITH LOANS', value: '12,453', bgColor: '#fff8e8', imgColor: '#ffd700' },
    { image: '/imgs/icon_savings.png', icon: Database, title: 'USERS WITH SAVINGS', value: '102,453', bgColor: '#e8ffe8', imgColor: '#4caf50' },
];

export default function UserOverview() {
    return (
        <div className={cn("p-2 gap-4 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4")}>
            {overviewData.map((data, index) => {
                // const IconComponent = data.icon;
                return (
                    <Card className="shadow-md" key={index}>
                        <CardHeader>
                            <Image 
                                className="h-[40px] w-[40px] p-1 rounded-full" 
                                src={data.image} alt={`${data.image} image`} width={40} height={40} />

                            {/* <IconComponent 
                                className="h-[40px] w-[40px] p-1 rounded-full" 
                                style={{
                                    backgroundColor: data.bgColor || "#f0f0f0", // Fallback background color
                                    fill: data.imgColor || "#000" // Fallback fill color
                                }} 
                            /> */}
                            <CardDescription className='min-w-[47px] min-h-[16px]'>{data.title}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className='min-w-[65px] min-h-[28px] text-[rgba(33, 63, 125, 1)] font-bold text-[25px]'>{data.value}</p>
                        </CardContent>
                        <CardFooter>
                            {/* <p>Card Footer</p> */}
                        </CardFooter>
                    </Card>
                );
            })}
        </div>
    );
}
