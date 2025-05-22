import React from 'react';
import Products6 from '../data/Products6';
import './Mesh'; // external CSS


const Mesh = () => {
  return (
    <section className="category-section">
      <div className="facility-header">
        <h2><span className="highlight">Mesh</span> Section</h2>
      </div>
      <p className="product-intro">
        Our Mesh Sections are engineered for strength, durability, and versatility
        across a wide range of industrial and architectural applications.
        Made from high-quality metals, they offer superior structural integrity and corrosion resistance.
      </p>

      <h2 className="section-title">Product Category</h2>
      <div className="product-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '24px',
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        {Products6.map((product) => (
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

export default Mesh;
