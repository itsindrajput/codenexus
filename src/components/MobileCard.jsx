import React from "react";
import styles from "./MobileCard.module.css";
import whatsappIcon from "../assets/whatsapp.png";

const MobileCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.textBlock}>
        <p className={styles.highlightedText}>
          20+ years of expertise and over 10k students trained, including those
          from abroad, in a variety of software courses.
        </p>
      </div>
      <div className={styles.whatsappSection}>
        <p className={styles.instruction}>
          To take the online course,
          <span className={styles.whatsapp}>
            <img
              src={whatsappIcon}
              alt="WhatsApp"
              className={styles.whatsappIcon}
            />
            WhatsApp
          </span>
          the below details at +91 8456781221.
        </p>
      </div>
      <div className={styles.details}>
        <p>
          🎓 <span>Full Name</span>
        </p>
        <p>
          📞 <span>Contact Number</span>
        </p>
        <p>
          📋 <span>Course Name</span>
        </p>
        <p>
          📅{" "}
          <span>
            Preferred Batch Size: <span className={styles.batchSize}>1</span>{" "}
            <span className={styles.batchSize}>5</span>{" "}
            <span className={styles.batchSize}>10</span>
          </span>
        </p>
        <p>
          🕒 <span>Desired Timings</span>
        </p>
        <p>
          ⬇️ <span>See below for the available courses.</span>
        </p>
      </div>
    </div>
  );
};

export default MobileCard;
