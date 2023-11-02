'use server'
import prisma from '@/lib/prismadb'

const deleteProduct= async (productId: string)=> {
  const product = await prisma.product.delete({
    where: {
      id: productId,
    },
  })
  return product
}

export default deleteProduct