import { Separator } from '@/components/ui/separator'
import React from 'react'
import MarketingForm from './marketingForm'

export default function page() {
    return (
        <div className="space-y-6  lg:max-w-2xl">
            <div>
                <h3 className="text-lg font-medium">Marketing</h3>
                <p className="text-sm text-muted-foreground">
                    Manage your marketing campaigns and automate your email marketing
                </p>
            </div>
            <Separator />
            <MarketingForm />
        </div>
    )
}
