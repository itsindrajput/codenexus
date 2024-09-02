import React from "react";
import { useMediaQuery } from "react-responsive";
import styles from "./CoursesSection.module.css";
import Courses from "./Courses";
import whatsapp_icon from "../assets/whatsapp.png";
import MobileCard from "./MobileCard";

const CoursesSection = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className={styles.container}>
      {/* Conditionally render MobileCard only for mobile view */}
      {isMobile && <MobileCard />}

      {/* available_Courses_mobo render only for mobile view */}
      <div className={styles.available_Courses_mobo}>
        <div className={styles.availableCourses}>
          <h2 className={styles.heading}>Available Courses</h2>
          <Courses />
          <button className={styles.demoButton}>Book a Demo Session</button>
        </div>
      </div>

      <div className={styles.whyChooseUs}>
        <h2 className={styles.heading}>Why Choose Us?</h2>
        <ul className={styles.points}>
          <li>🎓 Over 20+ Years of Expertise</li>
          <li>👨‍🎓 Trained 10,000+ Students</li>
          <li>👨 Trained Students are from Abroad as well</li>
          <li>🔄 Interactive & Hands-On Learning</li>
          <li>🥇 Experienced Faculty from Academia & Industry</li>
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

      {/* available_Courses_desk render only for desktop view */}
      <div className={styles.available_Courses_desk}>
        <div className={styles.availableCourses}>
          <h2 className={styles.heading}>Available Courses</h2>
          <Courses />
          <button className={styles.demoButton}>Book a Demo Session</button>
        </div>
      </div>

      {/* Conditionally render the "Get Started" section only for larger screens */}
      {!isMobile && (
        <div className={styles.whyChooseUs}>
          <h2 className={styles.heading}>Get Started</h2>
          <div className={styles.whatsappAndTxt}>
            <p className={styles.instruction}>
              To take the course, WhatsApp the details below to{" "}
              <span>+91 8456781221</span>
            </p>
            <div className={styles.whatsappContainer}>
              <a
                href="https://wa.me/yourwhatsappnumber"
                className={styles.whatsappLink}
              >
                <img
                  src={whatsapp_icon}
                  alt="WhatsApp"
                  className={styles.whatsappIcon}
                />
              </a>
            </div>
          </div>
          <ul className={styles.points_for}>
            <li>🎓 Full Name</li>
            <li>📞 Contact Number</li>
            <li>📋 Course Name</li>
            <li className={styles.batchSize}>
              📅 Preferred Batch Size
              <div className={styles.dots}>
                <span className={styles.dot}> 1</span>
                <span className={styles.dot}> 5</span>
                <span className={styles.dot}>10</span>
              </div>
            </li>
            <li>🕒 Desired Timings</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default CoursesSection;
