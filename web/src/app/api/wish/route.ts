import bcrypt from 'bcrypt';
import prisma from '@/lib/prismadb';
import { z } from 'zod';

export async function POST(request: Request) {
    console.log('request', request.json())
    try {
        const body = await request.json();
        const { productId, userId } = body;

        return new Response(JSON.stringify({ error: 'valid JSON format' }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Invalid JSON format' }), { status: 400 });
    }
}
