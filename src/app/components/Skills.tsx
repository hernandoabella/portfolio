import React from 'react';

const Skills = () => {
  // Define tus habilidades
  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Supabase',
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Habilidades</h2>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
