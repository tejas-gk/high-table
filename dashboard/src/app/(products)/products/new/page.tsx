import NewProduct from "./new-product"

const getAllCategories = async() => {
    const data = await fetch("http://localhost:3001/api/category")
    return data.json()
}
    
export default async function page() {
    const categories = await getAllCategories()
    console.log(categories)
  return (
    <NewProduct categories={categories} />
  )
}
