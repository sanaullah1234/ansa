// src/Logo.js
import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./Logo.css";

function Logo() {
  return (
    <div className="logo-container">
      <Link to="/">
        <img src="/logo.svg" alt="Logo" className="logo-image" />
      </Link>
    </div>
  );
}

export default Logo;
