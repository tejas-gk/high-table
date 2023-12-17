import { z } from "zod"

export const registerSchema = z.object({
    username: z.string().min(2).max(50),
    email: z.string().email(),
    name: z.string().min(2).max(50),
    password: z.string().min(8).max(50),
    dob: z.string().min(2).max(50),
})

export const passwordStrengthSchema = () => {
    if(z.object({password: z.string().min(8).max(50)})) {
        return 'strong'
    } else if (z.object({ password: z.string().min(6).max(50) })) {
        return 'medium'
    }
}

