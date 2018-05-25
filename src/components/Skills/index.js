import React from 'react';
import { Link } from 'react-router-dom';

import './Skills.styles.css';

const Skills = () => {
  return (
    <div className="skills-page-container">
      <h1 className="title">Skills</h1>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', height: '100%' }}>
        <p>
          My main area of expertise is Javascript full stack development.
          I build web applications using technologies like NodeJS, Express, ReactJs and MongoDB and many more.
          In addition, I have experience building PHP applications.
        </p>
        <div className="skills-list">
          <div>
            <h3 className="skill-title">Languages & DBs</h3>
            <ul style={{ listStyleType: 'none'}}>
              <li>JavaScript</li>
              <li>Java</li>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>HTML5</li>
              <li>CSS 3</li>
              <li>PHP</li>
              <li>Python</li>
              <li>C++</li>
            </ul>
          </div>
          <div>
            <h3 className="skill-title">Frameworks & Platforms</h3>
            <ul style={{ listStyleType: 'none'}}>
              <li>NodeJS</li>
              <li>React</li>
              <li>React Native</li>
              <li>Express</li>
              <li>SASS / LESS</li>
            </ul>
          </div>
        </div>
        <div>
          <p>Would like to know more?</p>
          <p>
            Please check my&nbsp;
            <a href="https://www.linkedin.com/in/mannycolon/" target="_blank" rel='noopener noreferrer' style={{ color: 'var(--red-color)'}}>LinkedIn</a> 
            &nbsp;profile or just&nbsp;
            <Link to="/contact" style={{ color: 'var(--red-color)'}}>contact</Link> me.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
