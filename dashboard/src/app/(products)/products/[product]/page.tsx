import React from 'react'
import IndividualProduct from './individual-product'

const getProduct = async (productId: String) => {
  'use server'
  try {
    const response = await fetch(`http://localhost:3001/api/products/${productId}`, { next: { revalidate: 10 } })
    return response.json()
  } catch (err) {
    console.log(err)
  }
}

export default async function Page({
  params
}:
  {
    params: {
      product: String
    }
  }
) {
  const product = await getProduct(params.product)
  console.log(product)
  return (
    <div>
      <IndividualProduct product={product} />
    </div>
  )
}
