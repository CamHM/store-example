export const listAllProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    return response.json();
}

export const fetchProductDetail = async (id = 0) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    return response.json();
}
