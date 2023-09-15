import React from 'react';

const WorkExperience: React.FC = () => {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Trabajo 1 */}
          <div className="bg-blue-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold">Job Title 1</h3>
            <p className="text-gray-600">Company Name 1</p>
            <p className="mt-2">Description of your work and responsibilities in this role. You can include details about the projects you worked on, skills you used, and achievements.</p>
          </div>

          {/* Trabajo 2 */}
          <div className="bg-blue-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold">Job Title 2</h3>
            <p className="text-gray-600">Company Name 2</p>
            <p className="mt-2">Description of your work and responsibilities in this role. You can include details about the projects you worked on, skills you used, and achievements.</p>
          </div>

          {/* Agrega más trabajos según sea necesario */}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
