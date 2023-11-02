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


        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            billing_address_collection: 'required',
            shipping_address_collection: {
                allowed_countries: ['IN'],
            },

            line_items: items.map((item) => ({
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
                }
            })),
            success_url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/checkout/success`,
            cancel_url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}`,
        })

        return NextResponse.json({ url: session.url }, {
            headers: corsHeaders
        });
    } catch (error) {
        console.log(error)
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
        }
    }
}