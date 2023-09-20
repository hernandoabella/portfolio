import React from 'react';

const WorkExperience: React.FC = () => {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Work Experience 💼</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="bg-blue-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold">Full Stack Developer</h3>
            <p className="text-gray-600">Smart Design Development</p>
            <p className="mt-2">
              Led architecture, design, and development of 30+ new features. Presented and converted ideas and designs with 4+ technical teams and 12+ business partners. Developed 40+ applications following Agile product development methodologies. Oversaw the development and maintenance of new products, technical documentation, and workflows. Designed, built, and automated data flows to save 10+ hours of tedious work per week.
            </p>
            <p className="text-sm mt-4 text-blue-500">September 2020–October 2022</p>
          </div>

          
          <div className="bg-blue-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold">Full Stack Developer</h3>
            <p className="text-gray-600">General Gaming</p>
            <p className="mt-2">
              Developed full-stack web applications which processed, analyzed, and rendered data visually. Liaised with back end developers, front end developers, quality assurance testers, and CTO as needed. Managed time-sensitive updates, including content changes and database upgrades. Planned, wrote, and debugged web applications and software with complete accuracy.
            </p>
            <p className="text-sm mt-4 text-blue-500">May 2016–June 2019</p>
          </div>

          
          <div className="bg-blue-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold">Junior Full Stack Developer</h3>
            <p className="text-gray-600">Crazy Lazy Apps</p>
            <p className="mt-2">
              Maximized application’s efficiency, data quality, scope, operability, and flexibility. Used various ideas from distributed computing, large-scale design, real-time data processing, data storage, ML, and AI to solve challenging dataset problems. Managed, optimized, and updated PHP databases as necessary. Developed app integration with REST / SOAP and other APIs for Google Maps, social media logins, payment processors, and other services.
            </p>
            <p className="text-sm mt-4 text-blue-500">December 2012–April 2016</p>
          </div>

          
          <div className="bg-blue-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold">Front End Developer</h3>
            <p className="text-gray-600">Tech Innovators</p>
            <p className="mt-2">
              Collaborated with UI/UX designers to create responsive and visually appealing web interfaces. Developed interactive and user-friendly features using HTML, CSS, and JavaScript. Ensured cross-browser compatibility and optimized web performance for improved user experience.
            </p>
            <p className="text-sm mt-4 text-blue-500">July 2010–March 2012</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;