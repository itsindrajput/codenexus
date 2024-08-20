import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import EnquiryForm from "./components/EnquiryForm";
import Footer from "./components/Footer";
import CoursesSection from "./components/CoursesSection";
import Testimonial from "./components/Testimonial";

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <CoursesSection></CoursesSection>
      <Testimonial></Testimonial>
      <EnquiryForm></EnquiryForm>
      <Header></Header>
      <Footer></Footer>
    </>
  );
};

export default App;
