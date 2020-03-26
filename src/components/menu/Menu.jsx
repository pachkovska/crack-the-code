import React from 'react';
import MenuItem from '../menuItem/MenuItem';

import './Menu.css';

function Menu() {
  return (
    <div className="menu">
        <MenuItem 
            menuItemName="Languages"
        />
        <MenuItem 
            menuItemName="Categories"
        />
        <MenuItem 
            menuItemName="Create snippet board"
        />
        
    </div>
  );
}

export default Menu;