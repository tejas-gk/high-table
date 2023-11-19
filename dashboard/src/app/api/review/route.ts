import prisma from '@/lib/prismadb';

export const POST = async (request: Request) => {
    const body = await request.json();
    const { rating, title, comment, productId, userId } = body;
    
    console.log(body, 'body');
    try {
        const review = await prisma.review.create({
            data: {
                rating: parseFloat(rating),
                title,
                comment,
                productId,
                userId
            }
        });

        return new Response(JSON.stringify(review), { status: 200 });
    } catch (err) {
        console.log(err, 'err');
        return new Response(JSON.stringify(err), { status: 500 });
    }
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
    const reviews = await prisma.review.findMany({
        include: {
            user: true,
            product: true,
        }
    });
    return new Response(JSON.stringify(reviews), { status: 200 });
}
