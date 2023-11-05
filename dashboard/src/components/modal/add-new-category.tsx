import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import React, { useEffect, useRef, useState } from 'react'
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { useForm } from "react-hook-form"
import { useToast } from "@/components/ui/use-toast"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Plus } from "lucide-react"
import { Product } from "@prisma/client"
import { AiFillCaretDown } from "react-icons/ai"




export default function AddNewCategory() {
    const form = useForm<Product>()
    const [images, setImages] = useState([]);
    const [newColor, setNewColor] = useState<string>('');
    const [newSize, setNewSize] = useState<string>('');
    const [sizes, setSizes] = useState<string[]>([]);

    function handleSizeChange(event: React.ChangeEvent<HTMLInputElement>) {
        setNewSize(event.target.value);
    }

    function handleSizeKeyPress(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.key === 'Enter' && newSize.trim() !== '') {
            setSizes([...sizes, newSize.trim()]);
            setNewSize('');
        }
    }

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // @ts-ignore
        setImages([...images, ...e.target.files])
    }
    const [colors, setColors] = useState<string[]>([]);

    function handleColorChange(event: React.ChangeEvent<HTMLInputElement>) {
        setNewColor(event.target.value);
    }

    function handleKeyPress(event: React.ChangeEvent<HTMLInputElement>) {
        // @ts-ignore
        if (event.key === 'Enter' && newColor.trim() !== '') {
            setColors([...colors, newColor.trim()]);
            setNewColor('');
        }
    }
    const { toast } = useToast()
    const imageInputRef = useRef(null);
    async function onSubmit() {
        const imageBlobs = images.map(image => URL.createObjectURL(image));

        const response = await fetch('/api/products', {
            method: 'POST',
            body: JSON.stringify({ ...form.getValues(), images: imageBlobs, colors, sizes }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        if (response.ok)
            toast({
                title: "Product added successfully",
            })
        else {
            toast({
                title: "Something went wrong",
                description: data.message,
                variant: "destructive"
            })
        }
        console.log(data)
    }

    return (
        <Dialog>
            <DialogTrigger>
                <Button className="flex gap-2 items-center">
                    <span>Add Product</span>
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl overflow-y-auto h-screen">
                <DialogHeader>
                    <DialogTitle>Create a new product</DialogTitle>
                    <DialogDescription>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Name" {...field} />
                                            </FormControl>
                                            <FormDescription>
                                                Enter the product
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="description"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Description</FormLabel>
                                            <FormControl>
                                                <Textarea placeholder="description" {...field} />
                                            </FormControl>
                                            <FormDescription>
                                                Enter Description
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="price"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Price</FormLabel>
                                            <FormControl>
                                                <Input placeholder="price" {...field}
                                                    type="number"
                                                />
                                            </FormControl>
                                            <FormDescription>
                                                Enter Price
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="images"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Images</FormLabel>
                                            <FormControl>
                                                <div className="flex flex-wrap flex-row gap-3">
                                                    <div className="
                                                    h-32 w-32 border-2 border-gray-200 border-dashed rounded-md flex justify-center items-center cursor-pointer
                                                  "
                                                        onClick={() => imageInputRef.current.click()}
                                                    >
                                                        <Plus size={32} />
                                                        <Input
                                                            id="imageInput"
                                                            ref={imageInputRef}
                                                            type="file"
                                                            accept="image/*"
                                                            multiple
                                                            style={{ display: 'none' }}
                                                            onChange={handleImageChange}
                                                        />
                                                    </div>
                                                    {
                                                        images.map((image, index) => (
                                                            <div key={index} className="h-32 w-32 border-2 border-gray-200 border-dashed rounded-md flex justify-center items-center cursor-pointer">
                                                                <img src={URL.createObjectURL(image)} alt="" className="h-full w-full object-contain" />
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </FormControl>
                                            <FormDescription>
                                                Upload Images
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="color"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Colors</FormLabel>
                                            <FormControl>
                                                <div className="flex flex-col gap-6">
                                                    <div className="flex flex-wrap gap-3">

                                                        {colors.map((color, index) => (
                                                            <div
                                                                key={index}
                                                                className="w-10 h-10 rounded-full"
                                                                style={{ background: color }}
                                                            />
                                                        ))}
                                                    </div>
                                                    <Input placeholder="color" {...field} value={newColor}
                                                        onChange={handleColorChange}
                                                        onKeyPress={handleKeyPress}
                                                    />
                                                </div>
                                            </FormControl>
                                            <FormDescription>
                                                Select a color and click &apos;Add Color&apos;
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="size"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Sizes</FormLabel>
                                            <FormControl>
                                                <div className="flex flex-col gap-6">
                                                    <div className="flex flex-wrap gap-3">
                                                        {sizes.map((size, index) => (
                                                            <div
                                                                key={index}
                                                                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center"
                                                            >
                                                                {size}
                                                            </div>
                                                        ))}
                                                    </div>
                                                    <Input
                                                        placeholder="size"
                                                        {...field}
                                                        value={newSize}
                                                        onChange={handleSizeChange}
                                                        onKeyPress={handleSizeKeyPress}
                                                    />
                                                </div>
                                            </FormControl>
                                            <FormDescription>
                                                Enter Size
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />


                                <Button type="submit">Submit</Button>
                            </form>
                        </Form>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}
