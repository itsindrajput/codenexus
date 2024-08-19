import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import BatchSize from "./components/BatchSize";
import EnquiryForm from "./components/EnquiryForm";
import Footer from "./components/Footer";
import CoursesSection from "./components/CoursesSection";
import Testimonial from "./components/Testimonial";

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <CoursesSection></CoursesSection>
      <BatchSize></BatchSize>
      <Testimonial></Testimonial>
      <EnquiryForm></EnquiryForm>
      <Footer></Footer>
    </>
  );
};

export default App;
