import React from "react";
import { getBasketTotal } from "./context-api/Reducer";
import { useStateValue } from "./context-api/StateProvider";
import './Subtotal.css'

function Subtotal() {

    const [{basket}] = useStateValue();
    const value = getBasketTotal(basket)
  return (
    <div className="subtotal">
        <>
      <p>
        Subtotal ({basket.length} item):<strong>{value}</strong>
      </p>
      <small className="subtotal_gift">
          <input type="checkbox"/>
          <p>This order contains a gift</p>
      </small>
         </>
      <button>Proceed to checkout</button>
    </div>
  );
}

export default Subtotal;
