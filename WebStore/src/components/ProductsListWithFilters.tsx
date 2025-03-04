import { Product } from "../types/Product";
import c from "../styles/modules/products.module.css";
import { ProductCategory } from "../Enums/ProductCategory";
import { useMemo, useState } from "react";
import ProductsList from "./ProductList";
import { useProducts } from "../providers/ProductsContext";

export default function ProductsListWithFilters() {
  const { products, setProducts } = useProducts();

  console.log(products);

  const [searchValue, setSearchValue] = useState<string>("");
  const [category, setCategory] = useState<string>(ProductCategory.All);

  const filteredProducts = useMemo(() => {
    return products.filter((product: Product) => {
      const matchesSearch = product.title
        .toLowerCase()
        .includes(searchValue.toLowerCase());
      const matchesCategory =
        category === ProductCategory.All || product.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [products, searchValue, category]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === ProductCategory.All) {
      handleResetProducts();
    }

    setCategory(e.target.value);
  };

  const handleResetProducts = () => {
    const allProducts = JSON.parse(localStorage.getItem("products") || "[]");
    setProducts(allProducts);
  };

  return (
    <div className={`container ${c.pageWrapper}`}>
      <div className={c.searchFilter}>
        <input
          type="text"
          className={c.searchBar}
          placeholder="Search..."
          value={searchValue}
          onChange={handleSearchChange}
        />

        <select
          id={c.selectFilter}
          value={category}
          onChange={handleCategoryChange}
        >
          {Object.values(ProductCategory).map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <ProductsList products={filteredProducts} />
    </div>
  );
}
