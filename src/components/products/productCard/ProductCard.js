import React from "react";
import PropTypes from 'prop-types';
import {useHistory} from "react-router-dom";
import "./ProductCard.css";
import {singleProductRoute} from "../../../routes/products";

const ProductCard = ({product}) => {
    const {title, image, description} = product;
    const history = useHistory();

    const handleClick = () => {
        history.push(singleProductRoute(product.id))
    }

    return (
        <article className="product-card" onClick={handleClick}>
            <h4>{title}</h4>
            <img src={image} alt={title}/>
            <p>{description}</p>
        </article>
    )
};

ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        image: PropTypes.string,
        description: PropTypes.string,
        price: PropTypes.number,
        category: PropTypes.string
    })
};

export default ProductCard;