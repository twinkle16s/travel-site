import React from 'react'
import './Footer.css'

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <section className="footer-lines">
        <p>Join the Adventure newsletter to receive our best vacation deals</p>
        <p>You can unsubscribe at any time</p>
      </section>
      <div>
        <form className="footer-form">
          <input type="email" name="email" placeholder="Your email" className="input-text" />
          <div>
            <button className="btn">Subscribe</button>
          </div>
        </form>
      </div>
      <div className="logo-icon">
        TRVL<i className="fab fa-typo3" />
      </div>
      <div className="media-icon">
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-youtube"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-facebook"></i>
      </div>
    </footer>
  );
};

export default Footer;
