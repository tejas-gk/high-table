import bcrypt from 'bcrypt';
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prismadb';
import { z } from 'zod';

export async function POST(request: Request) {
    const body = await request.json()
    const { email, username, name, password } = body
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await prisma.user.create({
        data: {
            email,
            username,
            name,
            hashedPassword,
        },
    });
    return new Response(JSON.stringify(user), {
        headers: { 'Content-Type': 'application/json' },
    });
}