// src/components/MyWorks.tsx
import React from 'react';

const MyWorks: React.FC = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto">
        <h2 className="py-4 text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight dark:text-slate-50">Showcase 🧑‍💼</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Project 1</h3>
            <p className="text-gray-600">Description of your project. You can mention the technologies used, your role, and any relevant details. Include a link or button for more information.</p>
            <a href="#" className="mt-2 text-blue-500 hover:underline block">Learn More</a>
          </div>

         
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Project 2</h3>
            <p className="text-gray-600">Description of your project. You can mention the technologies used, your role, and any relevant details. Include a link or button for more information.</p>
            <a href="#" className="mt-2 text-blue-500 hover:underline block">Learn More</a>
          </div>

         
          <div className="bg-white p-4 rounded-lg shadow">
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
