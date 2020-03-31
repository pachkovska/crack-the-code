import React from "react";
import MenuItem from "../menuItem/MenuItem";

function LanguageDropdown(props) {
  return (
    <div className="dropdown">
      {props.dropdownItems.map((item) => (
        <MenuItem menuItemTitle={item.language} />
      ))}
    </div>
  );
}

export default LanguageDropdown;
