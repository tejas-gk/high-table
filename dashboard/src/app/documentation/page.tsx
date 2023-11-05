'use client'
import React from 'react'
import { Copy, Server } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge, BadgeProps } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
export default function Api() {
    const onCopy = (description: string) => {
        navigator.clipboard.writeText(description);
    }
    return (
        <div>
            <Alert>
                <Server className="h-4 w-4" />
                <AlertTitle className="flex items-center gap-x-2">
                    https://localhost:3001/api/products
                    <Badge>
                        GET
                    </Badge>
                </AlertTitle>
                <AlertDescription className="mt-4 flex items-center justify-between">
                    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                        Get all products
                    </code>
                    <Button variant="outline" size="sm" onClick={() => onCopy('hello')}>
                        <Copy className="h-4 w-4" />
                    </Button>
                </AlertDescription>
            </Alert>

        </div>
    )
}
