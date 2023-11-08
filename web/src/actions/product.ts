'use server'
import prisma from '@/lib/prismadb'

export const searchProducts = async (query:string) => {
    const searchResults = await prisma.product.findMany({
        where: {
            name: {
                contains: query.toLowerCase()
            }
        },
        select: {
            name: true,
            id:true
        }
    })
    return searchResults
}