"use client"

import { useRouter } from 'next/navigation';
import products from '../data/products';

const ProductDetailPage = ({ product, params}) => {
  console.log(params);
  const router = useRouter();
  debugger
  const { productId, productBrand } = router.query; 
  const { id, brand, image, style, substyle, abv, origin, information, skus } = product;
console.log(productId, productBrand);
  return (
    <div>
      <h1>Product Detail Page</h1>
      <img src={image} alt={brand} />
      <p>ID: {id}</p>
      <p>Brand: {brand}</p>
      <p>Style: {style}</p>
      <p>Substyle: {substyle}</p>
      <p>ABV: {abv}</p>
      <p>Origin: {origin}</p>
      <p>Information: {information}</p>
      <h3>SKUs:</h3>
      <ul>
        {skus?.map((sku) => (
          <li key={sku.code}>
            <p>Code: {sku.code}</p>
            <p>Name: {sku.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export async function getServerSideProps({ query }) {
  debugger
  const { productId, productBrand } = query;
  const product = products.find(
    (product) =>
      product.id === parseInt(productId) &&
      product.brand.toLowerCase() === productBrand.toLowerCase()
  );

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product,
    },
  };
}


export default ProductDetailPage;
