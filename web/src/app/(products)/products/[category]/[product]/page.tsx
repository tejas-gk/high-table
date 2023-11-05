import IndividualProduct from './individual-product'

const getProduct = async (productId:String) => {
  'use server'
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products/${productId}`, {
      method: 'GET',
    })
    return response.json()
  }catch(err){
    console.log(err)
  }
}

export default async function Page({ params }: any) {
  console.log(params.product,'hehhehehe')
  const product = await getProduct(params.product)
  // console.log(product.imageSrc)
  return (
    <div>
      <IndividualProduct product={product} />
    </div>
  )
}
