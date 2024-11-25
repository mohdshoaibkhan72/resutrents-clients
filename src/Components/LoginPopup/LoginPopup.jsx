import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./LoginPopup.css";

const LoginPopup = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState(""); // For Sign Up
  const [error, setError] = useState(""); // General error message
  const [emailError, setEmailError] = useState(""); // Specific field error
  const [passwordError, setPasswordError] = useState(""); // Specific field error
  const [nameError, setNameError] = useState(""); // Specific field error (Sign Up)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const API_URL = "https://resturent-test.onrender.com";

  // Initialize Google API (New GIS API)
  useEffect(() => {
    const initializeGoogleAPI = () => {
      if (!window.google || !window.google.accounts) {
        console.error("Google Identity Services API not loaded.");
        return;
      }

      window.google.accounts.id.initialize({
        client_id:
          "649980254584-mul64dr5a2keki6kjg10nurevv0riq8p.apps.googleusercontent.com",
        callback: handleGoogleSignIn,
      });

      window.google.accounts.id.renderButton(
        document.getElementById("google-signin-button"),
        {
          theme: "outline",
          size: "large",
        }
      );
    };

    initializeGoogleAPI();
  }, []);

  // Handle Google Sign-In
  const handleGoogleSignIn = async (response) => {
    try {
      const idToken = response.credential;

      const res = await axios.post(
        `${API_URL}/google-login`,
        { token: idToken },
        { headers: { "Content-Type": "application/json" } }
      );

      localStorage.setItem("authToken", res.data.accessToken);
      setIsLoggedIn(true);
      setShowLogin(false);
      navigate("/menu");
    } catch (error) {
      console.error("Google Sign-In Error:", error);
      setError("Google Sign-In failed. Please try again.");
    }
  };

  // Handle form submission for Login/Sign Up
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset errors before validation
    setEmailError("");
    setPasswordError("");
    setNameError("");

    // Form validation
    let isValid = true;

    if (!email) {
      setEmailError("Email is required.");
      isValid = false;
    }

    if (!password) {
      setPasswordError("Password is required.");
      isValid = false;
    }

    if (currentState === "Sign Up" && !name) {
      setNameError("Name is required.");
      isValid = false;
    }

    if (!isValid) {
      setError("Please fill in all required fields.");
      return;
    }

    try {
      const endpoint = currentState === "Login" ? "/login" : "/register";
      const payload =
        currentState === "Login"
          ? { email, password }
          : { fullName: name, email, password };

      const response = await axios.post(`${API_URL}${endpoint}`, payload, {
        headers: { "Content-Type": "application/json" },
      });

      if (currentState === "Login") {
        localStorage.setItem("authToken", response.data.accessToken);
        setIsLoggedIn(true);
        setShowLogin(false);
        navigate("/menu");
      } else {
        setCurrentState("Login");
        setError("Account created successfully. Please log in.");
      }
    } catch (error) {
      console.error("Error during submission:", error);
      if (error.response) {
        setError(error.response.data.message || "Login failed.");
      } else {
        setError("Unable to connect to the server.");
      }
    }
  };

  // Handle Logout
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
    navigate("/");
  };

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsLoggedIn(true);
      navigate("/menu");
    }
  }, [navigate]);

  return (
    <div className="login-popup">
      {!isLoggedIn ? (
        <form className="login-popup-container" onSubmit={handleSubmit}>
          <div className="login-popup-title">
            <h2>{currentState}</h2>
            <i
              className="fas fa-times close-icon"
              onClick={() => setShowLogin(false)}
            ></i>
          </div>
          <div className="login-popup-input">
            {currentState === "Sign Up" && (
              <>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                {nameError && <p className="error-message">{nameError}</p>}
              </>
            )}
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {emailError && <p className="error-message">{emailError}</p>}
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {passwordError && <p className="error-message">{passwordError}</p>}
          </div>
          <button type="submit">
            {currentState === "Sign Up" ? "Create Account" : "Login"}
          </button>

          <div className="login-popup-google">
            <p>Or sign in with:</p>
            <div id="google-signin-button"></div>
          </div>

          {error && <p className="error-message">{error}</p>}

          {currentState === "Login" ? (
            <p>
              Don't have an account?{" "}
              <span onClick={() => setCurrentState("Sign Up")}>Sign Up</span>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <span onClick={() => setCurrentState("Login")}>Login</span>
            </p>
          )}
        </form>
      ) : (
        <div className="logged-in-container">
          <h2>Welcome Back!</h2>
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default LoginPopup;
