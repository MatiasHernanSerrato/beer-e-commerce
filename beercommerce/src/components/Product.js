import React from 'react';

const Product = ({ brand, image }) => {
  return (
    <div>
      <img src={image} alt={brand} />
      <h3>{brand}</h3>
    </div>
  );
};

export default Product;
