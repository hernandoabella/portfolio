import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Testimonio 1 */}
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="text-gray-600">"I had a great experience working with [Your Name]. Their expertise and professionalism made our project a success."</p>
            <p className="font-semibold">John Doe</p>
          </div>

          {/* Testimonio 2 */}
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="text-gray-600">"I highly recommend [Your Name] for their exceptional development skills. They delivered on time and exceeded our expectations."</p>
            <p className="font-semibold">Jane Smith</p>
          </div>

          {/* Testimonio 3 */}
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="text-gray-600">"Working with [Your Name] was a pleasure. They are highly skilled and communication was excellent throughout the project."</p>
            <p className="font-semibold">Michael Johnson</p>
          </div>

          {/* Agrega más testimonios según sea necesario */}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
