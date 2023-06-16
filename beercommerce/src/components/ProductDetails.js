import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductDetail = ({ product }) => {
  const [stock, setStock] = useState(null);
  const [price, setPrice] = useState(null);

  useEffect(() => {
    const fetchStockAndPrice = async () => {
      try {
        const response = await axios.get(`/api/stock-price/${product.sku}`);
        const { stock, price } = response.data;
        setStock(stock);
        setPrice(price);
      } catch (error) {
        console.log('Error fetching stock and price:', error);
      }
    };

    fetchStockAndPrice();

    const interval = setInterval(() => {
      fetchStockAndPrice();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [product.sku]);

  return (
    <div>
      <h2>Product Detail</h2>
      <h3>{product.brand}</h3>
      <p>SKU: {product.sku}</p>
      <p>Stock: {stock !== null ? stock : 'Loading...'}</p>
      <p>Price: {price !== null ? `$${(price / 100).toFixed(2)}` : 'Loading...'}</p>
    </div>
  );
};

export default ProductDetail;
