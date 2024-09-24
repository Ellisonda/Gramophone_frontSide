export const getAllProducts = async () => {
    const res = await fetch('http://localhost:3002/products')
    const result= await res.json()

    return result.products
}

export const getProductById = async (idProduct) => {
    const res = await fetch(`http://localhost:3002/products/${idProduct}`)
    const result = await res.json()
    return result.product
}