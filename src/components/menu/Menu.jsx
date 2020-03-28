import React from 'react';
import MenuItem from '../menuItem/MenuItem';

import './Menu.css';

function Menu(props) {
  return (
    <div className="menu">
        { 
          props.menuItems.header.map(menuItem => 
            (
              <MenuItem 
                menuItemTitle={menuItem.title}
              />
            )
          )
        }              
    </div>
  );
}

export default Menu;