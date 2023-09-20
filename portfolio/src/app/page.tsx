import React from 'react';
import Header from '../app/components/Header';
import Hero from '../app/components/Hero';
import WorkExperience from '../app/components/WorkExperience';
import Toolbox from '../app/components/Toolbox';
import MyWorks from '../app/components/MyWorks';
import Testimonials from '../app/components/Testimonials';
import CTA from '../app/components/CTA';
import Contact from '../app/components/Contact';
import Footer from '../app/components/Footer';

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
