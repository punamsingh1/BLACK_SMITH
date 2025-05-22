import React, { useState, useEffect } from "react";
import "./Home.css";

import picture1 from "../assets/images/picture1.png";
import certifide from "../assets/images/certifide.jpg";
import about01 from "../assets/images/about01.png";
import about02 from "../assets/images/about02.png";
import about03 from "../assets/images/about03.png";
import about04 from "../assets/images/about04.png";
import about05 from "../assets/images/about05.png";
import about06 from "../assets/images/about06.png";
import about07 from "../assets/images/about07.png";
import about08 from "../assets/images/about08.png";
import about09 from "../assets/images/about09.png";
import about001 from "../assets/images/about001.png";
import popup7 from "../assets/images/popup7.png";
import popup8 from "../assets/images/popup8.png";
import popUp3 from "../assets/images/popUp3.png";
import popup4 from "../assets/images/popup4.png";
import popup5 from "../assets/images/popup5.png";
import popup6 from "../assets/images/popup6.png";
import p7 from "../assets/images/p7.png";


function Home() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js";
    script.async = true;
    script.onload = () => {
      new window.Typed("#element", {
        strings: [
          "Ingenuity",
          "Excellence",
          " ⁠Service",
          " ⁠Responsibility",


        ],
        typeSpeed: 70,
        backSpeed: 70,    // Optional: speed for deleting text
       // loop: true        // 🔁 This makes it loop continuously
        
      });
    };
    document.body.appendChild(script);
  }, []);
  const [showPopup, setShowPopup] = useState(false);

  const handleMoreInfoClick = () => {
    setShowPopup(true);   // Open popup when button clicked
  };

  const closePopup = () => {
    setShowPopup(false);  // Close popup
  };

  return (
    <div className="content">
      <div className="app" >
        <main className="imags" style={{ backgroundImage: `url(${p7})` }}>
          <section className="firstSection" >
            <div className="leftSecond">
              <div className="ino">Core Value</div>
              <span id="element"></span>
            </div>
            <div className="rightSecond"></div>
          </section>
          <section className="secondSection">
            <span className="grey">

            </span>
            <div>
              <div className="buttons">
                <button className="btn" onClick={handleMoreInfoClick}>
                  More Info
                </button>
              </div>

              {showPopup && (
                <div className="popup-overlay">

                  <div className="popup-content">
                    <button className="close-btn" onClick={closePopup}>×</button> {/* Cross at top */}
                    <h2>More Info</h2>
                    <div className="scroll-area">
                      <img src={popup7} alt="Founder at Work" />
                    </div>
                    <div >
                      <img src={popup8} alt="Founder at Work" />
                    </div>
                    <div >
                      <img src={popUp3} alt="Founder at Work" />
                    </div>
                    <div className="scroll-area">
                      <img src={popup4} alt="Founder at Work" />
                    </div>
                    <div >
                      <img src={popup5} alt="Founder at Work" />
                    </div>
                    <div >
                      <img src={popup6} alt="Founder at Work" />
                    </div>
                   
                    <div style={{ width: "1000px" }}>
                      Very long content that needs scrolling horizontally...
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="u" color="red">
              <div className="v">
                <h1><span className="highlight"> Welcome to Blacksmith Industries Pvt. Ltd.</span>     —the forefront of innovative
                  manufacturing. Our commitment to precision and quality drives us to deliver
                  exceptional solutions that are meticulously tailored to the unique requirements of our clients.</h1></div>
              <div class="client-slider">
                <div class="slider-track">

                  <div class="slide"><img src={about01} alt="Client 1" /></div>
                  <div class="slide"><img src={about02} alt="Client 2" /></div>
                  <div class="slide"><img src={about03} alt="Client 3" /></div>
                  <div class="slide"><img src={about04} alt="Client 4" /></div>
                  <div class="slide"><img src={about05} alt="Client 5" /></div>
                  <div class="slide"><img src={about06} alt="Client 6" /></div>
                  <div class="slide"><img src={about07} alt="Client 7" /></div>
                  <div class="slide"><img src={about08} alt="Client 8" /></div>
                  <div class="slide"><img src={about09} alt="Client 9" /></div>
                  <div class="slide"><img src={about001} alt="Client 10" /></div>


                  <div class="slide"><img src={about01} alt="Client 1" /></div>
                  <div class="slide"><img src={about02} alt="Client 2" /></div>
                  <div class="slide"><img src={about03} alt="Client 3" /></div>
                  <div class="slide"><img src={about04} alt="Client 4" /></div>
                  <div class="slide"><img src={about05} alt="Client 5" /></div>
                  <div class="slide"><img src={about06} alt="Client 6" /></div>
                  <div class="slide"><img src={about07} alt="Client 7" /></div>
                  <div class="slide"><img src={about08} alt="Client 8" /></div>
                  <div class="slide"><img src={about09} alt="Client 9" /></div>
                  <div class="slide"><img src={about001} alt="Client 10" /></div>
                </div>
              </div></div>
          </section>
          <section className="thirdSection">
            <div className="left1Second">
              <h2><span className="highlight">Leading</span> Manufacturer of Custom Spare Parts and Components</h2>
              <p>
                <span className="highlight">  Blacksmith Industries Pvt. Ltd., based in Varanasi, has over a decade of experience delivering
                  precision spare parts and </span>
                mechanical components for the cement, power, steel, mining, and material
                handling industries. With advanced manufacturing and strict quality control, we supply custom castings,
                machined parts, gears, chains, and specialized equipment engineered for reliability in demanding
                industrial applications.

                Trusted by leading companies in India, we are committed to quality, innovation, and customer satisfaction</p>
            </div>
            <div className="right1Second">
              <img src={picture1} alt="Founder at Work" />
            </div>
          </section>

          <section className="certified-section">
            <div className="left4Second">
              <h2><span className="highlight">Certified</span> Quality, Proven Trust</h2>
              <p>
                <span className="highlight">  Blacksmith Industries Pvt. Ltd. is an ISO 9001;2015  certified manufacturer and exporter. </span>

                Our commitment to quality drives every product we deliver.
                We set the standard in manufacturing excellence.   </p>

            </div>
            <div className="right2Second">
              <img src={certifide} alt="Company Certifications" />
            </div>
          </section>

        </main>
      </div>
    </div>

  );
}

export default Home;
