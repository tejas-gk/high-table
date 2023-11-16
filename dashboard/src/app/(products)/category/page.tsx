import { DataTable } from './data-table'


const getCategory = async () => {
  const res = await fetch('/api/category', { cache: 'no-cache'})
  console.log(res)
  return res.json()
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
