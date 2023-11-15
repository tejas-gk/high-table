import prisma from '@/lib/prismadb';

export const POST = async (request: Request) => {
    const body = await request.json();
    const { name, price, images, colors, sizes, description, category } = body;

    const formattedColors = colors.map((color: any) => ({
        name: color
    }));

    const formattedSizes = sizes.map((size: any) => ({
        name: size
    }));
    const productCode = `${name.substr(0, 3).toUpperCase()}_${Date.now()}`;
    const product = await prisma.product.create({
        data: {
            name,
            price,
            description,
            categoryId: category,
            // Category: { connect: { id: category } },
            imageSrc: {
                set: images
            },
            colors: { createMany: { data: formattedColors } },
            sizes: { createMany: { data: formattedSizes } },
            // productCode
        }
    });
    console.log(product, 'sdsa');
    return new Response(JSON.stringify(product), { status: 200 });
}

export const PUT = async (request: Request) => {
    const body = await request.json();
    const { name, price, rating, imageSrc, colors, sizes, description } = body.values;
    const { id } = body;
    console.log(body, 'body')
    const formattedColors = colors ? colors.map((color: any) => ({ name: color })) : [];
    const formattedSizes = sizes ? sizes.map((size: any) => ({ name: size })) : [];


    const product = await prisma.product.update({
        where: {
            id
        },
        data: {
            name,
            price,
            description,
            rating,
            // imageSrc,
            // colors: { createMany: { data: formattedColors } },
            // sizes: { createMany: { data: formattedSizes } },
        }
    });
    console.log(product, 'sdsa');
    return new Response(JSON.stringify(product), { status: 200 });
}

export const GET = async (request: Request) => {
    const product = await prisma.product.findMany({
        include: {
            colors: true,
            sizes: true,
            Category: true,
        }
    });

    console.log(product)

    return new Response(JSON.stringify(product), { status: 200 });
}
