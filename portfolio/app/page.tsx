import React from 'react';
import Header from './src/components/Header';
import Hero from './src/components/Hero';
import WorkExperience from './src/components/WorkExperience';
import Toolbox from './src/components/Toolbox';
import MyWorks from './src/components/MyWorks';
import Testimonials from './src/components/Testimonials';
import CTA from './src/components/CTA';
import Contact from './src/components/Contact';
import Footer from './src/components/Footer';

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
