import React from 'react';

import './About.styles.css';

const About = () => {
  return (
    <div className="about-page-container">
      <h1 className="title">About me</h1>
      <p className="about-page-paragraph">
        My name is Manny. I design and build software applications.
        I live in New Jersey but I call many places home.
        I love what i do, and adore the creative process; it is addictive 
        and can give never ending possibilities. Be thrilled to hear from 
        you regarding a software project.  
      </p>
      <p className="about-page-paragraph">
        I began my journey through computer science at the age of 15 by searching 
        for techie online tutorials. I then went to a technical high school where 
        I completed a technical education program in computer science.
        After Hhigh school I went on to study for 3 years at Montclair State University, 
        graduating with a Bachelors Degree in Computer Science in 2016.
      </p>
    </div>
  );
};

export default About;
