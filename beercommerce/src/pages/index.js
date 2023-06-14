import React from 'react';
import ProductList from '../components/ProductList';
import productsData from '../data/products';

const HomePage = () => {
  return (
    <div>
      <h1>Beer E-commerce</h1>
      <ProductList products={productsData} />
    </div>
  );
};

export default HomePage;