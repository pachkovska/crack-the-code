import React from "react";
import MenuItem from "../menuItem/MenuItem";

function Menu(props) {
  return (
    <div className="menu">
      {props.menuItems.map((menuItem) => (
        <MenuItem menuItemTitle={menuItem.title} openMenu={props.openMenu} />
      ))}
    </div>
  );
}

export default Menu;
