'use client'
import React, { useState, Suspense } from 'react'
import { Button } from '../ui/button'
import useCartStore from '@/store/cart-store'
import Link from 'next/link'
import { motion, AnimatePresence } from "framer-motion";
import ImageCarousel from '../image-carousel'
import { Heart } from 'lucide-react';

export default function ProductCard({
  product
}: any) {
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
      <div className='border group pb-4 rounded-md relative'>
        <div className='absolute top-2 right-2 z-10'>
          <Heart size={24} color='#ff0066' />
        </div>
        <Link href={`/products/category/${product?.id}`} passHref>
          <div className='relative overflow-hidden rounded-t-md aspect-square'>
            <ImageCarousel images={product?.imageSrc} />
          </div>
          <div className='px-2'>
            <div className='flex justify-between'>
              <div>
                <h3 className='mt-2 text-lg font-semibold text-gray-500'>
                  {product?.name}
                </h3>
                <p className='mt-1 text-sm text-gray-400'>
                  ₹ {product?.price}
                </p>
              </div>
              <div className='absolute top-2 right-2 z-10'>
                <Heart size={24} color='#ff0066' />
              </div>
            </div>
            {itemAlreadyInCart(product) ? (
              <AnimatePresence>
                <Button className="mt-2 flex justify-between w-full" variant='secondary'>
                  <span onClick={handleDecrement}>-</span>
                  {/* <span>{useCartStore.getState().items.find(item => item.id === product.id)?.quantity}</span> */}
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    exit={{ y: "-100%" }}
                    transition={{ ease: "backIn", duration: 0.75 }}
                  >
                    {useCartStore.getState().items.find(item => item.id === product.id)?.quantity}
                  </motion.span>
                  <span onClick={handleIncrement}>+</span>
                </Button>
              </AnimatePresence>
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
