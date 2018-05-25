import React from 'react';
import Avatar from 'material-ui/Avatar';

import './About.styles.css';

const About = () => {
  return (
    <div className="about-page-container">
      <h1 className="title">About me</h1>
      <Avatar src="images/profile-pic-2.jpg" size={120} />
      <p>
        My name is Manny. I'm a software engineer who designs, develops, 
        consults, speaks and writes about building high quality software
        applications. I live in New Jersey but I call many places home.
        I love what I do, and adore the creative process; it is addictive 
        and can give never ending possibilities. Be thrilled to hear from 
        you regarding a software project or any other topic that may interest you.
      </p>
      <p>
        I began my journey through computer science at the age of 15 by searching 
        for techie online tutorials. I then went to a technical high school where 
        I completed a technical education program in computer science.
        After High school I went on to study for 3 years at Montclair State University, 
        graduating with a Bachelors Degree in Computer Science in 2016.
      </p>
    </div>
  );
};

export default About;
