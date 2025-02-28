import { useContext } from "react";
import ProductsList from "../components/ProductsList";
import { ProductContext } from "../providers/ProductsContext";

export const PRODUCT_ITEMS = "products";

export default function ProductPage() {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error("ProductContext must be used within a ProductProvider");
  }

  const { products } = context;

  return <ProductsList products={products} />;
}
