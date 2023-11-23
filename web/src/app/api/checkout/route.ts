import bcrypt from 'bcrypt';
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prismadb';
import { z } from 'zod';
import { stripe } from '@/lib/stripe';
import { NextResponse } from 'next/server';
import Stripe from "stripe";

const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function OPTIONS() {
    return NextResponse.json({}, { headers: corsHeaders });
}

export async function POST(request: Request) {
    const body = await request.json()
    const items = body;
    console.log(items, 'items')

    const orderId = Math.floor(Math.random() * 1000000000).toString();

    const products = await prisma.product.findMany({
        where: {
            id: {
                in: items.items.map((item: any) => item.id)
            }
        }
    })

    console.log(products, 'products')

    const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [];

    products.forEach((product: any) => {
        line_items.push({
            price_data: {
                currency: 'inr',
                product_data: {
                    name: product.name,
                    images: [product.image],
                    description: product.description,
                },
                unit_amount: product.price * 100,
            },
            quantity: product.quantity,
            // custom: {
            //     size: product.size,
            // },
        })
    })

    const userId = '17f8c030-4dde-49f3-a46a-eb2ba5f6bb18'
    const order = await prisma.order.create({
        data: {
            id: orderId,  // Assigning the orderId
            userId: userId,  // Assuming you have a userId variable
            OrderItems: {
                create: items.items.map((item: any) => ({
                    product: {
                        connect: {
                            id: item.id  // Connecting the order item to the product
                        }
                    },
                    quantity: item.quantity,
                    amount: item.price * item.quantity
                }))
            }
        }
    })

    




    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        mode: 'payment',
        billing_address_collection: 'required',

        line_items: items.items.map((item: any) => ({
            price_data: {
                currency: 'inr',
                product_data: {
                    name: item.name,
                    images: [item.image],
                    description: item.description,
                },
                unit_amount: item.price * 100,
            },
            quantity: item.quantity,
            custom: {
                size: item.size,
            },
        })),
        success_url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/success`,
        cancel_url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}`,
        metadata: {
            orderId: orderId
        }
    })

    return NextResponse.json({ url: session.url }, {
        headers: corsHeaders
    });
}