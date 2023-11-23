import bcrypt from 'bcrypt';
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prismadb';
import { z } from 'zod';
import { Resend } from 'resend';
import { EmailTemplate } from '@/components/emails/welcome-email';
import { NextResponse } from 'next/server';
import { KoalaWelcomeEmail } from '@/email/welcome-email';
const resend = new Resend(process.env.RESEND_EMAIL_API_KEY);

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
    const sendWelcomeEmail = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: ['tejgankri@outlook.com'],
        subject: 'Hello world',
        react: KoalaWelcomeEmail({ userFirstname: 'John' }),
        text: 'hello',
    });

    console.log(sendWelcomeEmail);

    return new Response(JSON.stringify({user,sendWelcomeEmail}), {
        headers: { 'Content-Type': 'application/json' },
    });
}