import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="bg-blue-900 text-white py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">Ready to Get Started?</h2>
        <p className="text-lg mb-8">Contact me today to discuss your project or for any inquiries. I&apos;m here to help!</p>
        <a
          href="#contact"
          className="bg-white text-blue-900 hover:bg-blue-600 hover:text-white py-2 px-6 rounded-full text-lg font-semibold transition duration-300"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default CTA;
