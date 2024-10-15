import React from 'react';

function Skills() {
  return (
    <section id="skill-section">
      <h1 className="section-heading">My skills</h1>
      <div className="skills-container">
        
        <div className="skill-information">
          <p className="skill-name">HTML5</p>
          <progress value="85" max="100"></progress>
        </div>
        <div className="skill-information">
          <p className="skill-name">CSS3</p>
          <progress value="75" max="100"></progress>
        </div>
        <div className="skill-information">
          <p className="skill-name">JavaScript</p>
          <progress value="55" max="100"></progress>
        </div>
        <div className="skill-information">
          <p className="skill-name">React</p>
          <progress value="45" max="100"></progress>
        </div>
        <div className="skill-information">
          <p className="skill-name">Bootstrap</p>
          <progress value="55" max="100"></progress>
        </div>
        <div className="skill-information">
          <p className="skill-name">PHP</p>
          <progress value="55" max="100"></progress>
        </div>
        <div className="skill-information">
          <p className="skill-name">Python</p>
          <progress value="25" max="100"></progress>
        </div>
        <div className="skill-information">
          <p className="skill-name">MySQL</p>
          <progress value="65" max="100"></progress>
        </div>
        <div className="skill-information">
          <p className="skill-name">C++</p>
          <progress value="35" max="100"></progress>
        </div>
        <div className="skill-information">
          <p className="skill-name">C#</p>
          <progress value="35" max="100"></progress>
        </div>
           
      </div>
    </section>
  );
}

export default Skills;
