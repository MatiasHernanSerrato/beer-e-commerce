import React from 'react';
import ProductList from '../components/ProductList';
import productsData from '../data/products';
// import ProductDetailPage from './ProductDetailPage'

const HomePage = () => {
  return (
    <div>
      <h1>Beer E-commerce</h1>
      <ProductList products={productsData} />
      {/* <ProductDetailPage product={productsData} /> */}
    </div>
  );
};

export default HomePage;