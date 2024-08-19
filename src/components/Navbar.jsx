import React from "react";
import styles from "./Navbar.module.css";
import logo from "../assets/nav-logo.png";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div>
        <img src={logo} alt="Code Nexus Logo" className={styles.navLogo} />
      </div>
      <ul className={styles.navList}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#courses">Courses</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
