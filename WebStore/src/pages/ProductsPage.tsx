import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Product } from "../types/Product";
import { fetchProducts } from "../api";

export default function ProductPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchProducts();
      const data = await response;
      setProducts(data);
      console.log(data);
    };

    fetchData();
  }, []);

  const changeOnSingle = (id: number) => {
    navigate(`product/${id}`);
  };
  return (
    <div>
      <p onClick={() => changeOnSingle(2)}>Productpage</p>
    </div>
  );
}
