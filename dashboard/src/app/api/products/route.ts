import prisma from '@/lib/prismadb';

export const POST = async (request: Request) => {
    const body = await request.json();
    const { name, price, rating, images, colors, sizes } = body;
    const href = 'hello';

    const formattedColors = colors.map((color: any) => ({
        name: color
    }));

    const product = await prisma.product.create({
        data: {
            name,
            price,
            rating,
            href,
            imageSrc: {
                set: images
            },
            colors: { createMany: { data: formattedColors } },
        }
    });

    return new Response(JSON.stringify(product), { status: 200 });
}
