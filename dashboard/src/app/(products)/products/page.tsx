import { DataTable } from '@/app/(products)/products/data-table'
import React from 'react'
import prisma from '@/lib/prismadb'

const getAllProducts = async () => {
  console.log('mikasa')
  const category = await prisma.product.findMany();
  console.log(category)
  return category
}


export default async function page() {
  const allProducts = await getAllProducts()
  console.log(allProducts)
  return (
    <div className="container py-10 mx-auto">
      <DataTable data={allProducts} />
    </div>
  )
}
