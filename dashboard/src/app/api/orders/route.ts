import prisma from '@/lib/prismadb'

export const GET = async (request: Request) => {
    const order = await prisma.orderItems.findMany({
        include: {
            product: true
        }
    });

    console.log(order)

    return new Response(JSON.stringify(order), { status: 200 });
}