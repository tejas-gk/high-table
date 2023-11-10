import prisma from '@/lib/prismadb';

export const POST = async (request: Request) => {
    const body = await request.json();
    const { name, price, images, colors, sizes,description } = body;

    const formattedColors = colors.map((color: any) => ({
        name: color
    }));

    const formattedSizes = sizes.map((size: any) => ({
        name: size
    }));

    const product = await prisma.product.create({
        data: {
            name,
            price,
            description,
            categoryId:'dfce2491-dad1-4ac3-b3fa-6bafa233222b',
            imageSrc: {
                set: images
            },
            colors: { createMany: { data: formattedColors } },
            sizes: { createMany: { data: formattedSizes } },
        }
    });
    console.log(product,'sdsa');
    return new Response(JSON.stringify(product), { status: 200 });
}

export const PATCH = async (request: Request) => {
    const body = await request.json();
    const { id, name, price, rating, images, colors, sizes, description } = body;

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
            description,
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
