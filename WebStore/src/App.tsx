import { BrowserRouter } from "react-router";
import Router from "./Router";
import "./styles/index.css";
import ProductsProvider from "./providers/ProductsContext";
function App() {
  return (
    <ProductsProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ProductsProvider>
  );
}

export default App;
