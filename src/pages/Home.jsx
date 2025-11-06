import React from "react";
import "./Pages.css";
import BubbleTea1 from "../image/bubble-tea1.png";
import BubbleTea2 from "../image/bubble-tea2.jpg";
import BubbleTea3 from "../image/bubble-tea3.jpg";

function Home() {
  return (
    <div className="home-container">
      <div className="hero">
       

        <div className="product-gallery">
          <div className="product-card">
               <h3>Bubble Tea</h3>
            <span>price: rs 200 (10% discount)</span>
            <img src={BubbleTea1} alt="" />
          </div>
          {/* <div className="product-card">
            <img src={BubbleTea2} alt="" />
             <h3>Bubble Tea</h3>
            <span>price: rs 200 (10% discount)</span>
          </div>
          <div className="product-card">
            <img src={BubbleTea3} alt="" />
             <h3>Bubble Tea</h3>
            <span>price: rs 200 (10% discount)</span> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
