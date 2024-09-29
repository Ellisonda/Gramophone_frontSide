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


export const modifyProduct = async(idProduct, newProductModification) => {
    const authToken = localStorage.getItem("token");
    const res= await fetch(`http://localhost:3002/products/update/${idProduct}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'Application/json',
            "auth-token": authToken
        },
        body: JSON.stringify(
            {
                ...newProductModification
            }
        )
    })
    const result = await res.json()
    return result.updateProduct

}

export const deleteProduct = async(idProduct) => {
    const authToken = localStorage.getItem("token");

    const res = await fetch(`http://localhost:3002/products/${idProduct}`, {
        method: 'DELETE',
        headers: {
            'content-type' : 'Application/json',
            "auth-token": authToken
        },
    })
    const result = await res.json();
    return result.products
}

export const createNewProduct = async (newProduct) => {
    const authToken = localStorage.getItem("token");

    const res = await fetch('http://localhost:3002/products/addProduct', {
        method: 'POST', 
        headers: {
            'content-type' : 'Application/json',
            "auth-token": authToken
        },
        body: JSON.stringify({
            ...newProduct
        })
    })
    const result = await res.json()
    return result.products
}


//Fetch for searche with filter

// export const getFilteredProducts = async (value) => {
//     const res = await fetch('http://localhost:3002/products')
//     const result= await res.json()
//     const productsFiltered= result.products.estilo_musica === value
//     return productsFiltered
// }


export const getProductByStyle = async (musicStyle) => {
    const res= await fetch(`http://localhost:3002/products/musicStyle/${musicStyle}`);
    const result = await res.json()
    return result.product
}