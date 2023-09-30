import React from "react";

const Education: React.FC = () => {
  return (
    <section className="bg-gray-100 py-10 px-10">
      <div className="container mx-auto">
        <h2 className="py-4 text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight dark:text-slate-50">
          Education 🧑‍🎓
        </h2>
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          <li>
            <div className="mb-10 ml-4 bg-white p-4 rounded-lg shadow-lg">
              <div className="absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <h3 className="text-xl font-semibold mb-2">
                Bachelor of Science in Computer Science
              </h3>
              <p className="text-gray-600">
                University of Tampa CSSME and CNHS
              </p>
              <p className="text-blue-500 text-sm mt-2">
                August 2013 - June 2018
              </p>

              <ul className="list-disc list-inside mt-4">
                <li className="my-2">
                  Completed a comprehensive curriculum focused on computer
                  science fundamentals, algorithms, data structures, and
                  software engineering principles.
                </li>
                <li className="my-2">
                  Gained hands-on experience in programming languages such as
                  Java, C++, and Python.
                </li>
                <li className="my-2">
                  Worked on several team projects, including web development and
                  database management, to apply theoretical knowledge to
                  practical solutions.
                </li>
                <li className="my-2">
                  Developed problem-solving and critical thinking skills through
                  coursework and coding assignments.
                </li>
              </ul>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default Education;
