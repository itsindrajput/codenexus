import React from "react";
import styles from "./Footer.module.css"; // Import CSS module

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2024 Your Institution. All rights reserved.</p>
      <p>Contact us at: contact@yourinstitution.com</p>
      <p>Follow us on social media:</p>
      <ul className={styles.socialMedia}>
        <li>
          <a href="#">Facebook</a>
        </li>
        <li>
          <a href="#">Twitter</a>
        </li>
        <li>
          <a href="#">LinkedIn</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
