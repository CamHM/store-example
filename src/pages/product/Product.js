import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import {fetchProductDetail} from "../../services/products";

const Product = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);
    const { productId } = useParams();

    useEffect(() => {
        setLoading(true);
        fetchProductDetail(productId)
            .then(data => setProduct(data))
            .finally(() => setLoading(false))
    }, [productId]);

    if (loading) return <h1>Cargando ...</h1>

    if (!product) return <h1>Producto no encontrado</h1>

    return (
        <div>
            <h1>{product.title}</h1>
            <img src={product.image} alt={product.title} />
        </div>
    )
}

export default Product;