import React from "react";
import styles from "./CoursesSection.module.css";
import Courses from "./Courses";
import whatsapp_icon from "../assets/whatsapp.png";

const CoursesSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.whyChooseUs}>
        <h2 className={styles.heading}>Why Choose Us?</h2>
        <ul className={styles.points}>
          <li>🎓 Over 20+ Years of Expertise</li>
          <li>👨‍🎓 Trained 10,000+ Students</li>
          <li>👨 Trained Students are from Abroad as well</li>
          <li>🌍 Dedicated to International Students</li>
          <li>📚 Experienced Faculty from Academia & Industry</li>
          <li>⏰ 24/7 Training Availability</li>
          <li>🎥 Book a Demo and Get Started</li>

          <li className={styles.learning_path}>
            <div className={styles.batch_label}>
              🧑‍🏫 Personalize Your Batch Size:
            </div>
            <div className={styles.batch_options}>
              <span className={styles.option}>One-on-One</span>
              <span className={styles.option}>Small Group (5 Students)</span>
              <span className={styles.option}>Focused Group (10 Students)</span>
            </div>
          </li>
        </ul>
      </div>

      <div className={styles.availableCourses}>
        <h2 className={styles.heading}>Available Courses</h2>
        <Courses></Courses>
        <button className={styles.demoButton}>Book a Demo Session</button>
      </div>

      <div className={styles.whyChooseUs}>
        <h2 className={styles.heading}>Get Started</h2>
        <ul className={styles.points_for}>
          <li>Join the course by sharing the details below on WhatsApp</li>
          <li>🎓 Full Name</li>
          <li>📞 Contact Number</li>
          <li>📋 Course Name</li>
          <li>📅 Preferred Batch Size</li>
          <li>🕒 Desired Timings</li>
        </ul>

        <div className={styles.whatsappSection}>
          <div>
            <a
              href="https://wa.me/yourwhatsappnumber"
              className={styles.whatsappLink}
            >
              <img
                src={whatsapp_icon}
                alt="WhatsApp"
                className={styles.whatsappIcon}
              />
              +1234567890
            </a>
          </div>
          <div>
            <a
              href="https://wa.me/yourwhatsappnumber?text=I'm interested in the course"
              className={styles.demoButton}
            >
              Register Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesSection;
