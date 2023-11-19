import { z } from 'zod';

// Define the Color schema
const ColorSchema = z.object({
    id: z.string(),
    name: z.string(),
    inStock: z.boolean(),
    productId: z.string(),
});

// Define the Size schema
const SizeSchema = z.object({
    id: z.string(),
    name: z.string(),
    inStock: z.boolean(),
    productId: z.string(),
});

// Define the Product schema
export const ProductSchema = z.object({
    id: z.string(),
    name: z.string(),
    price: z.string(),
    description: z.string().nullable(),
    rating: z.number(),
    imageSrc: z.array(z.string()),
    inStock: z.boolean(),
    colors: z.array(ColorSchema),
    sizes: z.array(SizeSchema),
    Category: z.object({
        id: z.string(),
        title: z.string(),
        subtitle: z.string(),
        imageSrc: z.string(),
        isFeatured: z.boolean(),
    }).nullable(),
    categoryId: z.string().nullable(),
    status: z.string(),
    priority: z.string()
    // Cart: z.array(
    //     z.object({
    //         id: z.string(),
    //         userId: z.string(),
    //         productId: z.string(),
    //         quantity: z.number(),
    //     })
    // ),
    // OrderItems: z.array(
    //     z.object({
    //         id: z.string(),
    //         orderId: z.string(),
    //         productId: z.string(),
    //         quantity: z.number(),
    //         amount: z.number(),
    //         createdAt: z.string(),
    //         updatedAt: z.string(),
    //     })
    // ),
    // Wishlist: z.array(
    //     z.object({
    //         id: z.string(),
    //         userId: z.string(),
    //         productId: z.string(),
    //     })
    // ),
    // Review: z.array(
    //     z.object({
    //         id: z.string(),
    //         userId: z.string(),
    //         productId: z.string(),
    //         rating: z.number(),
    //         comment: z.string().nullable(),
    //         title: z.string(),
    //         createdAt: z.string(),
    //         updatedAt: z.string(),
    //     })
    // ),
});

export type Product = z.infer<typeof ProductSchema>

