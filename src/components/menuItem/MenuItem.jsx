import React from "react";

function MenuItem(props) {
  return (
    <div className="menuItem" onClick={() => props.openMenu()}>
      {props.menuItemTitle}
    </div>
  );
}

export default MenuItem;
