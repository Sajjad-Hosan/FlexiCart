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
import Dashboard from "../Dashboard/Dashboard";
import Overview from "../Dashboard/DashboardsPages/Overview/Overview";
import OrderManagements from "../Dashboard/DashboardsPages/OrderManagements/OrderManagements";
import ProductManagements from "../Dashboard/DashboardsPages/ProductManagements/ProductManagements";
import NewProduct from "../Dashboard/DashboardsPages/ProductManagements/NewProduct/NewProduct";
import CustomerManagement from "../Dashboard/DashboardsPages/CustomerManagement/CustomerManagement";
import Sales_Reports from "../Dashboard/DashboardsPages/Sales_Reports/Sales_Reports";
import PaymentManagement from "../Dashboard/DashboardsPages/PaymentManagement/PaymentManagement";
import ShippingManagement from "../Dashboard/DashboardsPages/ShippingManagement/ShippingManagement";
import MarketingTools from "../Dashboard/DashboardsPages/MarketingTools/MarketingTools";
import Notifications from "../Dashboard/DashboardsPages/Notifications/Notifications";

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
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "overview",
        element: <Overview />,
      },
      {
        path: "order-management",
        element: <OrderManagements />,
      },
      {
        path: "products-management",
        element: <ProductManagements />,
      },
      {
        path: "products-management/new-product",
        element: <NewProduct />,
      },
      {
        path: "customer-management",
        element: <CustomerManagement />,
      },
      {
        path: "sales-reports",
        element: <Sales_Reports />,
      },
      {
        path: "payment-management",
        element: <PaymentManagement />,
      },
      {
        path: "shipping-management",
        element: <ShippingManagement />,
      },
      {
        path: "marketing-tools",
        element: <MarketingTools />,
      },
      {
        path: "notifications",
        element: <Notifications />,
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
