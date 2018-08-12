import React, { Component } from 'react'
// nodejs library that concatenates classes
import classNames from "classnames"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"
// core components
import Header from "../../components/Header"
import HeaderLinks from "../../components/Header/HeaderLinks"
import Footer from "../../components/Footer"
import Parallax from "../../components/Parallax"
import ProfileIntro from "../../components/ProfileIntro"
import ProfileContent from "../../components/ProfileContent"
import ContactMe from '../../components/ContactMe'

import profilePageStyle from "./profilePage.styles"

class ProfilePage extends Component {
  render () {
    const { classes, ...rest } = this.props
    return (
      <div>
        <Header
          color="transparent"
          brand="Manny Colon"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white"
          }}
          {...rest}
        />
        <Parallax small filter image={require("../../assets/img/profile-bg.jpeg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <ProfileIntro classes={classes} />
              <div className={classes.description}>
                <p style={{ margin: "0px" }}>
                  Software Engineer, Entrepreneur & IoT Enthusiast.{" "}
                </p>
              </div>
              <ProfileContent classes={classes} />
              <ContactMe parentClasses={classes} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default withStyles(profilePageStyle)(ProfilePage)
