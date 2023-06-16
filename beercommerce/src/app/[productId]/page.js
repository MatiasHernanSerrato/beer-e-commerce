import ProductDetailPage from "../ProductDetailPage";
export default function Page({ params }) {
  console.log('paramas', params);
  return <div>(My Post: {params.productId})
  <ProductDetailPage params={params} /></div>
}