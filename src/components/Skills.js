import React, { useEffect, useRef } from 'react';

function Skills() {
  const skillRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible'); // Usuń klasę, jeśli chcesz, aby animacja resetowała się po wyjściu z widoku
          }
        });
      },
      {
        threshold: 0.9,
      }
    );

    skillRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      skillRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="skill-section">
      <h1 className="section-heading">My skills</h1>
      <div className="skills-container">
        {[
          { name: 'HTML5', value: 85 },
          { name: 'CSS3', value: 75 },
          { name: 'JavaScript', value: 55 },
          { name: 'React', value: 45 },
          { name: 'Bootstrap', value: 55 },
          { name: 'PHP', value: 55 },
          { name: 'Python', value: 25 },
          { name: 'MySQL', value: 65 },
          { name: 'C++', value: 35 },
          { name: 'C#', value: 35 },
        ].map((skill, index) => (
          <div
            key={index}
            className="skill-information"
            ref={(el) => (skillRefs.current[index] = el)}
          >
            <p className="skill-name">{skill.name}</p>
            <progress value={skill.value} max="100"></progress>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
