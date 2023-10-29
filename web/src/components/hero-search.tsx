'use client'
import { ChevronDown, Locate, MapPin } from 'lucide-react'
import React from 'react'
import { Input } from './ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function HeroSearch() {
  return (
    <div className='w-full flex gap-2 px-12'>
      <Select>
        <SelectTrigger className="w-[40%]">
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
      <Input
        type="search"
        placeholder="Search..."
        className="flex-1"
      />
    </div>
  )
}
