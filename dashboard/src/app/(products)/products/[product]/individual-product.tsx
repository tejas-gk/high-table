import React from 'react'

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
                    <div className="flex items-center gap-x-2">
                        <h2 className='font-xl'>
                            Edit Product
                        </h2>
                        <TitleForm
                            initialData={''}
                            productId={'0'}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

const TitleForm = ({ initialData, productId }: any) => {
    return (
        <div>

        </div>
    )
}
