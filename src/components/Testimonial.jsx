import React, { useState, useEffect } from "react";
import styles from "./Testimonial.module.css";

import student1 from "../assets/student1.png";
import student2 from "../assets/student2.png";
import student3 from "../assets/student3.png";
import student4 from "../assets/student4.png";
import student5 from "../assets/student5.png";
import student6 from "../assets/student6.png";
import student7 from "../assets/student7.png";
import student8 from "../assets/student8.png";
import student9 from "../assets/student9.png";
import student10 from "../assets/student10.jpeg";
import student11 from "../assets/student11.png";
import student12 from "../assets/student12.png";

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
  {
    image: student5,
    quote: "The course content was relevant and up-to-date.",
    name: "Sophia",
  },
  {
    image: student6,
    quote: "The hands-on projects made all the difference.",
    name: "Liam",
  },
  {
    image: student7,
    quote: "I appreciated the personalized attention from the instructors.",
    name: "Ethan",
  },
  {
    image: student8,
    quote: "The flexible schedule allowed me to learn at my own pace.",
    name: "Olivia",
  },
  {
    image: student9,
    quote: "I now feel confident in my technical skills.",
    name: "Miraj",
  },
  {
    image: student10,
    quote: "This course prepared me well for the industry.",
    name: "Noah",
  },
  {
    image: student11,
    quote: "The support from the faculty was exceptional.",
    name: "Orion",
  },
  {
    image: student12,
    quote: "The course exceeded my expectations in every way.",
    name: "Zephyr",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 >= testimonials.length ? 0 : prevIndex + 1
    );
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

          {currentIndex + 3 > testimonials.length &&
            testimonials
              .slice(0, (currentIndex + 3) % testimonials.length)
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
