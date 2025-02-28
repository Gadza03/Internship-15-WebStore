import { useNavigate } from "react-router";
import arrowIcon from "../assets/images/arrow.png";
import c from "../styles/modules/singleProduct.module.css";
export default function GoBackButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };
  return (
    <button className={c.goBackBtn} onClick={handleClick}>
      <img src={arrowIcon} alt="arrow image" />
      Go back
    </button>
  );
}
