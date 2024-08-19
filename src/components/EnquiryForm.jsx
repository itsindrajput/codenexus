import React from "react";
import styles from "./EnquiryForm.module.css";

const EnquiryForm = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Get in Touch</h2>
      <form className={styles.form}>
        <div className={styles.row}>
          <label className={styles.label}>
            Name:
            <input type="text" name="name" className={styles.input} />
          </label>
          <label className={styles.label}>
            Email:
            <input type="email" name="email" className={styles.input} />
          </label>
        </div>
        <div className={styles.row}>
          <label className={styles.label}>
            Course of Interest:
            <select name="course" className={styles.select}>
              <option value="Java-Full-Stack">Java Full Stack</option>
              <option value="Data-Structures-&-Algorithms">
                Data Structures & Algorithms
              </option>
              <option value="Machine-Learning">Machine Learning</option>
              <option value="Python-for-Data-Science">
                Python for Data Science
              </option>
            </select>
          </label>
          <label className={styles.label}>
            Preferred Batch Size:
            <select name="batchSize" className={styles.select}>
              <option value="one-on-one">One-on-One</option>
              <option value="5">5 Students</option>
              <option value="10">10 Students</option>
            </select>
          </label>
        </div>
        <div className={styles.row}>
          <label className={styles.label} style={{ flex: 1 }}>
            Message:
            <textarea name="message" className={styles.textarea}></textarea>
          </label>
          <div className={styles.buttonWrapper}>
            <button type="submit" className={styles.button}>
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EnquiryForm;
