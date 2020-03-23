import React from 'react';
import MenuItem from '../menuItem/MenuItem';

import './Menu.css';

function Menu() {
  return (
    <div className="Menu">
        <MenuItem 
            menuItemName="Home"
        />
        <MenuItem 
            menuItemName="Languages"
        />
        <MenuItem 
            menuItemName="Categories"
        />
        
    </div>
  );
}

export default Menu;