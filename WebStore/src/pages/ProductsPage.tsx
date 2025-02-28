import { useEffect, useState } from "react";
import { Product } from "../types/Product";
import { fetchProducts } from "../api";
import ProductsList from "../components/ProductsList";

const PRODUCT_ITEMS = "products";

export default function ProductPage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const localProducts = JSON.parse(
      localStorage.getItem(PRODUCT_ITEMS) || "[]"
    ) as Product[];

    if (localProducts.length > 0) {
      setProducts(localProducts);
    } else {
      fetchProducts()
        .then((data) => {
          setProducts(data);
        })
        .catch((error) => console.error("Error fetching products:", error));
    }
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      localStorage.setItem(PRODUCT_ITEMS, JSON.stringify(products));
    }
  }, [products]);

  return <ProductsList products={products} />;
}
