'use server'
import prisma from '@/lib/prismadb'

export const searchProducts = async (query: string) => {
    console.log(query,'whyyyy')
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
    console.log(searchResults,query)
    return searchResults
}

export const getProducts = async () => { // we have api that does same
    const products = await prisma.product.findMany({
        include: {
            colors: true,
            sizes: true
        }
    })
    return products
}