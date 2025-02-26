import { useNavigate } from "react-router";

export default function ProductPage() {
  const navigate = useNavigate();

  const changeOnSingle = (id: number) => {
    navigate(`product/${id}`);
  };
  return (
    <div>
      <p onClick={() => changeOnSingle(2)}>Productpage</p>
    </div>
  );
}
