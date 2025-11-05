import React from 'react';
import './Pages.css'

function Home() {
  return (
    <div className="home-container">
      <div className="hero">
        <h1>We  lcome</h1>
        <h2>to Leafora</h2>
        <p>Freshly brewed happiness in every cup 🍹</p>

        <div className="product-gallery">
          <div className="porduct-card">
            <img src="../image/bubble-tea1.jpg" alt="" />
            <img src="../image/bubble-tea1.jpg" alt="" />
            <img src="../image/bubble-tea1.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
