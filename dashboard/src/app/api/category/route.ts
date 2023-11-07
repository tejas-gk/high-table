import prisma from '@/lib/prismadb';

export const POST = async (request: Request) => {
    const body = await request.json();
    const { title, subtitle, images } = body;
    console.log(body, 'sdsa');

    const category = await prisma.category.create({
        data: {
            title,
            subtitle,
            imageSrc: images[0],
        }
    });
    console.log(category, 'sdsa');
    return new Response(JSON.stringify(category), { status: 200 });
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
    const category = await prisma.category.findMany();


    return new Response(JSON.stringify(category), { status: 200 });
}
