'use client'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useEdgeStore } from "@/lib/edgestore"
import React, { useState } from 'react'
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
import { FileState, MultiFileDropzone } from "@/components/image-upload"
import {Category} from '@prisma/client'
import { Switch } from "@/components/ui/switch"




export default  function AddNewCategory() {
    const form = useForm<Category>()
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
    function handleSizeKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === 'Enter' && newSize.trim() !== '') {
            setSizes([...sizes, newSize.trim()]);
            setNewSize('');
        }
    }

    const handleImageChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
        // @ts-ignore
        setImages([...images, ...e.target.files])
    }
    const [colors, setColors] = useState<string[]>([]);

    function handleColorChange(event: React.ChangeEvent<HTMLInputElement>) {
        setNewColor(event.target.value);
    }

    function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === 'Enter' && newColor.trim() !== '') {
            setColors([...colors, newColor.trim()]);
            setNewColor('');
        }
    }
    const { toast } = useToast()
   
    async function onSubmit() {
        setUploading(true);
        let imageArray: string[] = []
        const uploadedImages = await Promise.all(
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
        const response = await fetch('/api/category', {
            method: 'POST',
            body: JSON.stringify({ ...form.getValues(), images: imageArray }),
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
                Add Category
            </DialogTrigger>
            <DialogContent className="max-w-3xl overflow-y-auto h-screen">
                <DialogHeader>
                    <DialogTitle>Create a new category</DialogTitle>
                    <DialogDescription>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                <FormField
                                    control={form.control}
                                    name="title"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Title</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Title" {...field} />
                                            </FormControl>
                                            <FormDescription>
                                                Enter the Title
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="subtitle"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Subtitle</FormLabel>
                                            <FormControl>
                                                <Textarea placeholder="subtitle" {...field} />
                                            </FormControl>
                                            <FormDescription>
                                                Enter Sutitle
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="isFeatured"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Is Features</FormLabel>
                                            <FormControl>
                                                <Switch id="is-featured"/>
                                            </FormControl>
                                            <FormDescription>
                                                Is the product featured
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
                                                </div>
                                            </FormControl>
                                            <FormDescription>
                                                Upload Images
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
