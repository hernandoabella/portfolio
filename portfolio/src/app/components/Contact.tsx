import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-gray-100 py-10">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
        <p className="text-lg mb-8">Have a question or want to discuss a project? Feel free to get in touch with me.</p>
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600">Name</label>
            <input type="text" id="name" name="name" className="w-full border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">Email</label>
            <input type="email" id="email" name="email" className="w-full border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-600">Message</label>
            <textarea id="message" name="message" rows={4} className="w-full border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
