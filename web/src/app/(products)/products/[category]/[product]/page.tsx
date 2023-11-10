import IndividualProduct from './individual-product'

const getProduct = async (productId:String) => {
  'use server'
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products/${productId}`, { cache: 'no-store' })
  await new Promise(resolve => setTimeout(resolve, 2000))
    return response.json()

}

export default async function Page({ params }: any) {
  console.log(params.product,'hehhehehe')
  const product = await getProduct(params.product)
  return (
    <div>
      <IndividualProduct product={product} />
    </div>
  )
}
