import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"
export default function ProductCardLoading() {
    return (
            <div className="flex items-center space-x-4">
                <div className="space-y-2">
                    <div className='relative overflow-hidden rounded-t-md aspect-square'>
                        <Skeleton
                            className='w-full h-full' />
                    </div>
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                </div>
            </div>
    )
}
