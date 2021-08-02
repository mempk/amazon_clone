import React from 'react'
import { useStateValue } from './context-api/StateProvider'
import './Product.css'

function Product({id, title, price, image, rating}) {

    const [{basket},dispatch] = useStateValue();

    const addToBasket =()=>(
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id, title, price, image, rating
            }

        })
    )
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
            <button className="add_botton" onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product
