import React from "react";
import MenuItem from "../menuItem/MenuItem";

function FooterMenu(props) {
  return (
    <div className="footerMenu">
      {props.menuItems.map((menuItem) => (
        <MenuItem menuItemTitle={menuItem.title} />
      ))}
    </div>
  );
}

export default FooterMenu;
