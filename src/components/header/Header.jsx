import React from 'react';
import Menu from '../menu/Menu';
import Logo from '../logo/Logo';
import './Header.css';

function Header() {
  return (
    <div className="Header">
      <Logo />
      <Menu />
    </div>
  );
}

export default Header;