import React from 'react';
import Products2 from '../data/Products2';
import './Stopper.css'; // external CSS


const Stopper = () => {
  return (
    <section className="category-section">
       <div className="facility-header">
        <h2><span className="highlight">Stopper</span> Damper</h2>
      </div>
      <p className="product-intro">
      Our Stopper Dampers are precision-engineered devices designed to absorb impact 
      and halt motion in industrial and automated systems. They protect machinery, 
      reduce noise, and increase system longevity by controlling end-of-travel energy.
      </p>

      <h2 className="section-title">Product Category</h2>
      <div className="product-grid">
        {Products2.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-img-only"
            />
            <p className="product-name">{product.name}</p>
          
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stopper;