import React from "react";
import styles from "./CoursesSection.module.css";
import whatsappIcon from "../assets/whatsapp.png";

const CoursesSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.whyChooseUs}>
        <h2 className={styles.heading}>Why Choose Our Courses?</h2>
        <ul className={styles.points}>
          <li>🎓 Over 20+ Years of Expertise</li>
          <li>👨‍🎓 Trained 10,000+ Students</li>
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
        <div className={styles.courses}>
          <div className={styles.course}>
            <h3>Full Stack Java Development</h3>
            <p>For Beginners & Experienced Professionals</p>
            <a
              href="https://wa.me/1234567890?text=I'm interested in the Java Full Stack course."
              className={styles.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={whatsappIcon}
                alt="Chat on WhatsApp"
                className={styles.whatsappIcon}
              />
              Chat on WhatsApp
            </a>
          </div>
          <div className={styles.course}>
            <h3>Data Structures & Algorithms</h3>
            <p>For Beginners & College Curriculum</p>
            <a
              href="https://wa.me/1234567890?text=I'm interested in the Data Structures & Algorithms course."
              className={styles.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={whatsappIcon}
                alt="Chat on WhatsApp"
                className={styles.whatsappIcon}
              />
              Chat on WhatsApp
            </a>
          </div>
          <div className={styles.course}>
            <h3>Full Stack Web Development</h3>
            <p>For Beginners & Experienced Professionals</p>
            <a
              href="https://wa.me/1234567890?text=I'm interested in the Machine Learning course."
              className={styles.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={whatsappIcon}
                alt="Chat on WhatsApp"
                className={styles.whatsappIcon}
              />
              Chat on WhatsApp
            </a>
          </div>
          <div className={styles.course}>
            <h3>Python for Data Science</h3>
            <p>For Beginners & Experienced Professionals</p>
            <a
              href="https://wa.me/1234567890?text=I'm interested in the Python for Data Science course."
              className={styles.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={whatsappIcon}
                alt="Chat on WhatsApp"
                className={styles.whatsappIcon}
              />
              Chat on WhatsApp
            </a>
          </div>
        </div>
        <button className={styles.demoButton}>Book a Demo Session</button>
      </div>
    </div>
  );
};

export default CoursesSection;
