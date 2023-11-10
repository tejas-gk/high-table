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

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

export default function IndividualProduct({ product }: { product: any }) {
    const [selectedColor, setSelectedColor] = useState('')
    const [selectedSize, setSelectedSize] = useState('')
    const onSubmit = (data: any) => {
        console.log(data);
        // Add logic to update the data or perform other actions
    };
    return (
        <div className='px-8'>
            <Card>
                <CardHeader>
                    <CardTitle>
                        <div className="text-4xl font-bold">
                            <TitleForm
                                initialData={product.name}
                                productId={'1'}
                                label=''
                                onUpdate={(data, id) => console.log(data, id)}
                                className='text-4xl font-bold'
                            />
                        </div>
                    </CardTitle>
                    <CardDescription>
                        <div className="flex items-start gap-x-2 flex-col">
                            <TitleForm
                                initialData={product.description || 'enter a description'}
                                productId={'1'}
                                label=''
                                onUpdate={(data, id) => console.log(data, id)}
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
                                <TitleForm
                                    initialData={product.price}
                                    productId={'1'}
                                    label='Price'
                                    onUpdate={(data, id) => console.log(data, id)}
                                />
                                <TitleForm
                                    initialData={'0'}
                                    productId={'2'}
                                    label='Discount'
                                    onUpdate={(data, id) => console.log(data, id)}
                                />
                                <TitleForm
                                    initialData={product.quantity}
                                    productId={'3'}
                                    label='Quantity'
                                    onUpdate={(data, id) => console.log(data, id)}
                                />
                                <TitleForm
                                    initialData={product.categoryId}
                                    productId={'3'}
                                    label='Category'
                                    onUpdate={(data, id) => console.log(data, id)}
                                />
                                <div className='flex flex-col gap-2'>
                                    <Label htmlFor='in-stock'>In Stock</Label>
                                    <Switch
                                        checked={product.inStock}
                                    />
                                </div>
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
                        <Button>
                            Update
                        </Button>
                    </CardFooter>
                </div>
            </Card>
        </div>
    )
}




interface TitleFormProps {
    initialData: string;
    productId: string;
    label: string;
    onUpdate: (data: string, id: string) => void;
    className?: string;
}

const TitleForm: React.FC<TitleFormProps> = ({ initialData, productId, onUpdate, label, className }) => {
    const [clickedBox, setClickedBox] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
                onUpdate(inputRef.current.value, productId);
                setClickedBox(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [productId, onUpdate]);

    return (
        <div className='flex flex-col gap-2'>
            <Label htmlFor={`email-${productId}`}>{label}</Label>
            {
                clickedBox ?
                    <div>
                        <Input
                            id={`email-${productId}`}
                            name="email"
                            readOnly
                            defaultValue={initialData}
                            ref={inputRef}
                            className={className}
                        />
                    </div>
                    :
                    <div
                        className='w-full px-3 py-2'
                        onClick={() => setClickedBox(true)}
                    >
                        {initialData}
                    </div>
            }
        </div>
    );
}

