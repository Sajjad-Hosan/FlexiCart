import { AiOutlineProduct } from "react-icons/ai";
import { CgMenuGridO, CgProfile } from "react-icons/cg";
import { FaRegBookmark } from "react-icons/fa6";
import { GoGear, GoHome } from "react-icons/go";
import { LuBellDot } from "react-icons/lu";
import {
  MdErrorOutline,
  MdOutlineDashboardCustomize,
  MdOutlineLocalOffer,
  MdShoppingCartCheckout,
} from "react-icons/md";
import { NavLink } from "react-router-dom";

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
    name: "Our Blog",
    icon: <LuBellDot className="text-xl" />,
  },
  {
    path: "/offers",
    name: "Products Offers",
    icon: <MdOutlineLocalOffer className="text-xl" />,
  },
  {
    path: "/about",
    name: "About",
    icon: <MdErrorOutline className="text-xl" />,
  },
];

const headerArrays = [
  {
    path: "carts",
    name: "Carts",
    icon: <MdShoppingCartCheckout className="text-lg" />,
  },
  {
    path: "Wishlist",
    name: "Wishlist",
    icon: <FaRegBookmark className="text-lg" />,
  },
  {
    path: "profile",
    name: "Profile",
    icon: <CgProfile className="text-lg" />,
  },
];

const MoreDropdown = () => {
  return (
    <>
      <div className="dropdown dropdown-top">
        <div tabIndex={0} role="button" className="tooltip" data-tip="More">
          <CgMenuGridO className="text-xl" />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-gray-400  rounded-box z-20 w-52 p-2 shadow"
        >
          {headerArrays.map(({ path, name, icon, fn, func }, i) =>
            fn ? (
              <li key={i}>
                <button className="flex gap-2" onClick={() => func()}>
                  {icon}
                  {name}
                </button>
              </li>
            ) : (
              <li key={i}>
                <NavLink className="flex gap-2" to={path}>
                  {icon}
                  {name}
                </NavLink>
              </li>
            )
          )}
        </ul>
      </div>
    </>
  );
};

const FlotingMenu = () => {
  return (
    <div className="fixed bottom-6 lg:left-1/2 left-1/3 transform -translate-x-1/4 lg:-translate-x-1/3 z-40">
      <ul className="menu menu-horizontal gap-2 bg-gray-400 rounded-box mt-6 px-5 py-2">
        {menuArrays.map(({ icon, path, name }, i) => (
          <li className="tooltip" data-tip={name} key={i}>
            <NavLink to={path}>{icon}</NavLink>
          </li>
        ))}
        <li>
          <MoreDropdown />
        </li>
      </ul>
    </div>
  );
};
export default FlotingMenu;
