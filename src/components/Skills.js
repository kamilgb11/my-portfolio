import React, { useRef, useEffect } from 'react';

function Skills({ lang }) {
  const translations = {
    en: 'My skills',
    pl: 'Moje Umiejętności',
  };
  const skillRefs = useRef([]);

  useEffect(() => {
    const currentSkillRefs = skillRefs.current;

    const handleScroll = () => {
      currentSkillRefs.forEach((ref, index) => {
        if (ref && ref.getBoundingClientRect().top < window.innerHeight) {
          ref.classList.add('visible');
        } else {
          ref.classList.remove('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="skill-section">
      <h1 className="section-heading">{translations[lang]}</h1>
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
            className="skill-information"
            key={skill.name}
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
