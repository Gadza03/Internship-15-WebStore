import { Product } from "../types/Product";
import c from "../styles/modules/products.module.css";
import { useNavigate } from "react-router";
import { paths } from "../path";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const navigate = useNavigate();

  const handleSeeMore = (id: number) => {
    navigate(paths.singleProduct(id));
  };

  return (
    <div
      className={c.singleProductWrapper}
      onClick={() => handleSeeMore(product.id)}
    >
      <div className={c.imageContainer}>
        <img
          src={product.image}
          alt="Product Photo"
          className={c.productImage}
        />
      </div>
      <div className={c.productDetails}>
        <h2 className={c.productTitle}>{product.title}</h2>
        <h4 className={c.productPrice}>${product.price.toFixed(2)}</h4>
      </div>
    </div>
  );
}
