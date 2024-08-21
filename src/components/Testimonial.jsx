import React, { useState, useEffect } from "react";
import styles from "./Testimonial.module.css";

import student1 from "../assets/student1.png";
import student2 from "../assets/student2.png";
import student3 from "../assets/student3.png";
import student4 from "../assets/student4.png";

const testimonials = [
  {
    image: student1,
    quote: "This course changed my career!",
    name: "Rohan Bansal",
  },
  {
    image: student2,
    quote: "The faculty's experience is unmatched.",
    name: "Amelia",
  },
  {
    image: student3,
    quote: "I gained the skills I needed to excel.",
    name: "Alexander",
  },
  {
    image: student4,
    quote: "I am glad I got a chance to learn from Code Nexus.",
    name: "Daniel",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <h2>What Our Students Say</h2>
      <div className={styles.slideshow}>
        <div className={styles.slides}>
          {testimonials
            .slice(currentIndex, currentIndex + 3)
            .map((testimonial, index) => (
              <div key={index} className={styles.slide}>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className={styles.image}
                />
                <p className={styles.quote}>"{testimonial.quote}"</p>
                <p className={styles.name}>- {testimonial.name}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
