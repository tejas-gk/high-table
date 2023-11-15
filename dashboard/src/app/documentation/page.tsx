'use client'
import React from 'react'
import { Copy, Server } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge, BadgeProps } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
const docs = [
    {
        method: 'GET',
        url: '/api/products',
        description: 'Get all products'
    },
    {
        method: 'GET',
        url: '/api/products/:id',
        description: 'Get a product by id'
    },
    {
        method: 'POST',
        url: '/api/products',
        description: 'Create a new product'
    },
    {
        method: 'PUT',
        url: '/api/products/:id',
        description: 'Update a product by id'
    },
    {
        method: 'DELETE',
        url: '/api/products/:id',
        description: 'Delete a product by id'
    },
]
export default function Api() {
    const onCopy = (description: string) => {
        navigator.clipboard.writeText(description);
    }
    return (
        <div>
            {
                docs.map((doc, index) => (
                    <div key={index}>
                        <Alert>
                            <Server className="h-4 w-4" />
                            <AlertTitle className="flex items-center gap-x-2">
                                {doc.url}
                                <Badge>
                                    {doc.method}
                                </Badge>
                            </AlertTitle>
                            <AlertDescription className="mt-4 flex items-center justify-between">
                                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                                    {doc.method} {doc.url}
                                </code>
                                <Button variant="outline" size="sm" onClick={() => onCopy(doc.description)}>
                                    <Copy className="h-4 w-4" />
                                </Button>
                            </AlertDescription>
                        </Alert>
                    </div>
                ))
            }

        </div>
    )
}
