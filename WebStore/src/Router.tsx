import { useRoutes } from "react-router";
import MainLayout from "./layouts/MainLayout";
import ProductPage from "./pages/ProductsPage";
import SingleProduct from "./pages/SingleProduct";
import Page404 from "./pages/Page404";
import AddProductPage from "./pages/AddProductPage";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          element: <ProductPage />,
          index: true,
        },
        {
          path: "product/:id",
          element: <SingleProduct />,
        },
        {
          path: "add",
          element: <AddProductPage />,
        },
        { path: "*", element: <Page404 /> },
      ],
    },
  ]);
}
