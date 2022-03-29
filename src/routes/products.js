export const productsRoute = '/productos';

export const singleProductRoute = (id = ':productId') => `${productsRoute}/${id}`;