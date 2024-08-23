import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import EnquiryForm from "./components/EnquiryForm";
import Footer from "./components/Footer";
import CoursesSection from "./components/CoursesSection";
import Testimonial from "./components/Testimonial";
import { Route, Routes } from "react-router-dom";

const Home = () => {
  const homeRef = useRef(null);
  const coursesRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (section) => {
    if (section === "support") {
      homeRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "home") {
      coursesRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "testimonials") {
      testimonialsRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "contact") {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar scrollToSection={scrollToSection} />
      <div ref={coursesRef}>
        <CoursesSection />
      </div>
      <div ref={testimonialsRef}>
        <Testimonial />
      </div>
      <div ref={homeRef}>
        <Header />
      </div>
      <div ref={contactRef}>
        <EnquiryForm />
      </div>
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default App;
