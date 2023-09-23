import React from 'react';

const Services = ({ services }) => {
  return (
    <section id="services" className="section">
      <div className="container">
        <h2 className="section-title">Nuestros Servicios</h2>
        <div className="row">
          {services.map((service) => (
            <div key={service.id} className="col-md-6 col-lg-4">
              <div className="service-item">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;