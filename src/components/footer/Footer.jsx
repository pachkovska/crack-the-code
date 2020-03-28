import React from 'react';
import FooterMenu from '../footerMenu/FooterMenu';
import Contact from '../contact/Contact';
import './Footer.css';

function Footer(props) {
  return (
    <div className="Footer">
        <FooterMenu 
          menuItems={props.menuItems}
        />
        <footer>
            <p className="Copyright-text">Copyright &copy; CrackTheCode 2020</p>
        </footer> 
        <Contact />
    </div>
  );
}

export default Footer;
