import { useParams } from "react-router";
import c from "../styles/modules/singleProduct.module.css";
import GoBackButton from "../components/GoBackButton";
import { useEffect } from "react";
import ratingIcon from "../assets/images/rating.png";
import ProductsList from "../components/ProductList";
import { useProducts } from "../providers/ProductsContext";

export default function SingleProduct() {
  const { products } = useProducts();

  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === Number(id));

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [id]);

  if (!product)
    return (
      <p className={`${c.productWrapper} container`}>
        <GoBackButton />
        Product with ID: {id} not found.
      </p>
    );

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
