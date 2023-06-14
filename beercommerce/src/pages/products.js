import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import ProductDetail from '../components/ProductDetails';
import productsData from '../data/products';

const ProductDetailPage = () => {
  const router = useRouter();
  const { productId, productBrand } = router.query;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (productId && productBrand) {
      const selectedProduct = productsData.find(
        (p) => p.id === Number(productId) && p.brand.toLowerCase() === productBrand.toLowerCase()
      );
      setProduct(selectedProduct);
    }
  }, [productId, productBrand]);

  return (
    <div>
      {product ? (
        <ProductDetail product={product} />
      ) : (
        <p>Loading product...</p>
      )}
    </div>
  );
};

export default ProductDetailPage;
