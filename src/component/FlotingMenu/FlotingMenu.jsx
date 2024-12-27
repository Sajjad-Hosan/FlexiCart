import { AiOutlineProduct } from "react-icons/ai";
import { GoHome } from "react-icons/go";
import { LuBellDot } from "react-icons/lu";
import { MdErrorOutline, MdOutlineLocalOffer } from "react-icons/md";
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

const FlotingMenu = () => {
  return (
    <div className="fixed bottom-6 lg:left-1/2 left-1/3 transform -translate-x-1/4 lg:-translate-x-1/3 z-40">
      <ul className="menu menu-horizontal gap-2 bg-base-200 rounded-box mt-6 px-5 py-2">
        {menuArrays.map(({ icon, path, name }, i) => (
          <li className="tooltip" data-tip={name} key={i}>
            <NavLink to={path}>{icon}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default FlotingMenu;
