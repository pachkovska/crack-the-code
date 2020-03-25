import React from 'react';
import MenuItem from '../menuItem/MenuItem';

function FooterMenu() {
  return (
    <div className="FooterMenu">
        <MenuItem 
            menuItemName="About"
        />
        <MenuItem 
            menuItemName="Privacy Policy"
        />
        <MenuItem 
            menuItemName="Terms and Conditions"
        />
        
    </div>
  );
}

export default FooterMenu;