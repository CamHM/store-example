import React, {useEffect, useState} from "react";
import {listAllProducts} from "../../services/products";
import ProductCard from "../../components/products/productCard/ProductCard";
import "./Products.css";

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        listAllProducts().then(data => setProducts(data))
    }, []);

    return (
        <section className="products">
            <h1>Productos ({products.length})</h1>
            <div className="list">
                {products.map(product => <ProductCard key={`product-${product.id}`} product={product}/>)}
            </div>
        </section>
    )
}

export default Products