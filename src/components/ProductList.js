import React from 'react';
import Products1 from '../data/Products1';
import './ProductList.css'; // external CSS
import { Link } from 'react-router-dom'; // React Router


const ProductList = () => {
  return (
    <section className="category-section">
      <div className="facility-header">
        <h2><span className="highlight">Our</span> Products</h2>
        <p className="product-intro">
        Explore our carefully selected lineup of expertly crafted products — where quality meets performance.
        From Bronze Sleeves to Couplings and Roller Sections, each item is designed for
        strength, precision, and long-term reliability. 
      </p>
      </div>
    
      <h2 className="section-title">Product Category</h2>
      <div className="product-grid"  style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '24px',
    maxWidth: '1000px',
    margin: '0 auto'
  }}>
        {Products1.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-img-only"
            />
            <p className="product-name">{product.name}</p>
            <Link
              to={`/${product.type}/${product.id}`} // product.type = 'Stopper', 'Solar', or 'Rollar'
              className="arrow-link"
              onClick={() => {
                console.log(`Navigating to ${product.type} Product ${product.id}`);
              }}
            >
              View More&nbsp;→
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductList;
