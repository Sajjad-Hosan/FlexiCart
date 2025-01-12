import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Root/root";
import OffersPage from "../Pages/OffersPage/OffersPage";
import ProductsPage from "../Pages/ProductsPage/ProductsPage";
import AboutPage from "../Pages/AboutPage/AboutPage";
import OurBlogs from "../Pages/OurBlogs/OurBlogs";
import CartPage from "../Pages/CartPage/CartPage";
import WishlistPage from "../Pages/WishlistPage/WishlistPage";
import ProfilePage from "../Pages/ProfilePage/ProfilePage";

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
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/offers",
        element: <OffersPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/blog",
        element: <OurBlogs />,
      },
      {
        path: "/carts",
        element: <CartPage />,
      },
      {
        path: "/Wishlist",
        element: <WishlistPage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
    ],
  },
  {
    path: "login",
  },
  {
    path: "register",
  },
]);
