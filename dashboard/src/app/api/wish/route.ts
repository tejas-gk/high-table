import prisma from '@/lib/prismadb';

export const POST = async (request: Request) => {
    const body = await request.json();
    const { userId, productId } = body;
    console.log(body, 'body')
    const wish = await prisma.wishlist.create({
        data: {
            userId,
            productId
        }
    });
    console.log(wish, 'sdsa');
    return new Response(JSON.stringify(wish), { status: 200 });
}