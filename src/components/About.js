import React from 'react';

function About() {
  return (
    <section id="about-section">
      <h1 className="section-heading">About Me</h1>
      <div className="about-container">
        <div className="message my-image">
          <img src="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg" alt="" />
        </div>
        <div className="message my-information">
          <p>I am Kamil.</p>
          <p>I am student</p>
          <p>Since age 11, I've devoted considerable time to my first computer, initiating my web development journey at 12, primarily with PHP and HTML. Concurrently, I expanded my skills into other software, SQL databases, and embarked on simple graphic design projects in forums of that era, mostly using GIMP. However, in 2016, I pivoted to mechatronics, temporarily sidelining my passion. Currently, I'm study Business Informatics as a front-end developer, also taking courses in HTML, CSS, JavaScript, Python, etc. I continually strive to hone my skills in this field.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
