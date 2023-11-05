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
    try {

        const userId = '5a30807c-5402-4aa7-ab9f-f1e26b6827ba'
        
        const user = await prisma.user.findUnique({
            where: {
                id: userId
            }
        })
        let orderId= ''
        try {
            const order = await prisma.order.create({
                data: {
                    user: {
                        connect: {
                            id: userId
                        }
                    },
                    OrderItems: {
                        create: items.items.map((item: any) => ({
                            productId: item.id,
                            quantity: item.quantity,
                        }))
                    }
                }
            })
            console.log(order, 'order')
            orderId = order.id
        } catch (err) {
            console.log(err, 'err')
        }


        

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            billing_address_collection: 'required',

            line_items: items.items.map((item:any) => ({
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
            success_url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/checkout/success`,
            cancel_url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}`,
            metadata: {
               orderId: orderId
           }
        })

        return NextResponse.json({ url: session.url }, {
            headers: corsHeaders
        });
    } catch (error:any) {
        console.log(error)
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
        }
    }
}