import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import WorkExperience from '../components/WorkExperience';
import Toolbox from '../components/Toolbox';
import MyWorks from '../components/MyWorks';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <WorkExperience />
      <Toolbox />
      <MyWorks />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </div>
  )
}
