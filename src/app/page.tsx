import React from "react";
import Header from "../app/components/Header";
import Hero from "../app/components/Hero";
import Education from "../app/components/Education";
import WorkExperience from "../app/components/WorkExperience";
import Toolbox from "../app/components/Toolbox";
import MyWorks from "../app/components/MyWorks";
import Testimonials from "../app/components/Testimonials";
import Services from "../app/components/Services";
import Contact from "../app/components/Contact";
import Footer from "../app/components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Education />
      <WorkExperience />
      <Toolbox />
      <MyWorks />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
