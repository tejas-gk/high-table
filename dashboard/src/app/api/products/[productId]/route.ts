import prisma from '@/lib/prismadb';
export const GET = async (request: Request) => {
    try {
        const  productId  = request.url.slice(request.url.lastIndexOf('/') + 1);
        console.log(productId);
        const product = await prisma.product.findUnique({
            where: {
                id: productId
            },
            include: {
                colors: true,
                sizes: true
            }
        });
        console.log(product,'blah blah blah');
        return new Response(JSON.stringify(product), { status: 200 });
    } catch (err) {
        console.log(err);
        console.log(request.url.slice(request.url.lastIndexOf('/') + 1))
    }
}

export const DELETE = async (request: Request) => {
    try {
        const productId = request.url.slice(request.url.lastIndexOf('/') + 1);
        const product = await prisma.product.findUnique({
            where: {
                id: productId,
            },
            include: {
                colors: true,
                sizes: true,
            },
        });

        if (!product) {
            return new Response('Product not found', { status: 404 });
        }

        const colorIds = product.colors.map(color => color.id);
        const sizeIds = product.sizes.map(size => size.id);

        await prisma.color.deleteMany({
            where: {
                id: { in: colorIds },
            },
        });

        await prisma.size.deleteMany({
            where: {
                id: { in: sizeIds },
            },
        });

        const deletedProduct = await prisma.product.delete({
            where: {
                id: productId,
            },
        });
        return new Response(JSON.stringify(deletedProduct), { status: 200 });
    } catch (err) {
        console.error(err);
        return new Response('An error occurred', { status: 500 });
    }
}