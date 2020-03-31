import React from "react";
import FooterMenu from "./FooterMenu";
import Contact from "./Contact";

function Footer(props) {
  return (
    <div className="footer">
      <FooterMenu menuItems={props.menuItems} />
      <footer>
        <p className="copyright-text">Copyright &copy; CrackTheCode 2020</p>
      </footer>
      <Contact />
    </div>
  );
}

export default Footer;
