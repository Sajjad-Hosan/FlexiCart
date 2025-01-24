import { useState } from "react";
import { AiOutlineProduct } from "react-icons/ai";
import { FaUsersGear } from "react-icons/fa6";
import { GoHome, GoListOrdered } from "react-icons/go";
import { LiaToolsSolid } from "react-icons/lia";
import { LuBellDot } from "react-icons/lu";
import {
  MdGridView,
  MdOutlineBugReport,
  MdOutlineDashboardCustomize,
  MdOutlineNotificationsActive,
  MdOutlinePayment,
} from "react-icons/md";
import { TbLayoutGridRemove, TbShoppingCartCopy } from "react-icons/tb";
import { NavLink, Outlet } from "react-router-dom";

const dashboardArrays = [
  {
    path: "/dashboard/overview",
    name: "Overview",
    icon: <MdGridView className="text-xl" />,
  },
  {
    path: "/dashboard/products-management",
    name: "Product Management",
    icon: <TbShoppingCartCopy className="text-xl" />,
  },
  {
    path: "/dashboard/order-management",
    name: "Order Management",
    icon: <GoListOrdered className="text-xl" />,
  },
  {
    path: "/dashboard/customer-management",
    name: "Customer Management",
    icon: <FaUsersGear className="text-xl" />,
  },
  {
    path: "/dashboard/sales-reports",
    name: "Sales & Reports",
    icon: <MdOutlineBugReport className="text-xl" />,
  },
  {
    path: "/dashboard/payment-management",
    name: "Payment Management",
    icon: <MdOutlinePayment className="text-xl" />,
  },
  {
    path: "/dashboard/shipping-management",
    name: "Shipping Management",
    icon: <TbLayoutGridRemove className="text-xl" />,
  },
  {
    path: "/dashboard/marketing-tools",
    name: "Marketing Tools",
    icon: <LiaToolsSolid className="text-xl" />,
  },
  {
    path: "/dashboard/notifications",
    name: "Notifications",
    icon: <MdOutlineNotificationsActive className="text-xl" />,
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
  //   {
  //     path: "/blog",

  //     name: "Blogs",
  //     icon: <LuBellDot className="text-xl" />,
  //   },
];
const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="flex h-full overflow-hidden">
      <div
        className={`${
          isOpen ? "w-[19%] justify-center items-center  p-4" : "w-[6%] p-3"
        } bg-base-300 flex  flex-col gap-2 overflow-hidden transition-all duration-200 fixed`}
      >
        <div
          className="mb-1 btn transition-all duration-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <>
              <MdOutlineDashboardCustomize className="text-2xl" />
              <p className="text-xl font-semibold">Dashboard</p>
            </>
          ) : (
            <MdOutlineDashboardCustomize className="text-2xl" />
          )}
        </div>

        <ul className="menu rounded-box w-56 gap-2 transition-all duration-200">
          {dashboardArrays.map(({ path, icon, name }, i) => (
            <li key={i}>
              <NavLink to={path}>
                {icon} {isOpen ? name : ""}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="mx-auto w-full bg-gray-500 h-[1px]"></div>
        <ul className="menu w-56 gap-2 transition-all duration-200">
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
            <div className="card border border-dashed border-gray-500 p-2 flex-row items-center gap-4 w-full transition-all duration-200">
              <div className="avatar w-10 h-10 border rounded-full"></div>
              <h1 className="font-semibold">Sajjad Hosan</h1>
            </div>
          </>
        ) : (
          <>
            <div
              className="card justify-center items-center border border-dashed border-gray-500 p-2 mt-4  w-10 h-14 rounded-full mx-auto cursor-pointer transition-all duration-100 hover:scale-95 tooltip"
              data-tip="Sajjad"
            ></div>
          </>
        )}
      </div>
      <div
        className={`${
          isOpen ? "w-[81%]" : "w-[94%]"
        } p-8 border transition-all duration-200 overflow-scroll ml-auto`}
      >
        <Outlet />
      </div>
    </div>
  );
};
export default Dashboard;
