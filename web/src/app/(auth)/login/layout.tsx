import React from 'react'

export default function layout({
    children
}: {
    children: React.ReactNode
}) {
  return (
      <div className='w-screen flex justify-center items-center h-screen -translate-y-30
      '>
          <div className="w-[30%]">
            {children}
          </div>
    </div>
  )
}
