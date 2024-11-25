import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Components/landing/homepage";
import MenuPage from "./Components/MenuPage/Menupage";

function App() {
  return (
    <Router>
      {/* Navbar is always displayed */}
      <Navbar />

      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
    </Router>
  );
}

export default App;
