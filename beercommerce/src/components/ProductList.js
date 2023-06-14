import React from 'react';
import Product from './Product';

const ProductList = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <Product key={product.id} brand={product.brand} image={product.image} />
      ))}
    </div>
  );
};

export default ProductList;
