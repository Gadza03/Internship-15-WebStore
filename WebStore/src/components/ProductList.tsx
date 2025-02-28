import { Product } from "../types/Product";
import c from "../styles/modules/products.module.css";
import ProductCard from "./ProductCard";

export default function ProductsList({ products }: { products: Product[] }) {
  return (
    <div className={c.productsWrapper}>
      {products.length > 0 ? (
        products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p>No items found.</p>
      )}
    </div>
  );
}
