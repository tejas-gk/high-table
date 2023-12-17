import React, { Suspense } from 'react'
import CategoryCard from '@/components/cards/category-card';
import ProductCard from '@/components/cards/product-card';
import Hero from '@/components/hero';
import Promo from '@/components/promo';
import SubNavbar from '@/components/sub-navbar';
import ShiftingCountdown from '@/components/countdowns/countdown-hero';
import ProductCardLoading from '@/components/loading/product-card-loading';
import { Category } from '@prisma/client';
import { CallOut } from '@/components/banners/alerts/call-out';
import ImageCarousel from '../components/image-carousel';
async function getProducts() {
  const products = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`, { cache: 'no-store' })
  console.log(products)
  const data = await products.json()
  console.log(data)
  return data
}



const categories = [
  {
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    title: 'Tops',
    products: 50,
  },
  {
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
    title: 'Shirts',
    products: 50,
  },
  {
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
    title: 'Pants',
    products: 50,
  },
  {
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg',
    title: 'Traditional',
    products: 50,
  },
]
type CategoryType = Pick<Category, 'id' | 'title' | 'imageSrc'>


export default async function Home() {
  return (
    <>
      <SubNavbar />
      <Hero />
      <CallOut
        title='Free shipping on orders over $100'
        description='Buy anything worth $100 or more and get free shipping anywhere in the world.'
      />
      {/* categories */}
      <div className='mt-6'>
        <h1 className='text-5xl font-bold'>Categories</h1>
        <div className='grid grid-cols-4 gap-4 mt-4 '>
          {
            categories.map((category: any, index: number) => (
              <CategoryCard key={index} category={category} />
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
            <ProductFeed />
          </Suspense>
        </div>
      </div>
    </>
  )
}

async function ProductFeed() {
  const products = await getProducts()
  console.log(products)
  return (
    <>
      {
        products?.map((product: any) => (
          <ProductCard product={product} key={product.id} />
        ))
      }
    </>
  )
}

