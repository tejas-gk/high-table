import React from 'react'
import { DataTable } from './data-table'


const getCategory = async () => {
  const res = await fetch('http://localhost:3001/api/category', { next: { revalidate: 3600 } })
  console.log(res)
  return res.json()
  // http://localhost:3001/category
}
export default async function page() {
  const data = await getCategory()
  console.log(data)
  return (
    <div className="container py-10 mx-auto">
      <DataTable data={data} />
    </div>
  )
}
