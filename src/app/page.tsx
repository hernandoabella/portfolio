import React from "react";
import Header from "../app/components/Header";
import Hero from "../app/components/Hero";
import WorkExperience from "../app/components/WorkExperience";
import Toolbox from "../app/components/Toolbox";
import MyWorks from "../app/components/MyWorks";
import Testimonials from "../app/components/Testimonials";
import Skills from "../app/components/Skills";
import Services from "../app/components/Services";
import CTA from "../app/components/CTA";
import Contact from "../app/components/Contact";
import Footer from "../app/components/Footer";

export default function Home() {
  return (
    <div>
      <div>
        <Header />
        <Hero />
        <WorkExperience />
        <Toolbox />
        <MyWorks />
        <Testimonials />
        <Skills />
        <Services
          services={[
            {
              id: 1,
              title: "Desarrollo web",
              description:
                "Creamos sitios web a medida para satisfacer tus necesidades.",
            },
            {
              id: 2,
              title: "Diseño gráfico",
              description:
                "Diseñamos gráficos y logotipos atractivos y únicos.",
            },
            {
              id: 3,
              title: "Consultoría de proyectos",
              description:
                "Brindamos asesoramiento y gestión de proyectos tecnológicos.",
            },
          ]}
        />
        <CTA />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
