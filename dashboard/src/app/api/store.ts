import prisma from '@/lib/prismadb';


export const POST = async (request: Request) => {
    const body = await request.json();
    const { storename } = body;
    const store = await prisma.store.create({
        data: {
            name: storename,
            imageSrc: ''
        }
    });
    return new Response(JSON.stringify(store), { status: 200 });
}