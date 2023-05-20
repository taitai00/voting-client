import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; Khup Taithul {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
