import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer sticky-bottom">
      <img src="/footer.svg" alt="Footer Cover" className="footer-background" />

      <div className="footer-logo-container">
        <img src="/logo-2.svg" alt="Logo" className="footer-logo" />
        <p className="footer-text">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
