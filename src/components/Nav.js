import React, { useState } from "react";
import "./Nav.css";
import logo1 from '../assets/images/logo1.jpg';
import { NavLink } from "react-router-dom";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav>
        <div className="left">
          <img src={logo1} alt="Black Smith Logo" />
        </div>

        <div className={`right ${isOpen ? "show" : ""}`}>
          <ul>
         
            <li><NavLink to="/" end onClick={() => setIsOpen(false)}>Home</NavLink></li>
            <li><NavLink to="/about" onClick={() => setIsOpen(false)}>About Us</NavLink></li>
            <li><NavLink to="/ProductList" onClick={() => setIsOpen(false)}>Products</NavLink></li>
            <li><NavLink to="/Facility" onClick={() => setIsOpen(false)}>Plant and Machinery</NavLink></li>
            <li><NavLink to="/ContactUs" onClick={() => setIsOpen(false)}>Contact Us</NavLink></li>
        
          </ul>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
      
        </div>
      </nav>
    </header>
  );
}

export default Nav;
