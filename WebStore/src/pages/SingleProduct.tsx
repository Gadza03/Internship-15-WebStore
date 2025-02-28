import { useParams } from "react-router";
import c from "../styles/modules/singleProduct.module.css";
import GoBackButton from "../components/GoBackButton";
import { Product } from "../types/Product";
import { useContext, useEffect, useState } from "react";
import ratingIcon from "../assets/images/rating.png";
import ProductsList from "../components/ProductList";
import { ProductContext } from "../providers/ProductsContext";

export default function SingleProduct() {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error("ProductContext must be used within a ProductProvider");
  }

  const { products } = context;

  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0 });

    const foundProduct = products.find((p) => p.id.toString() === id);
    if (foundProduct) setProduct(foundProduct);
  }, [id]);

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

      <div className={c.youMightLikeSeciton}>
        <h3>You also might like:</h3>
        <ProductsList products={products} />
      </div>
    </div>
  );
}
