import { useState } from "react";
import { useProducts } from "../providers/ProductsContext";
import c from "../styles/modules/addNewProduct.module.css";
import { Product } from "../types/Product";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router";
import { paths } from "../path";
import { ProductCategory } from "../Enums/ProductCategory";
import FormInput from "../components/FormInput";

export default function AddProductPage() {
  const { products, setProducts } = useProducts();
  const [newProduct, setNewProduct] = useState<Product>({
    id: Date.now(),
    title: "",
    price: 0,
    category: "",
    description: "",
    image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
    rating: 0,
  });

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationError = validateInputs();
    if (validationError) {
      toast.error(validationError);
      return;
    }

    const updatedProducts = [...products, newProduct];

    setProducts(updatedProducts);
    navigate(paths.products);
  };

  const validateInputs = () => {
    if (newProduct.title.length < 2)
      return "Title have to contain atleast 2 characters";
    if (newProduct.price <= 0) return "Price have to be higher than 0.";
    if (newProduct.description.length < 2)
      return "Decription have to contain atleast 2 characters";
  };

  return (
    <div className={c.addModalWrapper}>
      <h1>Add new product</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Title"
          type="text"
          placeholder="Enter product title"
          value={newProduct.title}
          onChange={(e) =>
            setNewProduct({ ...newProduct, title: e.target.value })
          }
        />

        <FormInput
          label="Price"
          type="number"
          min={0}
          placeholder="Enter price"
          value={newProduct.price}
          onChange={(e) =>
            setNewProduct({ ...newProduct, price: parseInt(e.target.value) })
          }
        />

        <FormInput
          label="Category"
          type="select"
          value={newProduct.category}
          onChange={(e) =>
            setNewProduct({ ...newProduct, category: e.target.value })
          }
          options={Object.values(ProductCategory).slice(1)}
        />

        <textarea
          placeholder="Enter description"
          value={newProduct.description}
          onChange={(e) =>
            setNewProduct({ ...newProduct, description: e.target.value })
          }
        ></textarea>

        <button type="submit" id={c.addBtn}>
          Add product
        </button>
      </form>
      <Toaster />
    </div>
  );
}
