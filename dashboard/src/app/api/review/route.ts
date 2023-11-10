import prisma from '@/lib/prismadb';

export const POST = async (request: Request) => {
    console.log(request.json())
    const body = await request.json();
    const { stars,title,comment,productId,userId } = body;

   

    const product = await prisma.review.create({
        data: {
            rating:stars,
            title,
            comment,
            productId,
            userId,
        }
    });
    console.log(product, 'sdsa');
    return new Response(JSON.stringify(product), { status: 200 });
}

export const PATCH = async (request: Request) => {
    const body = await request.json();
    const { id, name, price, rating, images, colors, sizes } = body;

    const formattedColors = colors.map((color: any) => ({
        name: color
    }));

    const formattedSizes = sizes.map((size: any) => ({
        name: size
    }));

    const product = await prisma.product.update({
        where: {
            id
        },
        data: {
            name,
            price,
            rating,
            imageSrc: {
                set: images
            },
            colors: { createMany: { data: formattedColors } },
            sizes: { createMany: { data: formattedSizes } },
        }
    });

    return new Response(JSON.stringify(product), { status: 200 });
}

export const GET = async (request: Request) => {
    const product = await prisma.product.findMany({
        include: {
            colors: true,
            sizes: true
        }
    });

    console.log(product)

    return new Response(JSON.stringify(product), { status: 200 });
}
