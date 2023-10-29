'use client'
import { products } from '@/app/page'
import ProductCard from '@/components/cards/product-card'
import React from 'react'

export default function page() {
  return (
      <div>
          <div className='grid grid-cols-4 gap-6 my-6 '>
              {
                  products?.map((product: any) => (
                      <ProductCard key={product.id} product={product} />
                  ))
              }
          </div>
    </div>
  )
}
