import React from "react";
import { useStateValue } from "./context-api/StateProvider";

function ProductRecommendation({ title, price, rating, image }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        title,
        price,
        rating,
        image,
      },
    });
  };
  return (
    <div className="productrecommendation">
      <div className="productrecommendation_img">
        <img src={image} />
      </div>
      <div className="productrecommendation_info">
        <p>{title}</p>
          <p className="productrecommendation_price">{price}</p>
          <div className="productrecommendation_rating">
            {Array(rating)
              .fill()
              .map((_) => (
                <p>&#9733;</p>
              ))}
          </div>
        <button onClick={addToBasket}>Add to basket</button>
      </div>
    </div>
  );
}

export default ProductRecommendation;
