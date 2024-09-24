export const getAllProducts = async () => {
    const res = await fetch('http://localhost:3002/products')
    const result= await res.json()

    return result.products
}