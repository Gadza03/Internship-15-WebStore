import { useNavigate } from "react-router";
import c from "../styles/modules/nav.module.css";
import { paths } from "../path";

export default function Navbar() {
  const navigate = useNavigate();
  const handleNavigateToProducts = () => {
    navigate(paths.products);
  };

  const handleNavigateToAddNewProduct = () => {
    navigate(paths.addNewProduct);
  };
  return (
    <nav>
      <h1 className={c.logo} onClick={handleNavigateToProducts}>
        Web Shop
      </h1>
      <ul className={c.navLinks}>
        <li onClick={handleNavigateToProducts}>Products</li>
        <li onClick={handleNavigateToAddNewProduct}>Add new product</li>
      </ul>
    </nav>
  );
}
