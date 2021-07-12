import React from 'react'
import './Product.css'

function Product({id, title, price, image, rating}) {
    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">{price}</p>
                <div className="product_rating">
                    {Array(rating).fill().map((_) => (
                        <p>&#9733;</p>
                    ))}
                </div>
            </div>
            <img src={image} />
            <button>Add to basket</button>
        </div>
    )
}

export default Product
