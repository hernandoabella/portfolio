import React from "react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-10 px-10 dark:bg-slate-900">
      <div className="container mx-auto">
        <h2 className="pb-10 text-3xl sm:text-4xl font-extrabold tracking-tight">
          Contact Me
        </h2>
        <p className="text-lg mb-8">
          Have a question or want to discuss a project? Feel free to get in
          touch with me.
        </p>
        <div>
          <div className="py-4 text-xl flex items-center gap-2">
            <i className="fa-solid fa-phone dark:text-slate-500"></i>+57-304-393-2597
          </div>
          <div className="py-4 text-xl flex items-center gap-2">
            <i className="fa-sharp fa-solid fa-envelopes dark:text-slate-500"></i>
            hernandoabella@gmail.com
          </div>
          <div className="py-4 text-xl flex items-center gap-2">
            <i className="fa-sharp fa-solid fa-location-dot dark:text-slate-500"></i>Santa Marta,
            Colombia
          </div>
          <div className="py-4 text-xl flex items-center gap-2">
            <i className="fa-solid fa-clock dark:text-slate-500"></i>9 am to 5 pm
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
