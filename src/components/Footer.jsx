import React from "react";
import styles from "./Footer.module.css";
import logo from "../assets/nav-logo.png";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { MdAddCall } from "react-icons/md";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerRow}>
          <div className={styles.logoSection}>
            <img
              src={logo}
              alt="Code Nexus Logo"
              className={styles.footerLogo}
            />
          </div>
          <div className={styles.contactSection}>
            <h3>Contact Us</h3>
            <p>
              <a href="https://wa.me/1234567890">
                <FaWhatsapp />
              </a>
              <a href="mailto:info@codenexus.com">
                <IoIosMail />
              </a>
              <a href="tel:+1234567890">
                <MdAddCall />
              </a>
            </p>
          </div>
          <div className={styles.addressSection}>
            <h3>Our Address</h3>
            <p>🌍 123 Learning Lane, Education City, EC 12345</p>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>© 2024 Code Nexus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
