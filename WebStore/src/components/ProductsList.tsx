import { Product } from "../types/Product";
import c from "../styles/modules/products.module.css";
import ProductCard from "./ProductCard";

type ProductsListProps = {
  products: Product[];
};

export default function ProductsList({ products }: ProductsListProps) {
  return (
    <div className={`${c.productsWrapper} container`}>
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
}
