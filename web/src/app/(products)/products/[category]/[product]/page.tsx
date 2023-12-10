import IndividualProduct from './individual-product'

const getProduct = async (productId:String) => {
  'use server'
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products/${productId}`, { cache: 'no-store' })
    return response.json()
}

export default async function Page({ params }: { params: { product: string } }) {
  const product = await getProduct(params.product)
  return (
      <IndividualProduct product={product} />
  )
}
