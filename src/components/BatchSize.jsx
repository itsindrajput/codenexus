import React from "react";
import styles from "./BatchSize.module.css";

const BatchSize = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Our Exclusive Batch Sizes</h2>
      <div className={styles.batchSizes}>
        <div className={styles.batchSize}>One-on-One</div>
        <div className={styles.batchSize}>5 Students</div>
        <div className={styles.batchSize}>10 Students</div>
      </div>
    </div>
  );
};

export default BatchSize;
