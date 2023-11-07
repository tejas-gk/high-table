import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useEdgeStore } from "@/lib/edgestore"
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
import { Product, Color, Size } from "@prisma/client"
import { AiFillCaretDown } from "react-icons/ai"
import { OurFileRouter } from "@/app/api/uploadthing/core"
import { UploadButton } from "@/lib/uploadthing"
import { FileState, MultiFileDropzone } from "@/components/image-upload"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


type FormType = Product & Color & Size


export default function AddNewProduct() {
    const form = useForm<FormType>()
    const [images, setImages] = useState([]);
    const [newColor, setNewColor] = useState<string>('');
    const [newSize, setNewSize] = useState<string>('');
    const [sizes, setSizes] = useState<string[]>([]);


    const [fileStates, setFileStates] = useState<FileState[]>([]);
    const [uploading, setUploading] = useState(false);

    function updateFileProgress(key: string, progress: FileState['progress']) {
        setFileStates((fileStates) => {
            const newFileStates = structuredClone(fileStates);
            const fileState = newFileStates.find(
                (fileState) => fileState.key === key,
            );
            if (fileState) {
                fileState.progress = progress;
            }
            return newFileStates;
        });
    }

    const { edgestore } = useEdgeStore();

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
        setImages([...images, ...e.target.files])
    }
    const [colors, setColors] = useState<string[]>([]);

    function handleColorChange(event: React.ChangeEvent<HTMLInputElement>) {
        setNewColor(event.target.value);
    }

    function handleKeyPress(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.key === 'Enter' && newColor.trim() !== '') {
            setColors([...colors, newColor.trim()]);
            setNewColor('');
        }
    }
    const { toast } = useToast()
  

    async function onSubmit() {
        setUploading(true);
        let imageArray = []
        const uploadedImages=await Promise.all(
            fileStates.map(async (addedFileState) => {
                try {
                    const res = await edgestore.publicFiles.upload({
                        file: addedFileState.file,
                        onProgressChange: async (progress) => {
                            updateFileProgress(addedFileState.key, progress);
                            if (progress === 100) {
                                await new Promise((resolve) => setTimeout(resolve, 1000));
                                updateFileProgress(addedFileState.key, 'COMPLETE');
                            }
                        },
                    })
                    console.log(res, 'unpaid')
                    imageArray.push(res.url)
                    return res
                } catch (err) {
                    updateFileProgress(addedFileState.key, 'ERROR');
                }
            })
        );
        setUploading(false);
        console.log(imageArray)
        const response = await fetch('/api/products', {
            method: 'POST',
            body: JSON.stringify({ ...form.getValues(), images: imageArray, colors, sizes }),
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
                                    name="category"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Category</FormLabel>
                                            <FormControl>
                                                <Select>
                                                    <SelectTrigger className="w-full">
                                                        <SelectValue placeholder="Category" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="light">Clothes</SelectItem>
                                                        <SelectItem value="dark">Decor</SelectItem>
                                                        <SelectItem value="system">Kitchen</SelectItem>
                                                    </SelectContent>
                                                </Select>

                                            </FormControl>
                                            <FormDescription>
                                                Enter Category
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="imageSrc"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Images</FormLabel>
                                            <FormControl>
                                                <div>
                                                    <MultiFileDropzone
                                                        value={fileStates}
                                                        onChange={(files) => {
                                                            setFileStates(files);
                                                        }}
                                                        onFilesAdded={async (addedFiles) => {
                                                            setFileStates([...fileStates, ...addedFiles]);
                                                        }}
                                                    />
                                                    {/* <button
                                                        onClick={handleUploadClick}
                                                        disabled={uploading || fileStates.length === 0}
                                                    >
                                                        Upload Files
                                                    </button> */}
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
