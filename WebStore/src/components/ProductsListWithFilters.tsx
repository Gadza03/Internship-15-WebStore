import { Product } from "../types/Product";
import c from "../styles/modules/products.module.css";
import { ProductCategory } from "../Enums/ProductCategory";
import { useMemo, useState } from "react";
import ProductsList from "./ProductList";
import { useProducts } from "../providers/ProductsContext";

const TOP_20 = "top20";

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
    if (e.target.value === TOP_20) {
      handleTop20();
      return;
    }

    if (e.target.value === ProductCategory.All) {
      handleResetProducts();
    }

    setCategory(e.target.value);
  };

  const handleResetProducts = () => {
    const allProducts = JSON.parse(localStorage.getItem("products") || "[]");
    setProducts(allProducts);
  };

  const handleTop20 = () => {
    const top20Products = [...products]
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 20);
    setProducts(top20Products);
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
          <option key={TOP_20} value={TOP_20}>
            {TOP_20}
          </option>
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
