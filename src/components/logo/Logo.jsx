import React from 'react';
import logo from '../../images/logo.png';
import './Logo.css';

function Logo() {
  return (
      <div className="logo">
        <img className="logo-image" src={logo} alt="logo image"/>
        <p className="logo-name">CrackTheCode</p>
      </div>
  );
}

export default Logo;