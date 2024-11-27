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
                src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg"
                alt="Bruschetta"
              />
              <h3>Bruschetta</h3>
              <p>Grilled bread topped with garlic, tomatoes, and olive oil.</p>
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
            <div className="menu-card">
              <img
                src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="Stuffed Mushrooms"
              />
              <h3>Stuffed Mushrooms</h3>
              <p>Button mushrooms stuffed with cheese and herbs.</p>
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
            <div className="menu-card">
              <img
                src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="Stuffed Mushrooms"
              />
              <h3>Stuffed Mushrooms</h3>
              <p>Button mushrooms stuffed with cheese and herbs.</p>
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
            <div className="menu-card">
              <img
                src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
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
                src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?cs=srgb&dl=pexels-ella-olsson-572949-1640772.jpg&fm=jpg"
                alt="Grilled Salmon"
              />
              <h3>Grilled Salmon</h3>
              <p>Perfectly grilled salmon served with seasonal vegetables.</p>
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
            <div className="menu-card">
              <img
                src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?cs=srgb&dl=pexels-ella-olsson-572949-1640772.jpg&fm=jpg"
                alt="Grilled Salmon"
              />
              <h3>Grilled Salmon</h3>
              <p>Perfectly grilled salmon served with seasonal vegetables.</p>
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
            <div className="menu-card">
              <img
                src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?cs=srgb&dl=pexels-ella-olsson-572949-1640772.jpg&fm=jpg"
                alt="Grilled Salmon"
              />
              <h3>Grilled Salmon</h3>
              <p>Perfectly grilled salmon served with seasonal vegetables.</p>
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
            <div className="menu-card">
              <img
                src="https://www.foodiesfeed.com/wp-content/uploads/2023/04/strawberry-milk-splash.jpg"
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
                src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="Chocolate Lava Cake"
              />
              <h3>Chocolate Lava Cake</h3>
              <p>Rich chocolate cake with a gooey molten center.</p>
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
            <div className="menu-card">
              <img
                src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="Chocolate Lava Cake"
              />
              <h3>Chocolate Lava Cake</h3>
              <p>Rich chocolate cake with a gooey molten center.</p>
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
            <div className="menu-card">
              <img
                src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="Chocolate Lava Cake"
              />
              <h3>Chocolate Lava Cake</h3>
              <p>Rich chocolate cake with a gooey molten center.</p>
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
            <div className="menu-card">
              <img
                src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?resize=768,574"
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
