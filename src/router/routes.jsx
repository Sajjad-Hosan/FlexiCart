import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Root/root";
import OffersPage from "../Pages/OffersPage/OffersPage";
import ProductsPage from "../Pages/Home/ProductsPage/ProductsPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: '/products',
        element: <ProductsPage />,
      },
      {
        path: '/offers',
        element: <OffersPage />,
      }
    ],
  },
  {
    path: "login",
  },
  {
    path: "register",
  },
]);
