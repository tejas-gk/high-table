import React from 'react'
import CategoryCard from '@/components/cards/category-card';
import ProductCard from '@/components/cards/product-card';
import Hero from '@/components/hero';
import Promo from '@/components/promo';
import SubNavbar from '@/components/sub-navbar';

async function getProducts() {
  const products = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`, { next: { revalidate: 3600 } })
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
  const products=await getProducts()
   return (
    <>
      {/* @ts-ignore */}
      {/* Hello {info?.user?.name} */}
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

      {/* popular */}
      <div className='h-screen mt-6'>
        <h1 className='text-5xl font-bold'>Popular</h1>
        <div className='grid grid-cols-4 gap-6 my-6 '>
          {
            products?.map((product: any) => (
              <ProductCard key={product.id} product={product} />
            ))
          }
        </div>
      </div>
    </>
  )
}

