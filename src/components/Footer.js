import React from 'react';
import './Footer.css';
import logo1 from '../assets/images/logo1.jpg';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import './Footer.css'; // Your CSS file,
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-columns">

        {/* Column 1: Logo */}
        <div className="footer-logo-col">
          <img src={logo1} alt="Sparrow Logo" className="footer-logo" />
          <p className="footer-tagline">Solving Spare Parts</p>

        </div>
        <div className="footer-section">
          <h4 className="footer-heading">Follow Us</h4>
          <div className="footer-socials">
            <a href="https://www.facebook.com/YourPage" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="footer-icon" />
              <span>Facebook</span>
            </a>
            <a href="https://www.linkedin.com/company/YourPage" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="footer-icon" />
              <span>LinkedIn</span>
            </a>
            <a href="https://twitter.com/YourPage" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="footer-icon" />
              <span>Twitter</span>
            </a>
            <a href="https://youtube.com/YourPage" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="footer-icon" />
              <span>YouTube</span>
            </a>
          </div>
        </div>

        {/* Column 3: Links */}
        <div className="footer-links">
          <Link to="/about">About us</Link>
          <Link to="/contactUs">Contact us</Link>
          <Link to="/productList">Products</Link>
          <Link >Privacy Policy</Link>
        </div>
        {/* Column 4: Contact */}
        <div className="footer-contact">
          <a href="#" className="footer-contact-btn">Contact</a>
          <p>
            <a href="mailto:info@blacksmithindustries.com" style={{ color: 'inherit', textDecoration: 'none' }}>
              info@blacksmithindustries.com
            </a>
          </p>
          <p>
            Blacksmith Industries Pvt. Ltd. <br />
            An ISO 9001:2015 Certified Co. <br />
            Ajay Kumar Maurya <br />
            N 12/306 Shahid Bhagat Singh Marg <br />
            Lakharaon Bajardihan, Varanasi 221106, U.P. INDIA
          </p>
          <p>
            {' '}  📞{' '}
            <a
              href="tel:91 5424068748"
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              (91) 5424068748
            </a>
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()}  Blacksmith Industries Pvt. Ltd. All rights reserved.
        <div className="powered-by">
          <p><strong>Powered by SatvaNosh Solutions</strong></p>
          <p>
            <FaWhatsapp style={{ marginRight: '6px' }} />
            <a
              href="https://wa.me/918802098411"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              91 88020 98411
            </a>
          </p>
        </div>
      </div>


    </footer>
  );
};

export default Footer;
