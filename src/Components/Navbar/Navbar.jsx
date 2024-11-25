import React, { useState, useEffect } from "react";
import "./Navbar.css"; // External CSS
import logo from "../../images/logo.png";
import LoginPopup from "../LoginPopup/LoginPopup";
import { useNavigate } from "react-router-dom"; // Use useNavigate hook

function Navbar() {
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate(); // Initialize navigate function

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsLoggedIn(!!token); // Check for authToken and update login state
  }, []);

  // Handle Logout
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
  };

  // Handle Menu Click
  const handleMenuClick = () => {
    const token = localStorage.getItem("authToken");
    if (token) {
      navigate("/menu"); // Navigate to the menu page
    } else {
      alert("Please log in first to access the menu.");
      setShowLogin(true); // Open the login popup
    }
  };

  return (
    <>
      <nav className="navbar">
        {/* Logo and Name Container */}
        <div className="navbar-brand">
          <img src={logo} alt="logo" className="navbar-logo" />
          <h1 className="navbar-name">Bistro Bliss</h1>
        </div>

        {/* Links */}
        <ul className="navbar-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            {/* Menu button that triggers handleMenuClick */}
            <a onClick={handleMenuClick} className="menu-button">
              Menu
            </a>
          </li>
          <li>
            <a href="/">About Us</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>

        {/* Call to Action */}
        <div className="navbar-cta">
          {isLoggedIn ? (
            <button onClick={handleLogout} className="reserve-button">
              Logout
            </button>
          ) : (
            <button
              onClick={() => setShowLogin(true)} // Open the login popup
              className="reserve-button"
            >
              Login
            </button>
          )}
        </div>
      </nav>

      {showLogin && (
        <LoginPopup setShowLogin={setShowLogin} setIsLoggedIn={setIsLoggedIn} />
      )}
    </>
  );
}

export default Navbar;
