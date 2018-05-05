import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../../../assets/logo-darkgrey.png'

import './HomeIcon.styles.css';

const HomeIcon = () => {
  return (
    <Link to="/" style={{ height: '100%', width: '62px' }}>
      <div id="home-icon">
        <img src={logo} alt="logo" height="42" width="42" style={{ margin: 10 }} />
      </div>
    </Link>
  );
};

export default HomeIcon;
