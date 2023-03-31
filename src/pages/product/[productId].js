import { useRouter } from "next/router";
const ProductDetails = () => {
  const product = useRouter();
  const productId = product.query.productId;
  return <h1>Details about Product {productId}</h1>;
};
export default ProductDetails;
