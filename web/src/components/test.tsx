import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"

export default function test() {
    return (
        <div>
            <div className="flex items-center space-x-4">
                <div className="space-y-2">
                    <div className='relative overflow-hidden rounded-t-md aspect-square'>
                        <Skeleton
                            className='w-full h-full' />
                    </div>
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                </div>

                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">

                    <div className="aspect-h-2 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-900 sm:col-span-4 lg:col-span-5">
                        <Skeleton className="w-full h-full"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
