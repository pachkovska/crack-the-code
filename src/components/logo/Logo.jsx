import React from 'react';
import logo from '../../images/logo.png';
import './Logo.css';

function Logo() {
  return (
      <div className="Logo">
        <img className="Logo-image" src={logo} alt="logo image"/>
        <p className="Logo-name">CrackTheCode</p>
      </div>
  );
}

export default Logo;