import React from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames"
// core components
import GridContainer from "../../components/Grid/GridContainer"
import GridItem from "../../components/Grid/GridItem"
import Button from "../../components/CustomButtons/Button"

import profile from "../../assets/img/profile-pic.jpg"

const ProfileIntro = props => {
  const { classes } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  )
  return (
    <GridContainer justify="center">
      <GridItem xs={12} sm={12} md={6}>
        <div className={classes.profile}>
          <div>
            <img src={profile} alt="..." className={imageClasses} />
          </div>
          <div className={classes.name}>
            <h2 className={classes.title}>Manny Colon</h2>
            <h5>SOFTWARE ENGINEER</h5>
            <Button justIcon
                    link
                    className={classes.margin5}
                    href="https://www.instagram.com/mannycolon.tech"
                    target="_blank">
              <i className={"fab fa-instagram"} />
            </Button>
            <Button justIcon
                    link
                    className={classes.margin5}
                    href="https://www.linkedin.com/in/mannycolon"
                    target="_blank">
              <i className={"fab fa-linkedin"} />
            </Button>
            <Button justIcon
                    link
                    className={classes.margin5}
                    href="https://www.facebook.com/colonmanny"
                    target="_blank">
              <i className={"fab fa-facebook"} />
            </Button>
            <Button justIcon
                    link
                    className={classes.margin5}
                    href="https://www.twitter.com/_mannycolon"
                    target="_blank">
              <i className={"fab fa-twitter"} />
            </Button>
            <Button justIcon
                    link
                    className={classes.margin5}
                    href="https://www.github.com/mannycolon"
                    target="_blank">
              <i className={"fab fa-github"} />
            </Button>
          </div>
        </div>
      </GridItem>
    </GridContainer>
  );
};

ProfileIntro.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default ProfileIntro;