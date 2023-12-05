import { z } from 'zod';
export const ProductSchema = z.object({
    id: z.string(),
    isPaid: z.boolean().default(false),
    phone: z.string().default(""),
    address: z.string().default(""),
    status: z.string().default("NOT_SHIPPED"),
    user: z.object({
        name: z.string(),
        email: z.string(),
    }),
    OrderItems: z.array(z.object({
        id: z.string(),
        orderId: z.string(),
        productId: z.string(),
        quantity: z.number().default(1),
        amount: z.number(),
        createdAt: z.date(),
        updatedAt: z.date(),
    })),
    createdAt: z.date(),
    updatedAt: z.date(),
});

export type Product = z.infer<typeof ProductSchema>

// model Order {
//   id         String @id @default (uuid()) @map("_id")
//   userId     String
//   user       User @relation(fields: [userId], references: [id])
//   createdAt  DateTime @default (now())
//   updatedAt  DateTime @updatedAt
//   OrderItems OrderItem[]
//   isPaid     Boolean @default (false)
//   phone      String @default ("")
//   address    String @default ("")
//   status     OrderStatus @default (NOT_SHIPPED)
// }

// model OrderItem {
//   id        String @id @default (uuid()) @map("_id")
//   orderId   String
//   productId String
//   quantity  Int @default (1)
//   amount    Float
//   order     Order @relation(fields: [orderId], references: [id])
//   product   Product @relation(fields: [productId], references: [id])
//   createdAt DateTime @default (now())
//   updatedAt DateTime @updatedAt
// }