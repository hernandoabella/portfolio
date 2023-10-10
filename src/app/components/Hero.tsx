/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <section className="dark:bg-slate-900 py-20 px-10">
      <div className="mx-auto text-center ">
        <Image
          src="/profile.png"
          alt="Hernando Abella"
          width={128}
          height={128}
          className="mx-auto rounded-full w-32 h-32 mb-4"
        />
        <h1 className="text-4xl font-semibold mb-4">Hernando Abella</h1>
        <p className="text-lg mb-8">Full-Stack Engineer</p>
        <p className="text-lg mb-8">
          I'm a dynamic Full-Stack engineer with a passion for crafting
          exceptional solutions. Let's redefine what's possible together!
        </p>
        <div className="flex sm:justify-center sm:flex-row flex-col gap-4 mt-10">
          <a
            href="#projects"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold transition duration-300"
          >
            View Projects
          </a>

          <a
            href="/hernandoabella-cv.pdf"
            download={true}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold transition duration-300"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
