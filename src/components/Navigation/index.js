import React, { Component } from 'react';
import BurgerMenu from 'material-ui/svg-icons/navigation/menu';

import './Navigation.styles.css';
// components
import HomeIcon from './HomeIcon';
import NavigationIcons from './NavigationIcons/index';
import SocialIcons from './SocialIcons';

class Navigation extends Component {
  state = {
    showNavigationIcons: false
  }

  toggleNavigationIcons = () => this.setState({ showNavigationIcons: !this.state.showNavigationIcons});

  render() {
    return (
      <div id="portfolio-navbar">
        <div className="home-and-burger-container">
          <HomeIcon />
          <div className="burger-menu-icon" onClick={() => this.toggleNavigationIcons()}>
            <BurgerMenu style={{ color: '#ffffff', height: '35px', width: '35px', margin: '10px' }} />
          </div>
        </div>
        <NavigationIcons
          showNavigationIcons={this.state.showNavigationIcons}
          toggleNavigationIcons={() => this.toggleNavigationIcons()} />
        <SocialIcons />
      </div>
    );
  }
};

export default Navigation;