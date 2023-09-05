import React from "react";

const HeroSection = () => {
  return (
    <div>
      <main>
        <div className="content">
          <h1>Delicious Delight</h1>
          <p className="text">
            Explore a World of Culinary Creations on Our Food Extravaganza
            Platform! Welcome to UCisious, where every bite is a journey to
            pizza paradise. Explore our mouthwatering menu, crafted with love
            and fresh ingredients. It's time to indulge.
          </p>
          <div className="order">
            <button>Order Now</button>
          </div>
          <div className="social-icon">
            <p className="text"> Visit Us</p>
            <a href="https://www.instagram.com/ucisious/">
              {" "}
              <img src="/images/instagram.png" alt=""></img>
            </a>
            <a href="https://youtube.com/@ucisious?si=-i03_b0DLQR1Iv2D">
              <img src="/images/youtube.png" alt=""></img>
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/pizza.avif" alt=""></img>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;
