import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../images/logo.png";
import LoginPopup from "../LoginPopup/LoginPopup";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for toggling menu
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
  };

  const handleMenuClick = () => {
    const token = localStorage.getItem("authToken");
    if (token) {
      navigate("/menu");
    } else {
      alert("Please log in first to access the menu.");
      setShowLogin(true);
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

        {/* Hamburger Menu */}
        <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Links */}
        <ul className={`navbar-links ${isMenuOpen ? "show" : ""}`}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
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
              onClick={() => setShowLogin(true)}
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
