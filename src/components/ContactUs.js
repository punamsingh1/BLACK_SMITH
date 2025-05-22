import React from "react";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-page">

      <div className="facility-header">
        <h2><span className="highlight">Contact</span> Us</h2>
      </div> <p className="product-intro">
        We’re here to help! Whether you have a question about our products, need support, or just want to connect — feel free to reach out. At Black Smith Industries, we value your time and are committed to providing timely and reliable assistance.
      </p>


      <div className="contact-info">

        <div className="info-card">
          <h3>Business Name</h3>
          <p>BLACKSMITH INDUSTRIES PVT. LTD.</p>
        </div>

        <div className="info-card">
          <h3><FaEnvelope /> Mail Us</h3>
          <p>
            <a href="mailto:info@blacksmithindustries.com" style={{ color: 'inherit', textDecoration: 'none' }}>
              info@blacksmithindustries.com
            </a>
          </p>
        </div>
        <div className="info-card">
          <h3><FaPhoneAlt /> Contact</h3>
          <p>
            <FaWhatsapp />{' '}
            <a href="https://wa.me/919026360813" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
              +91 9026360813
            </a>
          </p>
          <p>
            <FaPhoneAlt />{' '}
            <a href="tel:+919026360813" style={{ color: 'inherit', textDecoration: 'none' }}>
            +91 542-4068748
            </a>
          </p>
        </div>

        <div className="info-card">
          <h3><FaMapMarkerAlt /> Our Office</h3>
          <p>
            Blacksmith Industries Pvt. Ltd. <br />
            An ISO 9001:2015 Certified Co. <br />
            Ajay Kumar Maurya <br />
            N 12/306 Shahid Bhagat Singh Marg <br />
            Lakharaon Bajardihan, Varanasi 221106, U.P. INDIA
          </p>
          
        </div>
      </div>

      <div className="contact-map">
        <h2> <span className="highlight">Our</span> Location</h2>
        <iframe
          src="https://www.google.com/maps?q=N+12%2F306+Shahid+Bhagat+Singh+Marg,+Lakharaon+Bajardihan,+Varanasi,+Uttar+Pradesh+221106,+India&output=embed"
          title="Blacksmith Industries Map"
          width="100%"
          height="450"
          border-radius= "30"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>


  );
};

export default ContactUs;
