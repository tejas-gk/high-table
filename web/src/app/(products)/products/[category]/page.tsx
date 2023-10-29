"use client"
import { products } from '@/app/page'
import ProductCard from '@/components/cards/product-card'
import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Filter from '@/components/filter'
import { Separator } from '@/components/ui/separator'

export default function page() {
  return (
    <div>
      <div className='h-screen mt-6'>
        <h1 className='text-5xl font-bold'>Accesories</h1>
        <Sheet>
          <SheetTrigger>
            <Button variant='ghost' className='mt-4'>
              Filter
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[400px] sm:w-[540px]" side='left'>
            <SheetHeader>
              <SheetTitle>Filter</SheetTitle>
              <Separator />
              <SheetDescription>
                <Filter/>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>

        <div className='grid grid-cols-4 gap-6 my-6 '>
          {
            products?.map((product: any) => (
              <ProductCard key={product.id} product={product} />
            ))
          }
        </div>
      </div>
    </div>
  )
}
