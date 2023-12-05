'use client'
import { Input } from '@/components/ui/input';
import React, { useEffect, useRef, useState } from 'react'
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button';
import { Switch } from "@/components/ui/switch"
import { useForm } from 'react-hook-form';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import ImageTray from '@/components/image-tray';

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}
const productSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters long'),
    description: z.string().min(5, 'Description must be at least 5 characters long'),
    price: z.number().positive('Price must be a positive number'),
    category: z.string().nonempty('Category is required'),
    imageSrc: z.array(z.string()).min(1, 'At least one image is required'),
    colors: z.array(z.string()).min(1, 'At least one color is required'),
    sizes: z.array(z.string()).min(1, 'At least one size is required'),
    quantity: z.number().positive('Quantity must be a positive number'),
});
export default function IndividualProduct({ product }: { product: any }) {
    console.log(product)
    const [selectedColor, setSelectedColor] = useState('')
    const [selectedSize, setSelectedSize] = useState('')
    const form = useForm<z.infer<typeof productSchema>>({
        // resolver: zodResolver(productSchema),
        defaultValues: {
            name: product.name,
            description: product.description,
            price: product.price,
            category: product.categoryId,
            imageSrc: product.imageSrc,
            colors: product.colors,
            sizes: product.sizes,
            quantity: product.Quantity,
        },
    })

    async function onSubmit(values: z.infer<typeof productSchema>) {
        console.log(values)
        const updateProducts = await fetch(`/api/products`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                values,
                id: product.id
            }),
        })
        console.log(updateProducts)

    }
    return (
        <div className='px-8'>
            <Card>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <CardHeader>
                            <CardTitle>
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            {/* <FormLabel>Username</FormLabel> */}
                                            <FormControl>
                                                <div className="text-4xl font-bold">
                                                    <TitleForm
                                                        initialData={product.name}
                                                        className='text-4xl font-bold'
                                                        {...field}
                                                    />
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </CardTitle>
                            <CardDescription>
                                <div className="flex items-start gap-x-2 flex-col">
                                    <FormField
                                        control={form.control}
                                        name="description"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <TitleForm
                                                        initialData={product.description}
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </CardDescription>
                        </CardHeader>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
                            <div className='flex flex-col gap-8'>
                                <CardContent>
                                    <div className="
                                grid grid-cols-1 md:grid-cols-2 gap-6
                            ">
                                        <FormField
                                            control={form.control}
                                            name="price"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Price</FormLabel>
                                                    <FormControl>
                                                        <TitleForm
                                                            initialData={product.price}
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="quantity"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Quantity</FormLabel>
                                                    <FormControl>
                                                        <TitleForm
                                                            initialData={product.Quantity}
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="category"
                                            render={({ field }) => (
                                                <FormItem className="w-full">
                                                    <FormLabel>Category</FormLabel>
                                                    <FormControl>
                                                        <Select>
                                                            <SelectTrigger className="w-[180px]">
                                                                <SelectValue placeholder="Theme" />
                                                            </SelectTrigger>
                                                            <SelectContent>
                                                                {
                                                                    product?.categories?.map((category: any) => (
                                                                        <SelectItem
                                                                            key={category.id}
                                                                            value={category.id}
                                                                            className="text-sm"
                                                                        >
                                                                            {category.name}
                                                                        </SelectItem>
                                                                    ))
                                                                }
                                                            </SelectContent>
                                                        </Select>

                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                </CardContent>
                            </div>
                            <div className='flex flex-col '>
                                <div className="flex items-start gap-x-2 flex-col">
                                    <Label htmlFor={`image`}>Images</Label>
                                    {
                                        product.imageSrc.map((image: any, index: number) => (
                                            <div key={index} className='flex flex-col gap-2'>
                                                <Image
                                                    height={200}
                                                    width={200}
                                                    alt={`image-${index}`}
                                                    src={image}
                                                    className='w-full px-3 py-2'
                                                />
                                            </div>
                                        ))
                                    }
                                </div>
                                <ImageTray />
                                <div className="flex items-start gap-x-2 mt-5">

                                    {product.colors.map((color: any) => (
                                        <div
                                            key={color.name}
                                            onClick={() => setSelectedColor(color.name)}
                                            className={classNames(
                                                color.name,
                                                'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                                            )}
                                        >
                                            <div className="flex items-center space-x-2">
                                                <div id={`color-${color.name}`} />
                                                <span
                                                    aria-hidden="true"
                                                    style={{ background: color.name }}
                                                    className={classNames(
                                                        color.name || `bg-${color.name}-400`,
                                                        'h-8 w-8 rounded-full border border-black border-opacity-10',
                                                        selectedColor === color.name ? 'ring ring-offset-1' : '',
                                                    )}
                                                />
                                                <Label htmlFor={`color-${color.name}`}>
                                                    {color.name}
                                                </Label>
                                            </div>
                                        </div>
                                    ))}

                                </div>
                                <div className="mt-10">
                                    <div className="flex items-center justify-between">
                                        <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100">Size</h4>
                                    </div>

                                    <div className='grid grid-cols-4 gap-4 mt-4'>
                                        {
                                            product.sizes.map((size: any) => (
                                                <div key={size.name}
                                                    onClick={() => setSelectedSize(size.name)}
                                                    className={classNames(
                                                        size.inStock
                                                            ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                                                            : 'cursor-not-allowed bg-gray-50 text-gray-200',
                                                        selectedSize === size.name ? 'ring-2 ring-indigo-500' : '',
                                                        'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1'
                                                    )}
                                                >
                                                    <Label>{size.name}</Label>
                                                    {size.inStock ? (
                                                        <span
                                                            className={classNames(
                                                                selectedSize === size.name ? 'border' : 'border-2',
                                                                selectedSize === size.name ? 'border-indigo-500' : 'border-transparent',
                                                                'pointer-events-none absolute -inset-px rounded-md'
                                                            )}
                                                            aria-hidden="true"
                                                        />
                                                    ) : (
                                                        <span
                                                            aria-hidden="true"
                                                            className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                                        >
                                                            <svg
                                                                className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                                                viewBox="0 0 100 100"
                                                                preserveAspectRatio="none"
                                                                stroke="currentColor"
                                                            >
                                                                <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                                                            </svg>
                                                        </span>
                                                    )}
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                            <CardFooter>
                                <Button type="submit">
                                    Update
                                </Button>
                            </CardFooter>
                        </div>
                        {/* <Button type="submit">Savw</Button> */}
                    </form>
                </Form>
            </Card>
        </div >
    )
}




interface TitleFormProps {
    initialData?: string;
    className?: string;
}

const TitleForm: React.FC<TitleFormProps> = ({ initialData, className, ...inputProps }) => {
    const [clickedBox, setClickedBox] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
                console.log(inputRef.current.value);
                setClickedBox(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className='flex flex-col gap-2'>
            {clickedBox ? (
                <div>
                    <Input
                        id={initialData}
                        name="email"
                        ref={inputRef}
                        className={className}
                        {...inputProps}
                    />
                </div>
            ) : (
                <div
                    className='w-full px-3 py-2'
                    onClick={() => setClickedBox(true)}
                >
                    {initialData}
                </div>
            )}
        </div>
    );
};


