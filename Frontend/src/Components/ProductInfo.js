import React from 'react';
import './ProductInfo.css';

function ProductInfo({ product }) {
  return (
    <div className="product-info">
      <img src={product.image} alt={product.name} className="product-info-image" />
      <div className="product-info-details">
        <h2>{product.name}</h2>
        <p><strong>Price:</strong> ${product.price}</p>
      </div>
    </div>
  );
}

export default ProductInfo;
