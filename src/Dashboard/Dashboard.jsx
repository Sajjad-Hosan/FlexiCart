import { useState } from "react";
import { AiOutlineProduct } from "react-icons/ai";
import { GoHome } from "react-icons/go";
import { LuBellDot } from "react-icons/lu";
import { NavLink, Outlet } from "react-router-dom";

const dashboardArrays = [
  {
    path: "/dashboard/overview",
    name: "Overview",
    icon: <GoHome className="text-xl" />,
  },
  {
    path: "/dashboard/products-management",
    name: "Product Management",
    icon: <AiOutlineProduct className="text-xl" />,
  },
  {
    path: "/dashboard/order-management",
    name: "Order Management",
    icon: <GoHome className="text-xl" />,
  },
  {
    path: "/dashboard/customer-management",
    name: "Customer Management",
    icon: <AiOutlineProduct className="text-xl" />,
  },
  {
    path: "/dashboard/sales-reports",
    name: "Sales & Reports",
    icon: <GoHome className="text-xl" />,
  },
  {
    path: "/dashboard/payment-management",
    name: "Payment Management",
    icon: <AiOutlineProduct className="text-xl" />,
  },
  {
    path: "/dashboard/shipping-management",
    name: "Shipping Management",
    icon: <GoHome className="text-xl" />,
  },
  {
    path: "/dashboard/marketing-tools",
    name: "Marketing Tools",
    icon: <AiOutlineProduct className="text-xl" />,
  },
  {
    path: "/dashboard/notifications",
    name: "Notifications",
    icon: <GoHome className="text-xl" />,
  },
];
const menuArrays = [
  {
    path: "/",

    name: "Home",
    icon: <GoHome className="text-xl" />,
  },
  {
    path: "/products",

    name: "Products",
    icon: <AiOutlineProduct className="text-xl" />,
  },
  {
    path: "/blog",

    name: "Blogs",
    icon: <LuBellDot className="text-xl" />,
  },
];
const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex">
      <div
        className={`${
          isOpen ? "w-[20%] justify-center items-center  p-6" : "w-[7%] p-3"
        } bg-orange-500 h-full flex  flex-col gap-2 overflow-hidden`}
      >
        <h1 className="text-3xl font-semibold">{isOpen ? "Dashboard" : "D"}</h1>

        <ul className="menu rounded-box w-56 gap-2">
          {dashboardArrays.map(({ path, icon, name }, i) => (
            <li key={i}>
              <NavLink to={path}>
                {icon} {isOpen ? name : ""}
              </NavLink>
            </li>
          ))}
        </ul>
          <div className="mx-auto w-full bg-gray-500 h-[1px]"></div>
        <ul className="menu w-56 gap-2">
          {menuArrays.map(({ path, icon, name }, i) => (
            <li key={i}>
              <NavLink to={path}>
                {icon} {isOpen ? name : ""}
              </NavLink>
            </li>
          ))}
        </ul>
        {isOpen ? (
          <>
            <div className="card border p-2 flex-row items-center gap-4 w-full mt-2 transition-all duration-100">
              <div className="avatar w-10 h-10 border rounded-full"></div>
              <h1 className="font-semibold">Sajjad Hosan</h1>
            </div>
          </>
        ) : (
          <>
            <div className="card justify-center items-center border p-2 mt-4 avatar w-10 h-10 rounded-full mx-auto cursor-pointer transition-all duration-100 hover:scale-95 tooltip" data-tip='Sajjad'></div>
          </>
        )}
      </div>
      <div className={`w-full h-full p-4 border`}>
        <Outlet />
      </div>
    </div>
  );
};
export default Dashboard;
