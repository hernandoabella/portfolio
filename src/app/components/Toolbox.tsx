import React from 'react';

const Toolbox: React.FC = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Toolbox</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Habilidad/Herramienta 1 */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Skill/Tool 1</h3>
            <p className="text-gray-600">Description of your skill or tool. You can mention your proficiency level and any relevant details.</p>
          </div>

          {/* Habilidad/Herramienta 2 */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Skill/Tool 2</h3>
            <p className="text-gray-600">Description of your skill or tool. You can mention your proficiency level and any relevant details.</p>
          </div>

          {/* Habilidad/Herramienta 3 */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Skill/Tool 3</h3>
            <p className="text-gray-600">Description of your skill or tool. You can mention your proficiency level and any relevant details.</p>
          </div>

          {/* Agrega más habilidades/herramientas según sea necesario */}
        </div>
      </div>
    </section>
  );
};

export default Toolbox;
