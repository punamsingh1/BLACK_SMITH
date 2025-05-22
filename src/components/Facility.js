import React from 'react';
import './Facility.css';

const Facility = () => {
    return (
        <section className="facility-section">
            <div className="facility-header">
                <h2><span className="highlight">Our plant</span> and machinery</h2>
                < p className="product-intro">
                    Our plant is equipped with advanced, high-precision machinery to ensure consistent quality and performance.
                    We utilize CNC machines, automated fabrication units, and in-house testing facilities.
                    This setup allows us to meet high-volume demands with accuracy and efficiency.      </p>
            </div>


            <div className="facility-grid">
                <div className="card">
                    <div className="facility-category">
                        <h3>⚫ FETTLING SECTION</h3>
                        <ul>
                            <li> Welding Rectifier 400 Amps: One</li>

                            <li> Gouging Rectifier 1200 Amps: One</li>

                            <li> Plasma cutter up to 60mm thickness: One</li>
                            <li> Plasma cutter up to 60mm thickness: One</li>

                            <li> Oven for Welding Rod: One</li>

                            <li> Carrying oven for Welding Rod: Two</li>

                            <li> Swing Frame Grinders: Three</li>

                            <li> Flexible Shaft Grinders: Four</li>

                            <li> Hand Grinders: Four</li>

                            <li> Pneumatic chippers: Four</li>

                            <li>Induction furnace Capacity 1000 KG: One</li>
                            <li>Induction furnace Capacity 500 KG: One</li>
                            <li>Induction furnace Capacity 300 KG: One</li>
                            <li>Immersion Pyrometer Temperature Recorder: One</li>
                        </ul>
                    </div>
                </div>

                <div className="card">
                    <div className="facility-category">
                        <h3>● OVERHEAD CRANES</h3>
                        <ul>
                            <li>SMS/Moulding Section 5 MT/5 MT: Two</li>
                            <li>Scrap Handling Section 3 MT: One</li>
                            <li>Fettling Section 2 MT: Two</li>
                            <li>Moulding Section Jip Crane 5 MT: One</li>
                        </ul>
                    </div>
                </div>

                <div className="card">
                    <div className="facility-category">
                        <h3>● EQUIPMENT FOR MOULDING & CASTING</h3>
                        <ul>
                            <li>MOULDING SECTION</li>
                            <li>Continuous Mixer, Sand Handling Plant, Reclamation Unit</li>
                            <li>Vibrating Sand Siever: One</li>
                            <li>Mould Boxes & Core Boxes: Various Sizes</li>
                        </ul>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Facility;
