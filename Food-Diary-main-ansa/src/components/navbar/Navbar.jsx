import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        {/* Left-aligned section */}
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">
              COMMUNITY
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              BOOKS
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              RECIPE INDEX
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              POPULAR
            </a>
          </li>
        </ul>

        {/* Right-aligned section */}
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link register-link" href="#">
              <i className="fas fa-sign-in-alt login-icon"></i> REGISTER
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link login-link" href="#">
              <i className="fas fa-user user-icon"></i> LOGIN
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
