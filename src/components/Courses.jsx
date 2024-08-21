import React from "react";
import styles from "./Courses.module.css";

const Courses = () => {
  return (
    <>
      <ul className={styles.points}>
        <li>🖥️ Full Stack Development (Python and Java)</li>
        <li>🤖 Machine Learning</li>
        <li>📈 Data Analyst</li>
        <li>💻 C, C++, Java (Core + Adv.), Python (Core + Adv.) </li>
        <li>🌐 Web Development (Basics to Advance)</li>
        <li>🧩 Data Structures & Algorithms</li>
        <li>
          🏢 Company Specific Training (Cognizant, Google, Accenture,
          Capgemini...)
        </li>
        <li>📲 For any Specific Courses, WhatsApp us</li>
      </ul>
    </>
  );
};

export default Courses;
