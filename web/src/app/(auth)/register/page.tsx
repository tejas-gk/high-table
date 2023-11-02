'use client'
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useForm } from 'react-hook-form'
import { registerSchema } from '@/validators/auth'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { useToast } from "@/components/ui/use-toast"
import { cn } from '@/lib/utils'
import { ArrowRight, ArrowLeft, MapPin, Github } from 'lucide-react'
import { motion } from 'framer-motion'
import { ToastAction } from '@/components/ui/toast'
import { signIn } from 'next-auth/react';
import { Textarea } from '@/components/ui/textarea'
import Link from 'next/link'

import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"

import { Calendar } from "@/components/ui/calendar"

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Progress } from '@/components/ui/progress'

// const FormSchema = z.object({
//     dob: z.date({
//         required_error: "A date of birth is required.",
//     }),
// })

type Input = z.infer<typeof registerSchema>
export default function Page() {
    const [formStep, setFormStep] = useState(0)
    const { toast } = useToast()
    const form = useForm<Input>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            name: '',
            email: '',
            password: '',
            username: '',
        },
    })
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    const handleSubmit = async (data: Input) => {
        console.log(data)
        try {
            await fetch('/api/register', {
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
            })
            signIn('credentials', {
                email: data.email,
                password: data.password,
                // callbackUrl: '/',
            })

            toast({
                title: 'Account created.',
                description: 'We\'ve created your account for you.',
            })
        } catch (error: any) {
            toast({
                title: 'Error',
                description: error.message,
                action: <ToastAction altText="Try again">Try again</ToastAction>,
            })
        }
    }

    return (
        <div className='
        absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:mt-28
      '>
            <Card className="w-[650px] mt-10">
                <CardHeader>
                    <CardTitle>Create Account</CardTitle>
                    <CardDescription>Deploy your new Account in one-click.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4 relative overflow-x-hidden">
                            <motion.div className={cn('space-y-3', {
                                hidden: formStep !== 0
                            })}
                                animate={{
                                    translateX: formStep === 0 ? 0 : '-100%',
                                    opacity: formStep === 0 ? 1 : 0,
                                }}
                                transition={{
                                    ease: 'easeInOut',
                                }}
                            >
                                <div className="grid grid-cols-2 gap-6">
                                    <Button variant="outline" onClick={() => {
                                        signIn('github')
                                    }}>
                                        <Github className="mr-2 h-4 w-4" />
                                        Github
                                    </Button>
                                    <Button variant="outline">
                                        <Github className="mr-2 h-4 w-4" />
                                        Google
                                    </Button>
                                </div>
                                <div className="relative">
                                    <div className="absolute inset-0 flex items-center">
                                        <span className="w-full border-t" />
                                    </div>
                                    <div className="relative flex justify-center text-xs uppercase">
                                        <span className="bg-background px-2 text-muted-foreground">
                                            Or continue with
                                        </span>
                                    </div>
                                </div>
                                <FormField
                                    control={form.control}
                                    name="username"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Username</FormLabel>
                                            <FormControl>
                                                <Input placeholder="John_doe" {...field}
                                                    onFocus={() => {
                                                        form.clearErrors('username')
                                                    }}
                                                />
                                            </FormControl>
                                            <FormDescription>
                                                This is your public display name.
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="John Doe" {...field} onFocus={() => {
                                                    form.clearErrors('name')
                                                }} />
                                            </FormControl>
                                            <FormDescription>
                                                This is your public display name.
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input placeholder="john@doe.com" {...field} type='email' onFocus={() => {
                                                    form.clearErrors('email')
                                                }} />
                                            </FormControl>
                                            <FormDescription>
                                                Enter a valid email address.
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Password</FormLabel>
                                            <FormControl>
                                                <Input placeholder="strong password" {...field} onFocus={() => {
                                                    form.clearErrors('password')
                                                }} />
                                            </FormControl>
                                            <FormDescription>
                                                Enter a strong password.
                                                <Progress className="" value={33} indicatorClassName='bg-green-400'/>
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <CardFooter className="float-right">
                                    <Button type="button"
                                        onClick={() => {
                                            form.trigger(['username', 'name', 'email', 'password'])
                                            const emailState = form.getFieldState('email')
                                            const usernameState = form.getFieldState('username')
                                            const nameState = form.getFieldState('name')
                                            const passwordState = form.getFieldState('password')

                                            if (!emailState.isDirty || emailState.invalid) return
                                            if (!usernameState.isDirty || usernameState.invalid) return
                                            if (!nameState.isDirty || nameState.invalid) return
                                            if (!passwordState.isDirty || passwordState.invalid) return


                                            setFormStep(1)
                                        }}
                                        variant='ghost'>Next
                                        <ArrowRight className='w-4 h-4' />
                                    </Button>
                                </CardFooter>
                            </motion.div>


                            <motion.div className={cn('space-y-3', {
                                hidden: formStep !== 1
                            })}
                                animate={{
                                    translateX: formStep === 1 ? 0 : '100%',
                                    opacity: formStep === 1 ? 1 : 0,
                                }}
                                transition={{
                                    ease: 'easeInOut',
                                }}
                            >
                                {/* caleder */}
                                <div>
                                    <FormField
                                        control={form.control}
                                        name="dob"
                                        render={({ field }) => (
                                            <FormItem className="flex flex-col">
                                                <FormLabel>Date of birth</FormLabel>
                                                <Popover>
                                                    <PopoverTrigger asChild>
                                                        <FormControl>
                                                            <Button
                                                                variant={"outline"}
                                                                className={cn(
                                                                    "w-[240px] pl-3 text-left font-normal",
                                                                    !field.value && "text-muted-foreground"
                                                                )}
                                                            >
                                                                {field.value ? (
                                                                    format(field.value, "PPP")
                                                                ) : (
                                                                    <span>Pick a date</span>
                                                                )}
                                                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                            </Button>
                                                        </FormControl>
                                                    </PopoverTrigger>
                                                    <PopoverContent className="w-auto p-0" align="start">
                                                        <Calendar
                                                            mode="single"
                                                            selected={field.value}
                                                            onSelect={field.onChange}
                                                            disabled={(date) =>
                                                                date > new Date() || date < new Date("1900-01-01")
                                                            }
                                                            initialFocus
                                                        />
                                                    </PopoverContent>
                                                </Popover>
                                                <FormDescription>
                                                    Your date of birth is used to calculate your age.
                                                </FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                </div>
                                
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="address">Address</Label>
                                    <Textarea placeholder="Address" />
                                </div>

                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="location">Location</Label>
                                    <Select>
                                        <SelectTrigger className="w-full">
                                            <div className='flex gap-4'>
                                                <MapPin className="mr-2 h-4 w-4" />
                                                <SelectValue placeholder="Select a Location" />
                                            </div>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>Locations</SelectLabel>
                                                <SelectItem value="manglore">Manglore</SelectItem>
                                                <SelectItem value="banglore">Banglore</SelectItem>
                                                <SelectItem value="chickmanglore">Chikmanglore</SelectItem>
                                                <SelectItem value="hubli">Hubli</SelectItem>
                                                <SelectItem value="mysore">Mysore</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="address">Pin code</Label>
                                    <Input placeholder="Pin code" />
                                </div>
                                <p className="px-2 text-start text-sm text-muted-foreground">
                                    By clicking continue, you agree to our{" "}
                                    <Link
                                        href="/terms"
                                        className="underline underline-offset-4 hover:text-primary"
                                    >
                                        Terms of Service
                                    </Link>{" "}
                                    and{" "}
                                    <Link
                                        href="/privacy"
                                        className="underline underline-offset-4 hover:text-primary"
                                    >
                                        Privacy Policy
                                    </Link>
                                    .
                                </p>
                                <CardFooter className="flex justify-between">
                                    <Button type="button"
                                        onClick={() => setFormStep(0)}
                                        variant='ghost'>
                                        <ArrowLeft className='w-4 h-4' />
                                        Prev
                                    </Button>
                                    <Button type='submit'>Submit</Button>
                                </CardFooter>

                            </motion.div>


                        </form>
                    </Form>
                </CardContent>

            </Card>
        </div>
    )
}
