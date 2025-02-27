import { Product } from "../types/Product";
import c from "../styles/modules/products.module.css";
import ProductCard from "./ProductCard";
import { ProductCategory } from "../Enums/ProductCategory";
import { useMemo, useState } from "react";

type ProductsListProps = {
  products: Product[];
};

export default function ProductsList({ products }: ProductsListProps) {
  const [searchValue, setSearchValue] = useState<string>("");
  const [category, setCategory] = useState<string>(ProductCategory.All);

  const filteredProducts = useMemo(() => {
    return products.filter((product: Product) => {
      const matchesSearch = product.title
        .toLowerCase()
        .includes(searchValue.toLowerCase());
      const matchesCategory =
        category === "all" || product.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [products, searchValue, category]);

  return (
    <div className={`container ${c.pageWrapper}`}>
      <div className={c.searchFilter}>
        <input
          type="text"
          className={c.searchBar}
          placeholder="Search..."
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />

        <select
          id={c.selectFilter}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {Object.values(ProductCategory).map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className={c.productsWrapper}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No items found.</p>
        )}
      </div>
    </div>
  );
}
