import React from "react";
import styles from "./Header.module.css";
import Card from "./Card";

import image1 from "../assets/courses.png";
import image2 from "../assets/student.png";
import image3 from "../assets/placement.png";
import image4 from "../assets/certification.png";

const cardsData = [
  {
    image: image1,
    title: "Personalized",
    description: "Learning",
  },
  {
    image: image2,
    title: "International ",
    description: "Community",
  },
  {
    image: image3,
    title: "Placement ",
    description: "Support",
  },
  {
    image: image4,
    title: "Certification",
    description: "Projects",
  },
];

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.heading}>
        <span className={styles.expert}>Expert Faculty </span>{" "}
        <span className={styles.with_over}>with Over </span>
        <span className={styles.years}>20 Years </span>{" "}
        <span className={styles.excellence}>of Proven Excellence!</span>
      </h1>

      <p className={styles.alert}>
        Flexible Learning Schedule and Cutting-Edge Curriculum
      </p>

      <div className={styles.section_two}>
        {cardsData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
            index={index}
          />
        ))}
        <div className={styles.horizontalLine}></div>
        <div className={styles.verticalLine}></div>
      </div>
    </header>
  );
};

export default Header;
