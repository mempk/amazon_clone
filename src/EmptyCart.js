import React from "react";
import ProductRecommendation from "./ProductRecommendation";

function EmptyCart() {
  return (
    <div className="emptycart">
      <div className="emptycart_recent">
        <img
          className="emptycart_emptycart"
          src="https://thecounter.org/wp-content/uploads/2020/07/wifi-grocery-cart-on-yellow-background-july-2020-e1594318706928.jpg"
        ></img>
        <div className="emptycart_text">
          <h2>Your Amazon Cart is empty</h2>
          <p>See recommendations</p>
        </div>
      </div>
      <div className="emptycart_recommendation">
        <p className ="recommendation_text">Your recently viewed item</p>
        <ul className="recommendation_list">
          <li>
            <ProductRecommendation
              id="123456"
              title="VR Headset Compatible with iPhone & Android Phone - Universal Virtual Reality Goggles - Play Your Best Mobile Games 360 Movies with Soft & Comfortable New 3D VR Glasses |"
              image="https://images-na.ssl-images-amazon.com/images/I/913t4R2zEmL._SL1500_.jpg"
              price="$12.99"
              rating={5}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default EmptyCart;
