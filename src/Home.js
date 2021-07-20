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
        id="123456000"
        title="Roku Express | HD Streaming Media Player with High Speed HDMI Cable and Simple Remote"
        image="https://images-na.ssl-images-amazon.com/images/I/81%2B0dqbDGWL._AC_SL1500_.jpg"
        price={25.99}
        rating={5}
      />
       <Product
        id="123456"
        title="VR Headset Compatible with iPhone & Android Phone - Universal Virtual Reality Goggles - Play Your Best Mobile Games 360 Movies with Soft & Comfortable New 3D VR Glasses |"
        image="https://m.media-amazon.com/images/I/51odsYyURHL._AC_UY654_FMwebp_QL65_.jpg"
        price={399.99}
        rating={5}
      />
       <Product
        id="123456"
        title="HIRAM 4-16x50 AO Rifle Scope Combo with Green Laser, Reflex Sight, and 5 Brightness Modes Flashlight"
        image="https://m.media-amazon.com/images/I/71OPdCGrWpL._AC_UL960_FMwebp_QL65_.jpg"
        price={114.99}
        rating={5}
      />
      </div>
      <div className="home_row">
      <Product
        id="1234533"
        title="MAGCOMSEN Men's Tactical Military Shirts Camo Shirt 1/4 Zip Long Sleeve Shirt with Pockets"
        image="https://m.media-amazon.com/images/I/71wUuWnkxrL._AC_UL960_FMwebp_QL65_.jpg"
        price={56.99}
        rating={3}
      />
       <Product
        id="12345334"
        title="VR Headset Compatible with iPhone & Android Phone - Universal Virtual Reality Goggles - Play Your Best Mobile Games 360 Movies with Soft & Comfortable New 3D VR Glasses |"
        image="https://cdn.arstechnica.net/wp-content/uploads/2020/01/vrglasses2-640x427.jpeg"
        price={24.99}
        rating={5}
      />
      </div>
    
    </div>
  );
}

export default Home;
