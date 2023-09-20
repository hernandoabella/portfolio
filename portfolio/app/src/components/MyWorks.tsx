// src/components/MyWorks.tsx
import React from 'react';

const MyWorks: React.FC = () => {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold mb-4">My Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Proyecto 1 */}
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Project 1</h3>
            <p className="text-gray-600">Description of your project. You can mention the technologies used, your role, and any relevant details. Include a link or button for more information.</p>
            <a href="#" className="mt-2 text-blue-500 hover:underline block">Learn More</a>
          </div>

          {/* Proyecto 2 */}
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Project 2</h3>
            <p className="text-gray-600">Description of your project. You can mention the technologies used, your role, and any relevant details. Include a link or button for more information.</p>
            <a href="#" className="mt-2 text-blue-500 hover:underline block">Learn More</a>
          </div>

          {/* Proyecto 3 */}
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Project 3</h3>
            <p className="text-gray-600">Description of your project. You can mention the technologies used, your role, and any relevant details. Include a link or button for more information.</p>
            <a href="#" className="mt-2 text-blue-500 hover:underline block">Learn More</a>
          </div>

          {/* Agrega más proyectos según sea necesario */}
        </div>
      </div>
    </section>
  );
};

export default MyWorks;
