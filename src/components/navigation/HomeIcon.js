import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../../assets/logo-darkgrey.png'

const HomeIcon = () => {
  return (
    <Link to="/">
      <div style={{ width: '100%', cursor: 'pointer' }}>
        <img src={logo} alt="logo" height="42" width="42" style={{ margin: 10 }} />
      </div>
    </Link>
  );
};

export default HomeIcon;
