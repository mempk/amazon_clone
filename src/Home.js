import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home_img"
        src="https://fortheloveblog.com/wp-content/uploads/2016/07/Amazon-Prime-Banner.jpg"
      ></img>
      <div className="home_row">
      <Product
        id="123456"
        title="VR Headset Compatible with iPhone & Android Phone - Universal Virtual Reality Goggles - Play Your Best Mobile Games 360 Movies with Soft & Comfortable New 3D VR Glasses |"
        image="https://images-na.ssl-images-amazon.com/images/I/913t4R2zEmL._SL1500_.jpg"
        price="$12.99"
        rating={5}
      />
       <Product
        id="123456"
        title="VR Headset Compatible with iPhone & Android Phone - Universal Virtual Reality Goggles - Play Your Best Mobile Games 360 Movies with Soft & Comfortable New 3D VR Glasses |"
        image="https://images-na.ssl-images-amazon.com/images/I/913t4R2zEmL._SL1500_.jpg"
        price="$12.99"
        rating={5}
      />
       <Product
        id="123456"
        title="VR Headset Compatible with iPhone & Android Phone - Universal Virtual Reality Goggles - Play Your Best Mobile Games 360 Movies with Soft & Comfortable New 3D VR Glasses |"
        image="https://images-na.ssl-images-amazon.com/images/I/913t4R2zEmL._SL1500_.jpg"
        price="$12.99"
        rating={5}
      />
      </div>
    
    </div>
  );
}

export default Home;
