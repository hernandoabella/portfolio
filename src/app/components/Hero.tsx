/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <section className="bg-white  py-20">
      <div className="container mx-auto text-center ">
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
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold transition duration-300 mx-2">
          View Projects
        </button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold transition duration-300 mx-2">
          Download CV
        </button>
      </div>
    </section>
  );
};

export default Hero;
