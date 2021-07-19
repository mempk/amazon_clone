import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './context-api/StateProvider'

function CheckoutProduct({id, title, price, image, rating}) {

    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket =()=>{
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id
        })
    }

    return (
        <div className="checkoutproduct">
            <img src={image} className="checkoutproduct_image"> 

            </img>
            <div className="checkoutproduct_info">
                <p className="checkoutproduct_title">{title}</p>
                <p className="checkoutproduct_price">
                    <strong>{price}</strong>
                </p>
                <div className="checkoutproduct_rating">
                    {Array(rating).fill().map((_) => (
                        <p>&#9733;</p>
                    ))}
                </div>
                <button onClick ={removeFromBasket} >Remove from basket</button>

            </div>
        </div>
    )
}

export default CheckoutProduct
