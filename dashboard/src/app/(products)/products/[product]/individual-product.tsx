'use client'
import { Input } from '@/components/ui/input';
import React, { useState } from 'react'

export default function IndividualProduct() {
    return (
        <div className='p-6'>
            <div className="flex items-center justify-between">
                <div className="flex flex-col gap-y-2">
                    <div className="text-2xl font-medium">
                        Product Name
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
                <div>
                    <div className="flex items-start gap-x-2 flex-col">
                        <h2 className='font-xl'>
                            Edit Product
                        </h2>
                        <TitleForm
                            initialData={'very nice shirt'}
                            productId={'0'}
                            onUpdate={(data, id) => console.log(data, id)}
                        />
                    </div>
                    <div className="flex items-start gap-x-2 flex-col">
                        <h2 className='font-xl'>
                            Edit Product
                        </h2>
                        <TitleForm
                            initialData={'very nice shirt'}
                            productId={'0'}
                            onUpdate={(data, id) => console.log(data, id)}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}




interface TitleFormProps {
    initialData: string; 
    productId: string; 
    onUpdate: (data: string, id: string) => void;
}

const TitleForm: React.FC<TitleFormProps> = ({ initialData, productId, onUpdate }) => {
    const [clickedBox, setClickedBox] = useState(false);

    return (
        <div className='flex flex-col gap-2'>
            {
                clickedBox ?
                    <Input
                        className='w-full'
                        defaultValue={initialData}
                        onBlur={(e) => {
                            onUpdate(e.target.value, productId)
                            setClickedBox(false)
                        }}
                    />
                    :
                    <div
                        className='w-full bg-red-400'
                        onClick={() => setClickedBox(true)}
                    >
                        {initialData}
                    </div>
            }
       </div>
    );
}

