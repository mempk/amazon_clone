import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./context-api/StateProvider";
import EmptyCart from "./EmptyCart";
import Subtotal from "./Subtotal";
function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout-left">
      <img
        className="checkout_image"
        src="https://m.media-amazon.com/images/S/sonata-images-prod/US_IMDBTV_LeverageRedemption_S1/26233459-b787-4ffd-93ef-5abb48bdcc2a._UR3000,600_SX3000_FMwebp_.jpeg"
      ></img>

      {basket?.length === 0 ? (
       <EmptyCart />
      ) : (
        <div className="checkout_basket">
          <h2 className="checkout_title">Your Shopping Basket</h2>
          {basket.map(item=>(
              <CheckoutProduct id={item.id} title={item.title} image={item.image} price={item.price} rating={item.rating} />
          ))}
        </div>
      )}
    </div>
    {basket.length > 0 &&
    <div className="checkout_right">
     <Subtotal />

    </div>}
    </div>
  );
}

export default Checkout;
