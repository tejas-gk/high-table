import React, { Suspense } from 'react'
import CategoryCard from '@/components/cards/category-card';
import ProductCard from '@/components/cards/product-card';
import Hero from '@/components/hero';
import Promo from '@/components/promo';
import SubNavbar from '@/components/sub-navbar';
import ShiftingCountdown from '@/components/countdowns/countdown-hero';
import ProductCardLoading from '@/components/loading/product-card-loading';
async function getProducts() {
  const products = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`, { cache: 'no-store' })
  const data = await products.json()
  return data
}



const categories = [
  {
    image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    name: 'Tops',
    products: 50,
  },
  {
    image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
    name: 'Shirts',
    products: 50,
  },
  {
    image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
    name: 'Pants',
    products: 50,
  },
  {
    image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg',
    name: 'Traditional',
    products: 50,
  },
]


export default async function Home() {
  const products = await getProducts()
  return (
    <>
      <SubNavbar />
      <Hero />

      {/* categories */}
      <div className='mt-6'>
        <h1 className='text-5xl font-bold'>Categories</h1>
        <div className='grid grid-cols-4 gap-4 mt-4 '>
          {
            categories?.map((category: any) => (
              <CategoryCard key={category.id} category={category} />
            ))
          }
        </div>
      </div>

      <Promo />

      <ShiftingCountdown />

      {/* popular */}
      <div className='h-screen mt-6'>
        <h1 className='text-5xl font-bold'>Popular</h1>
        <div className='grid grid-cols-4 gap-6 my-6 '>
          <Suspense fallback={Array.from({ length: 8 }).map((_, i) => (
            <ProductCardLoading key={i} />
          ))}>
          {
            products?.map((product: any) => (
              <ProductCard product={product} key={product.id} />
                ))
              }
          </Suspense>
        </div>
      </div>
    </>
  )
}

