import React from "react";
import Menu from "./Menu";
import Logo from "./Logo";

function Header(props) {
  return (
    <div className="header">
      <Logo />
      <Menu menuItems={props.menuItems} openMenu={props.openMenu} />
    </div>
  );
}

export default Header;
