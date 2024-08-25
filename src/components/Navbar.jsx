import React, { useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../assets/nav-logo.png";

const Navbar = ({ scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContent}>
        <img src={logo} alt="Code Nexus Logo" className={styles.navLogo} />
        <button className={styles.toggleButton} onClick={handleToggle}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>
      </div>
      <ul className={`${styles.navList} ${isOpen ? styles.active : ""}`}>
        <li className={styles.home_special}>
          <button
            onClick={() => {
              scrollToSection("home");
              handleToggle();
            }}
          >
            Home
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              scrollToSection("testimonials");
              handleToggle();
            }}
          >
            Testimonials
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              scrollToSection("support");
              handleToggle();
            }}
          >
            Support
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              scrollToSection("contact");
              handleToggle();
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
