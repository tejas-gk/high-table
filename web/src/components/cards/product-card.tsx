'use client'
import React, { useState, Suspense } from 'react'
import { Button } from '../ui/button'
import useCartStore from '@/store/cart-store'
import Link from 'next/link'
import Image from 'next/image'

export default function ProductCard({
  product
}: ) {
  const { addToCart, itemAlreadyInCart, removeFromCart } = useCartStore()
  const [isLoading, setIsLoading] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsLoading(true)
    addToCart(product)
    setIsLoading(false)
  }


  const handleIncrement = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLoading(true);
    addToCart(product);
    setIsLoading(false);
  }

  const handleDecrement = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLoading(true);
    removeFromCart(product);
    setIsLoading(false);
  }

  return (
    <>
      <div className='border group pb-4 rounded-md'>
        <Link href={`/products/category/${product?.id}`} passHref>
            <div className='relative overflow-hidden rounded-t-md aspect-square'>
              <Image src={product?.imageSrc[0]}
                alt={product.name}
                width={300}
                height={300}
                onError={(e) => {
                  // @ts-ignore
                  e.target.src = 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg';
                }}
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
              {itemAlreadyInCart(product) ? (
                <Button className="mt-2 flex justify-between w-full" variant='secondary'>
                  <span onClick={handleDecrement}>-</span>
                  <span>{useCartStore.getState().items.find(item => item.id === product.id)?.quantity}</span>
                  <span onClick={handleIncrement}>+</span>
                </Button>
              ) : (
                <Button className='mt-4 w-full' onClick={handleAddToCart}>
                  {isLoading ? 'Adding...' : 'Add to Cart'}
                </Button>
              )}
            </div>
        </Link >
      </div >
    </>
  )
}
