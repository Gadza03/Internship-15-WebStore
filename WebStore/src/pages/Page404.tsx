import c from "../styles/modules/notFound.module.css";

export default function Page404() {
  return (
    <div className={`container ${c.pageNotFoundWrapper}`}>
      <h1 className={c.pageNotFound}>Page Not Found!</h1>
    </div>
  );
}
