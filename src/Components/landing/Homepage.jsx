import React from "react";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Best food for your taste</h1>
          <p>
            Discover delectable cuisine and unforgettable moments in our
            welcoming, culinary haven
          </p>
          <a href="#menu" className="hero-button">
            Explore Menu
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose Us?</h2>
        <div className="features-container">
          <div className="feature">
            <h3>Delicious Cuisine</h3>
            <p>
              Our chefs craft mouthwatering dishes using the finest ingredients
              to tantalize your taste buds.
            </p>
          </div>
          <div className="feature">
            <h3>Cozy Ambience</h3>
            <p>
              Enjoy your meals in a warm, inviting atmosphere perfect for any
              occasion.
            </p>
          </div>
          <div className="feature">
            <h3>Exceptional Service</h3>
            <p>
              Our staff is dedicated to providing you with an unforgettable
              dining experience.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 Bistro Bliss. All rights reserved.</p>
        <a href="#contact">Contact Us</a>
      </footer>
    </div>
  );
}

export default HomePage;
