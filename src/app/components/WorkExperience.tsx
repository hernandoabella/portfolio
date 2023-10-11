import React from "react";

const WorkExperience: React.FC = () => {
  return (
    <section className="dark:bg-slate-900 py-10 px-10" id="experience">
      <div className="container mx-auto">
        <h2 className="py-4 text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight dark:text-slate-50">
          Work Experience
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="relative border-l border-gray-400 dark:border-gray-700">
              <div className="mb-10 ml-4 dark:bg-slate-800 p-4 rounded-lg shadow-lg">
                <div className="absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900"></div>
                <h3 className="text-lg font-semibold">Full Stack Developer</h3>
                <p className="text-slate-600 dark:text-slate-400">Smart Design Development</p>
                <time className="text-sm mt-4 text-blue-500">
                  September 2020 – October 2022
                </time>
                <div className="mt-2">
                  <ul className="list-disc list-inside mt-4">
                    <li>
                      Led architecture, design, and development of 30+ new
                      features.
                    </li>
                    <li>
                      Presented and converted ideas and designs with 4+
                      technical teams and 12+ business partners.
                    </li>
                    <li>
                      Developed 40+ applications following Agile product
                      development methodologies.
                    </li>
                    <li>
                      Oversaw the development and maintenance of new products,
                      technical documentation, and workflows.
                    </li>
                    <li>
                      Designed, built, and automated data flows to save 10+
                      hours of tedious work per week.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mb-10 ml-4 dark:bg-slate-800 p-4 rounded-lg shadow-lg">
                <div className="absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900"></div>
                <h3 className="text-lg font-semibold">Full Stack Developer</h3>
                <p className="text-slate-600 dark:text-slate-400">General Gaming</p>
                <time className="text-sm mt-4 text-blue-500">
                  May 2016–June 2019
                </time>
                <ul className="list-disc list-inside mt-4">
                  <li>
                    Developed full-stack web applications which processed,
                    analyzed, and rendered data visually.
                  </li>
                  <li>
                    Liaised with back end developers, front end developers,
                    quality assurance testers, and CTO as needed.
                  </li>
                  <li>
                    Managed time-sensitive updates, including content changes
                    and database upgrades.
                  </li>
                  <li>
                    Planned, wrote, and debugged web applications and software
                    with complete accuracy.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <div className="relative border-l border-gray-400 dark:border-gray-700">
              <div className="mb-10 ml-4 dark:bg-slate-800 p-4 rounded-lg shadow-lg">
                <div className="absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900"></div>
                <h3 className="text-lg font-semibold">
                  Junior Full Stack Developer
                </h3>
                <p className="text-slate-600 dark:text-slate-400">Crazy Lazy Apps</p>
                <time className="text-sm mt-4 text-blue-500">
                  December 2012–April 2016
                </time>
                <ul className="list-disc list-inside mt-4">
                  <li>
                    Maximized application’s efficiency, data quality, scope,
                    operability, and flexibility.
                  </li>
                  <li>
                    Used various ideas from distributed computing, large-scale
                    design, real-time data processing, data storage, ML, and AI
                    to solve challenging dataset problems.
                  </li>
                  <li>
                    Managed, optimized, and updated PHP databases as necessary.
                  </li>
                  <li>
                    Developed app integration with REST / SOAP and other APIs
                    for Google Maps, social media logins, payment processors,
                    and other services.
                  </li>
                </ul>
              </div>
              <div className="mb-10 ml-4 dark:bg-slate-800 p-4 rounded-lg shadow-lg">
                <div className="absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900"></div>
                <h3 className="text-lg font-semibold">Front End Developer</h3>
                <p className="text-slate-600 dark:text-slate-400">Tech Innovators</p>
                <time className="text-sm mt-4 text-blue-500">
                  July 2010–March 2012
                </time>
                <div className="mt-2">
                  <ul className="list-disc list-inside mt-4">
                    <li>
                      Collaborated with UI/UX designers to create responsive and
                      visually appealing web interfaces.
                    </li>
                    <li>
                      Developed interactive and user-friendly features using
                      HTML, CSS, and JavaScript.
                    </li>
                    <li>
                      Ensured cross-browser compatibility and optimized web
                      performance for improved user experience.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
