import React from "react";
import "./About.css";
import aboutImg2 from '../assets/images/about2.png';
import abut from '../assets/images/abut.png';
import about0002 from '../assets/images/about0002.png';
import about0001 from '../assets/images/about0001.png';

function Team() {
  return (
    <div className="about-container">
      <div className="facility-header">
        <h2><span className="highlight">About</span> Us</h2>
      </div>
      <p className="product-intro">
      BLACKSMITH have always strived to be the leading
and renowned supplier of superior quality products.
All the raw materials and finished products undergo
stringent quality checks at different levels thereby
ensuring high durability, tensile strength and
resisvity to adverse condions. BLACKSMITH has
established, implement, maintained and connually
improved a quality management system, including
the processes needed and their interacon, in
accordance with the requirements of the
internaonal standards.
      </p>

      <div className="about-section">
        <div className="about-text">
          <h2><span className="highlight">Innovation and</span> Continuous Improvement</h2>
          <p>
            We drive innovation and continuous improvement by
            investing in advanced casting and machining technologies, enhancing our design support,
            and refining our quality control processes. This commitment enables us to deliver custom-engineered solutions
            that set new benchmarks for reliability and performance in the high demanding Industries.
          </p>
        </div>
        <div className="about-images">
          <img src={abut} alt="Team visual" />
        </div>
        <div className="about-text">
          <h2><span className="highlight">Quality and</span> Reliability</h2>
          <p>

            Quality is at the heart of Blacksmith Industries’ operations. Stringent quality
            control measures are implemented at every stage, from raw material selection to finished product inspection,
            using advanced testing instruments and international standards. This unwavering focus on quality ensures that
            every spare part and mechanical component is engineered for superior reliability
            and performance, earning the trust of leading companies in India and overseas
          </p>
        </div>
        <div className="about-images">
          <img src={aboutImg2} alt="Team visual" />
        </div>
        <div className="about-text">
          <h2><span className="highlight">Customer Satisfaction</span> and Partnership</h2>
          <p>
            We are dedicated to building long-term partnerships by delivering responsive service,
            technical support, and tailored engineering solutions. By understanding each client’s
            specific requirements and providing expert guidance
            from design to delivery, we ensure our customers receive maximum value
            and dependable support at every stage.
          </p>
        </div>
        <div className="about-images">
          <img src={about0001} alt="Team visual" />
        </div>
        <div className="about-text">
          <h2><span className="highlight">Responsibility</span> and Sustainability</h2>
          <p>
            We recognize our responsibility to the environment and society. The company adopts responsible sourcing,
            energy-efficient production methods, and sustainable practices to minimize its environmental impact.
            By appreciating and learning from every experience,
            the team strives to create value not just for clients and investors but also for the broader community.
          </p>
        </div>
        <div className="about-images">
          <img src={about0002} alt="Team visual" />
        </div>
      </div>
    </div>
  );
}

export default Team;
