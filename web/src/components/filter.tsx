import React from 'react'
import { Slider } from './ui/slider'
import { Input } from './ui/input'
import { ScrollArea } from './ui/scroll-area'
import { Checkbox } from './ui/checkbox'
import { Label } from './ui/label'

export default function Filter() {
    return (
        <div className='flex flex-1 flex-col px-1 gap-4'>
            <div className="space-y-3">
                <h3 className="text-sm font-medium tracking-wide text-foreground">
                    Price range
                </h3>
                <Slider
                    defaultValue={[0, 500]}
                    max={500}
                    step={1}
                />
                <div className="flex items-center space-x-4">
                    <Input
                        type="number"
                        inputMode="numeric"
                        min={0}
                        className="h-9"
                        value='50'
                    />
                    <span className="text-muted-foreground">-</span>
                    <Input
                        type="number"
                        inputMode="numeric"
                        max={500}
                        className="h-9"
                        value='500'
                    />
                </div>
            </div>
            <div className="space-y-3">
                <h3 className="text-sm font-medium tracking-wide text-foreground">
                    Color
                </h3>
                <div className="flex items-center space-x-4 justify-between">
                    <div className="w-8 h-8 rounded-full bg-primary"></div>
                    <div className="w-8 h-8 rounded-full bg-blue-400"></div>
                    <div className="w-8 h-8 rounded-full bg-accent"></div>
                    <div className="w-8 h-8 rounded-full bg-foreground"></div>
                    <div className='w-8 h-8 rounded-full bg-gray-500'></div>
                    <div className='w-8 h-8 rounded-full bg-red-400'></div>
                </div>
            </div>
            <div className="space-y-3">
                <h3 className="text-sm font-medium tracking-wide text-foreground">
                    Checkboxes
                </h3>
                <ScrollArea className="h-96 rounded-md border px-4 py-2">
                    <div className="space-y-4">
                        <div
                            className="flex items-center space-x-2"
                        >
                            <Checkbox/>
                            <Label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Hello (10)
                            </Label>
                        </div>
                        <div
                            className="flex items-center space-x-2"
                        >
                            <Checkbox/>
                            <Label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Hello (10)
                            </Label>
                        </div>
                        <div
                            className="flex items-center space-x-2"
                        >
                            <Checkbox/>
                            <Label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Hello (10)
                            </Label>
                        </div>
                        <div
                            className="flex items-center space-x-2"
                        >
                            <Checkbox/>
                            <Label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Hello (10)
                            </Label>
                        </div>
                        <div
                            className="flex items-center space-x-2"
                        >
                            <Checkbox/>
                            <Label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Hello (10)
                            </Label>
                        </div>
                        <div
                            className="flex items-center space-x-2"
                        >
                            <Checkbox/>
                            <Label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Hello (10)
                            </Label>
                        </div>
                        <div
                            className="flex items-center space-x-2"
                        >
                            <Checkbox/>
                            <Label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Hello (10)
                            </Label>
                        </div>
                        <div
                            className="flex items-center space-x-2"
                        >
                            <Checkbox/>
                            <Label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Hello (10)
                            </Label>
                        </div>
                        <div
                            className="flex items-center space-x-2"
                        >
                            <Checkbox/>
                            <Label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Hello (10)
                            </Label>
                        </div>
                        <div
                            className="flex items-center space-x-2"
                        >
                            <Checkbox/>
                            <Label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Hello (10)
                            </Label>
                        </div>
                        <div
                            className="flex items-center space-x-2"
                        >
                            <Checkbox/>
                            <Label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Hello (10)
                            </Label>
                        </div>
                        <div
                            className="flex items-center space-x-2"
                        >
                            <Checkbox/>
                            <Label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Hello (10)
                            </Label>
                        </div>
                        <div
                            className="flex items-center space-x-2"
                        >
                            <Checkbox/>
                            <Label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Hello (10)
                            </Label>
                        </div>
                        <div
                            className="flex items-center space-x-2"
                        >
                            <Checkbox/>
                            <Label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Hello (10)
                            </Label>
                        </div>
                        <div
                            className="flex items-center space-x-2"
                        >
                            <Checkbox/>
                            <Label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Hello (10)
                            </Label>
                        </div>
                        <div
                            className="flex items-center space-x-2"
                        >
                            <Checkbox/>
                            <Label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Hello (10)
                            </Label>
                        </div>
                        <div
                            className="flex items-center space-x-2"
                        >
                            <Checkbox/>
                            <Label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Hello (10)
                            </Label>
                        </div>
                        <div
                            className="flex items-center space-x-2"
                        >
                            <Checkbox/>
                            <Label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Hello (10)
                            </Label>
                        </div>
                        <div
                            className="flex items-center space-x-2"
                        >
                            <Checkbox/>
                            <Label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Hello (10)
                            </Label>
                        </div>
                        <div
                            className="flex items-center space-x-2"
                        >
                            <Checkbox/>
                            <Label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Hello (10)
                            </Label>
                        </div>
                        <div
                            className="flex items-center space-x-2"
                        >
                            <Checkbox/>
                            <Label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Hello (10)
                            </Label>
                        </div>
                        <div
                            className="flex items-center space-x-2"
                        >
                            <Checkbox/>
                            <Label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Hello (10)
                            </Label>
                        </div>
                        <div
                            className="flex items-center space-x-2"
                        >
                            <Checkbox/>
                            <Label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Hello (10)
                            </Label>
                        </div>
                        <div
                            className="flex items-center space-x-2"
                        >
                            <Checkbox/>
                            <Label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Hello (10)
                            </Label>
                        </div>
                        <div
                            className="flex items-center space-x-2"
                        >
                            <Checkbox/>
                            <Label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Hello (10)
                            </Label>
                        </div>
                        <div
                            className="flex items-center space-x-2"
                        >
                            <Checkbox/>
                            <Label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Hello (10)
                            </Label>
                        </div>
                        <div
                            className="flex items-center space-x-2"
                        >
                            <Checkbox/>
                            <Label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Hello (10)
                            </Label>
                        </div>
                        <div
                            className="flex items-center space-x-2"
                        >
                            <Checkbox/>
                            <Label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Hello (10)
                            </Label>
                        </div>
                        <div
                            className="flex items-center space-x-2"
                        >
                            <Checkbox/>
                            <Label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Hello (10)
                            </Label>
                        </div>
                        <div
                            className="flex items-center space-x-2"
                        >
                            <Checkbox/>
                            <Label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Hello (10)
                            </Label>
                        </div>
                        <div
                            className="flex items-center space-x-2"
                        >
                            <Checkbox/>
                            <Label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Hello (10)
                            </Label>
                        </div>
                        <div
                            className="flex items-center space-x-2"
                        >
                            <Checkbox/>
                            <Label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Hello (10)
                            </Label>
                        </div>
                        <div
                            className="flex items-center space-x-2"
                        >
                            <Checkbox/>
                            <Label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Hello (10)
                            </Label>
                        </div>
                        <div
                            className="flex items-center space-x-2"
                        >
                            <Checkbox/>
                            <Label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Hello (10)
                            </Label>
                        </div>
                        <div
                            className="flex items-center space-x-2"
                        >
                            <Checkbox/>
                            <Label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Hello (10)
                            </Label>
                        </div>
                        <div
                            className="flex items-center space-x-2"
                        >
                            <Checkbox/>
                            <Label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Hello (10)
                            </Label>
                        </div>
                        <div
                            className="flex items-center space-x-2"
                        >
                            <Checkbox/>
                            <Label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Hello (10)
                            </Label>
                        </div>
                        <div
                            className="flex items-center space-x-2"
                        >
                            <Checkbox/>
                            <Label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Hello (10)
                            </Label>
                        </div>
                        <div
                            className="flex items-center space-x-2"
                        >
                            <Checkbox/>
                            <Label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Hello (10)
                            </Label>
                        </div>
                        <div
                            className="flex items-center space-x-2"
                        >
                            <Checkbox/>
                            <Label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Hello (10)
                            </Label>
                        </div>
                        <div
                            className="flex items-center space-x-2"
                        >
                            <Checkbox/>
                            <Label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Hello (10)
                            </Label>
                        </div>
                        <div
                            className="flex items-center space-x-2"
                        >
                            <Checkbox/>
                            <Label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Hello (10)
                            </Label>
                        </div>
                        <div
                            className="flex items-center space-x-2"
                        >
                            <Checkbox/>
                            <Label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Hello (10)
                            </Label>
                        </div>
                        <div
                            className="flex items-center space-x-2"
                        >
                            <Checkbox/>
                            <Label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Hello (10)
                            </Label>
                        </div>
                    </div>
                </ScrollArea>
            </div>
        </div>
    )
}
