import React from 'react';


// ... importa las demás imágenes ...

const Toolbox: React.FC = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Toolbox</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* HTML */}
          <div className="bg-white p-4 rounded-lg shadow">
            
            <h3 className="text-lg font-semibold">HTML5</h3>
            <p className="text-gray-600">Description of your HTML5 proficiency and any relevant details.</p>
          </div>

          {/* CSS */}
          <div className="bg-white p-4 rounded-lg shadow">
            
            <h3 className="text-lg font-semibold">CSS3</h3>
            <p className="text-gray-600">Description of your CSS3 proficiency and any relevant details.</p>
          </div>

          {/* Otras habilidades/herramientas */}
          {/* Sigue el mismo patrón para las demás habilidades/herramientas */}
        </div>
      </div>
    </section>
  );
};

export default Toolbox;
