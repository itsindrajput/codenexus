import React from "react";
import styles from "./CoursesSection.module.css";

const CoursesSection = () => {
  return (
    <div className={styles.container}>
      {/* Left Section: Course Content */}
      <div className={styles.content}>
        <h2>Why Choose Our Courses?</h2>
        <p>
          Our courses are designed to provide you with the skills and knowledge
          needed to excel in today's competitive job market. Whether you're a
          beginner or an experienced professional, we have the right course for
          you.
        </p>
        <ul>
          <li>Comprehensive curriculum covering essential topics.</li>
          <li>Hands-on projects to apply your learning.</li>
          <li>Experienced instructors with industry expertise.</li>
          <li>Flexible learning options to suit your schedule.</li>
        </ul>
      </div>

      {/* Right Section: Available Courses */}
      <div className={styles.courses}>
        <h2>Available Courses</h2>
        <div className={styles.courseItem}>
          <h3>Java Full Stack</h3>
          <div className={styles.courseCategories}>
            <p>For Beginners & College Curriculum</p>
            <p>For Experienced Professionals</p>
          </div>
        </div>
        <div className={styles.courseItem}>
          <h3>Data Structures & Algorithms</h3>
          <div className={styles.courseCategories}>
            <p>For Beginners & College Curriculum</p>
            <p>For Experienced Professionals</p>
          </div>
        </div>
        <div className={styles.courseItem}>
          <h3>Machine Learning</h3>
          <div className={styles.courseCategories}>
            <p>For Beginners & College Curriculum</p>
            <p>For Experienced Professionals</p>
          </div>
        </div>
        <div className={styles.courseItem}>
          <h3>Python for Data Science</h3>
          <div className={styles.courseCategories}>
            <p>For Beginners & College Curriculum</p>
            <p>For Experienced Professionals</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesSection;
