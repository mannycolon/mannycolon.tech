import React from 'react';
import PropTypes from 'prop-types';
// core components
import GridContainer from "../../components/Grid/GridContainer"
import GridItem from "../../components/Grid/GridItem"

const ProfileContent = props => {
  const { classes } = props;
  return (
    <GridContainer justify="center">
      <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
        <div id="about-section" className={classes.gridItemContent}>
          <h2 className={classes.title}>About</h2>
          <p className={classes.pContent}>
            My name is Manny Colon. I'm a software engineer who designs, develops, 
            consults, speaks and writes about building high quality software
            applications. I live in New Jersey but I call many places home.
            I love what I do, and adore the creative process; it is addictive 
            and can give never ending possibilities. Be thrilled to hear from 
            you regarding a software project or any other topic that may interest you.
          </p>
          <p className={classes.pContent}>
            I began my journey through computer science at the age of 15. I used to search 
            any online tutorial relates to technology. I went to a technical high school where 
            I completed a technical education program in computer science.
            After High school I went on to study for 3 years at Montclair State University, 
            graduating with a Bachelors Degree in Computer Science in 2016.
          </p>
        </div>
      </GridItem>
      <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
        <div id="skills-section" className={classes.gridItemContent}>
          <h2 className={classes.title}>Skills</h2>
          <p className={classes.pContent}>
            My main area of expertise is Javascript full stack development.
            I build web applications using technologies like NodeJS, Express, ReactJs and MongoDB and many more.
            In addition, I have experience building PHP applications.
          </p>
          <div className={classes.skillsList}>
            <div>
              <h4 className={classes.skillsTitle}>Languages</h4>
              <ul className={classes.skillsUl}>
                <li>JavaScript</li>
                <li>Java</li>
                <li>HTML5</li>
                <li>CSS 3</li>
                <li>PHP</li>
                <li>Python</li>
                <li>C++</li>
              </ul>
            </div>
            <div>
              <h4 className={classes.skillsTitle}>Frameworks & Platforms</h4>
              <ul className={classes.skillsUl}>
                <li>NodeJS</li>
                <li>React</li>
                <li>React Native</li>
                <li>Express</li>
                <li>SASS / LESS</li>
              </ul>
            </div>
            <div>
              <h4 className={classes.skillsTitle}>Databases</h4>
              <ul className={classes.skillsUl}>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
          </div>
          <div className={classes.skillsFooter}>
            <p style={{ margin: "0px" }}>
              Would like to know more?
            </p>
            <p>
              Check my&nbsp;
              <a href="https://www.linkedin.com/in/mannycolon/" target="_blank" rel='noopener noreferrer' style={{ color: 'var(--red-color)'}}>LinkedIn</a>
              <span>{` or `}</span>
              <a href="https://www.github.com/mannycolon/" target="_blank" rel='noopener noreferrer' style={{ color: 'var(--red-color)'}}>Github</a> 
              &nbsp;profile or just&nbsp;
              <a href="#contact-section" style={{ color: 'var(--red-color)'}}>contact me</a>.
            </p>
          </div>
        </div>
      </GridItem>
    </GridContainer>
  );
};

ProfileContent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default ProfileContent;