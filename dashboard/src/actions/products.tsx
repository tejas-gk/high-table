'use server'
import prisma from '@/lib/prismadb'

export const deleteProduct= async (productId: string)=> {
  const product = await prisma.product.delete({
    where: {
      id: productId,
    },
  })
  return product
}

export const getAllCategories = async () => {
  const categories = await prisma.category.findMany()
  return categories
}