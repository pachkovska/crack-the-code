import React from 'react';
import Menu from '../menu/Menu';
import Logo from '../logo/Logo';
import './Header.css';

function Header(props) {
  return (
    <div className="Header">
      <Logo />
      <Menu 
        menuItems={props.menuItems}
      />
    </div>
  );
}

export default Header;