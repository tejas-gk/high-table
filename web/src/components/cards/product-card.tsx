'use client'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import  useCartStore  from '@/store/cart-store'

export default function ProductCard({
  product
}:any) {
  // const [addTocart, setAddToCart] = useState(false)
  const { addToCart } = useCartStore()
  const [isLoading, setIsLoading] = useState(false);

  const handleAddToCart = (e: any) => {
    e.preventDefault()
    setIsLoading(true)
    addToCart(product)
    setIsLoading(false)
  }
  return (
    <>
      <div className='border group pb-4 rounded-md'>
        <div className='relative overflow-hidden rounded-t-md aspect-square
      '>
          {/* <div className="absolute inset-0 z-10 bg-zinc-950/70 transition-colors group-hover:bg-zinc-950/75" /> */}
          <img src={product?.image}
            alt=''
            className='object-cover w-full h-full transition-all duration-500 ease-in-out transform group-hover:scale-110
          '
          />
        </div>
        <div className='px-2'>
          <h3 className='mt-2 text-lg font-semibold text-gray-500'>
            {product?.name}
          </h3>
          <p className='mt-1 text-sm text-gray-400'>
           ₹ {product?.price}
          </p>
          <Button className='mt-4 w-full'
            onClick={handleAddToCart}
          >
            add to cart
          </Button>
        </div>
      </div>
    </>
  )
}
