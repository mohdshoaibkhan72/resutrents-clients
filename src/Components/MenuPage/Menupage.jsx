import React from "react";
import "./MenuPage.css"; // External CSS file

function MenuPage() {
  return (
    <div className="menu-page">
      <header className="menu-header">
        <h1>Our Menu</h1>
        <p>Explore a wide variety of delectable dishes crafted with love.</p>
      </header>

      {/* Menu Items Section */}
      <section className="menu-items">
        <div className="menu-category">
          <h2>Appetizers</h2>
          <div className="menu-cards">
            <div className="menu-card">
              <img
                src="https://www.themealdb.com/images/media/meals/xyxwvq1487427413.jpg"
                alt="Bruschetta"
              />
              <h3>Bruschetta</h3>
              <p>Grilled bread topped with garlic, tomatoes, and olive oil.</p>
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
            <div className="menu-card">
              <img
                src="https://www.themealdb.com/images/media/meals/ysqxyv1511812251.jpg"
                alt="Stuffed Mushrooms"
              />
              <h3>Stuffed Mushrooms</h3>
              <p>Button mushrooms stuffed with cheese and herbs.</p>
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
          </div>
        </div>

        <div className="menu-category">
          <h2>Main Course</h2>
          <div className="menu-cards">
            <div className="menu-card">
              <img
                src="https://www.themealdb.com/images/media/meals/1549476104.jpg"
                alt="Grilled Salmon"
              />
              <h3>Grilled Salmon</h3>
              <p>Perfectly grilled salmon served with seasonal vegetables.</p>
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
            <div className="menu-card">
              <img
                src="https://www.themealdb.com/images/media/meals/supxxt1511813272.jpg"
                alt="Pasta Alfredo"
              />
              <h3>Pasta Alfredo</h3>
              <p>
                Classic creamy Alfredo pasta with your choice of chicken or
                mushrooms.
              </p>
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
          </div>
        </div>

        <div className="menu-category">
          <h2>Desserts</h2>
          <div className="menu-cards">
            <div className="menu-card">
              <img
                src="https://www.themealdb.com/images/media/meals/yuqwty1511814733.jpg"
                alt="Chocolate Lava Cake"
              />
              <h3>Chocolate Lava Cake</h3>
              <p>Rich chocolate cake with a gooey molten center.</p>
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
            <div className="menu-card">
              <img
                src="https://www.themealdb.com/images/media/meals/tvqxwv1511814700.jpg"
                alt="Tiramisu"
              />
              <h3>Tiramisu</h3>
              <p>
                A delightful Italian dessert layered with coffee and mascarpone.
              </p>
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
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

export default MenuPage;
