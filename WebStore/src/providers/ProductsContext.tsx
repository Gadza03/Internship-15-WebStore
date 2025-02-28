import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Product } from "../types/Product";
import { fetchProducts } from "../api";
import { ApiProduct } from "../types/ApiProducts";

export const PRODUCT_ITEMS = "products";

type ProductsContextType = {
  products: Product[];
  setProducts: (products: Product[]) => void;
};

export const ProductContext = createContext<ProductsContextType | undefined>(
  undefined
);

export default function ProductsProvider({
  children,
}: {
  children: ReactNode;
}) {
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
          const formattedData: Product[] = data.map((product: ApiProduct) => ({
            ...product,
            rating: product.rating.rate,
          }));

          setProducts(formattedData);
          localStorage.setItem(PRODUCT_ITEMS, JSON.stringify(formattedData));
        })
        .catch((error) => console.error("Error fetching products:", error));
    }
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      localStorage.setItem(PRODUCT_ITEMS, JSON.stringify(products));
    }
  }, [products]);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProducts must be used within a ProductsProvider");
  }
  return context;
}
