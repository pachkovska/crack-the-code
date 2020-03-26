import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact">
        <div>Email us @ connect@ctc.com</div>
            <div>
                <span className="Connect-links">Connect with app owner:  </span>
                <a className="social-icon" target="_blank" href="https://www.linkedin.com/in/yuliatuzov/">
                    <i className="fa fa-linkedin-square fa-lg"></i>
                </a>
                <a className="social-icon" target="_blank" href="https://github.com/pachkovska">
                    <i className="fa fa-github-square fa-lg"></i>
                </a>
                <a className="social-icon" target="_blank"  href="https://twitter.com/YuliaPachkovska">
                    <i className="fa fa-twitter-square fa-lg"></i>
                </a>                       
            </div> 
    </div>
  );
}

export default Contact;