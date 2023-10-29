'use client'
import React from 'react'
import Filter from '@/components/filter'
import { Separator } from '@/components/ui/separator'

export default function layout({ children }: {
    children: React.ReactNode
}) {
  return (
      <div className='flex gap-4'>
          <div className='w-1/4 px-4'>
                <div className='p-4 bg-white rounded-lg'>
                    <h2 className='text-lg font-semibold'>Filters</h2>
              </div>
              <Separator />
              <Filter />
          </div>
            <div className='ml-4 w-3/4'>
              {children}
          </div>
          
    </div>
  )
}
