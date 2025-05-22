import React from 'react';
import Products4 from '../data/Products4';
import './Crusher.css'; // external CSS
const Crusher = () => {
  return (
    <section className="category-section">
      <div className="facility-header">
        <h2><span className="highlight">Crusher</span> Spare Parts</h2>
      </div>
      <p className="product-intro">
        A crusher is a vital piece of machinery widely used in the cement production industry.
        It plays a crucial role in the initial phase of the manufacturing process by crushing raw materials
        into appropriately sized particles. This size reduction is essential for efficient
        material preparation and ensures smooth processing in subsequent stages of cement production.
      </p>

      <h2 className="section-title">Product Category</h2>
      <div className="product-grid" style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '24px',
    maxWidth: '1000px',
    margin: '0 auto'
  }}>
        {Products4.map((product) => (
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

export default Crusher;
