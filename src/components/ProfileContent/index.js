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
            My software engineering journey started in my teen years. Since a young age 
            I loved researching about technology and enjoyed watching video tutorials about 
            computer science. I went to Montclair State University, graduating with a Bachelors Degree in Computer Science.
          </p>
        </div>
      </GridItem>
      <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
        <div id="skills-section" className={classes.gridItemContent}>
          <h2 className={classes.title}>Skills</h2>
          <p className={classes.pContent}>
            I'm an experienced full-stack Javascript developer. I build web apps using technologies like React.js, Next.js, Node.js, Express.js, GraphQL, MongoDB and many more.
          </p>
          <div className={classes.skillsList}>
            <div>
              <h4 className={classes.skillsTitle}>Languages</h4>
              <ul className={classes.skillsUl}>
                <li>JavaScript</li>
                <li>C#</li>
                <li>PHP</li>
                <li>Python</li>
                <li>Java</li>
                <li>C++</li>
                <li>HTML5</li>
                <li>CSS 3</li>
              </ul>
            </div>
            <div>
              <h4 className={classes.skillsTitle}>Frameworks & Platforms</h4>
              <ul className={classes.skillsUl}>
                <li>Node.js</li>
                <li>React.js</li>
                <li>Next.js</li>
                <li>React Native</li>
                <li>Gatsby.js</li>
                <li>Express.js</li>
                <li>SASS / LESS</li>
              </ul>
            </div>
            <div>
              <h4 className={classes.skillsTitle}>Databases</h4>
              <ul className={classes.skillsUl}>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>PostgreSQL</li>
                <li>SQLite</li>
              </ul>
            </div>
            <div>
              <h4 className={classes.skillsTitle}>Technologies</h4>
              <ul className={classes.skillsUl}>
                <li>REST</li>
                <li>GraphQL</li>
                <li>NPM / Yarn</li>
                <li>Webpack</li>
                <li>Babel</li>
              </ul>
            </div>
          </div>
          <p className={classes.pContent}>I’m currently learning <a href="https://en.wikipedia.org/wiki/Extended_reality" target="_blank" rel='noopener noreferrer' style={{ color: 'var(--red-color)'}}>XR</a> Development with <a href="https://unity.com/" target="_blank" rel='noopener noreferrer' style={{ color: 'var(--red-color)'}}>Unity</a>.</p>
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