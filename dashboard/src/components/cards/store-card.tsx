import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'
import { Badge } from "@/components/ui/badge"

export default function StoreCard() {
    return (
        <Card className='group/card bg-background hover:bg-card-hovered relative overflow-hidden duration-300 sm:min-w-[300px] xl:min-w-[333px]'>
            <CardContent className='p-0'>
                <Image src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    width={100} height={100}
                    alt="Store Image"
                    className='rounded-md object-cover w-full h-full'
                />
            </CardContent>
            <CardHeader className="relative flex flex-col items-start gap-1 py-5">
                <CardTitle className=" w-full truncate text-2xl duration-300 flex justify-between">
                    <span>Store Name</span>
                    <Badge className='bg-green-500 text-green-800 text-xs hover:bg-green-600 hover:text-green-900 duration-300
                    '
                    >Badge</Badge>
                </CardTitle>
                <CardDescription>Store Description</CardDescription>
            </CardHeader>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
        </Card>
    )
}
