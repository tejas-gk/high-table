import { z } from 'zod';
export const ProductSchema = z.object({
    id: z.string(),
    name: z.string().nullable(),
    username: z.string().nullable(),
    bio: z.string().nullable(),
    email: z.string().nullable(),
    emailVerified: z.string().nullable(),
    image: z.string().nullable(),
    coverImage: z.string().nullable(),
    profileImage: z.string().nullable(),
    hashedPassword: z.string().nullable(),
    location: z.string().nullable(),
    points: z.number().default(0),
    role: z.string().default("USER"),
    createdAt: z.date(),
    updatedAt: z.date(),
});

export type Product = z.infer<typeof ProductSchema>

