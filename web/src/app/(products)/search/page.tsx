import ProductCard from '@/components/cards/product-card'
import React from 'react'

async function getProducts() {
    const products = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`, { cache: 'no-store' })
    const data = await products.json()
    return data
}

export default async function page() {
    const products=getProducts()
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
