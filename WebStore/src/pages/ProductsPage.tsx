import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Product } from "../types/Product";
import { fetchProducts } from "../api";
import ProductsList from "../components/ProductsList";

export default function ProductPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchProducts();
      const data = await response;
      setProducts(data);
    };

    fetchData();
  }, []);

  return <ProductsList products={products} />;
}
