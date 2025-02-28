import { useParams } from "react-router";
import c from "../styles/modules/singleProduct.module.css";
import GoBackButton from "../components/GoBackButton";
import { Product } from "../types/Product";
import { useEffect, useState } from "react";
import { PRODUCT_ITEMS } from "./ProductsPage";
import ratingIcon from "../assets/images/rating.png";

export default function SingleProduct() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const storedProducts: Product[] = JSON.parse(
      localStorage.getItem(PRODUCT_ITEMS) || "[]"
    );

    const foundProduct = storedProducts.find((p) => p.id.toString() === id);
    if (foundProduct) setProduct(foundProduct);
  }, []);

  if (!product) return <p>Product not found</p>;

  return (
    <div className={`${c.productWrapper} container`}>
      <GoBackButton />
      <div className={c.singleProductInfo}>
        <div className={c.imageContainer}>
          <img src={product.image} alt={product?.title} />
        </div>
        <div className={c.productDetails}>
          <p className={c.category}>{product.category}</p>
          <h3 className={c.title}>{product.title}</h3>
          <p className={c.price}>{product.price}$</p>
          <p className={c.description}>{product.description}</p>
          <p className={c.rating}>
            {product.rating} <img src={ratingIcon} alt="star" />
          </p>
        </div>
      </div>
    </div>
  );
}
