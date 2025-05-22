import React from 'react';
import Products5 from '../data/Products5';
import './Conveyor'; // external CSS


const Conveyor = () => {
  return (
    <section className="category-section">
      <div className="facility-header">
        <h2><span className="highlight">Conveyor</span> and Roller</h2>
      </div>
      <p className="product-intro">
        Our Conveyor Rollers are high-performance components built to ensure smooth, noise-free,
        and frictionless movement of
        materials on conveyors. They are compatible with both gravity and powered systems..
      </p>

      <h2 className="section-title">Product Category</h2>
      <div className="product-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '24px',
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        {Products5.map((product) => (
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

export default Conveyor;
