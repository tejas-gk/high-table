import { Footprints } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Category } from '@prisma/client'

type CategoryType = Pick<Category, 'id' | 'title' | 'imageSrc'>


export default function CategoryCard({ category }: { category: CategoryType }) {
  return (
    <div className='relative overflow-hidden rounded-md border group aspect-video'>
      <div className="absolute inset-0 z-10 bg-zinc-950/70 transition-colors group-hover:bg-zinc-950/75" />
      <Image src={category?.imageSrc}
        alt=''
        fill
        className='object-cover w-full h-full transition-all duration-500 ease-in-out transform group-hover:scale-110
        '
      />
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-white">
          {category?.title}
        </h1>
      </div>

      <div className="absolute inset-0 z-30 flex flex-col items-end justify-start pr-4 mt-2">
        <h1 className="text-medium text-white">50 products</h1>
      </div>

      <div className="absolute inset-0 z-30 flex flex-col items-start justify-start pl-4 mt-2">
        <h1 className="text-thin text-xs text-black bg-white rounded-md"><Footprints /></h1>
      </div>


    </div>
  )
}
