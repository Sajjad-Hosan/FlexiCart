import { CgProfile } from "react-icons/cg";
import { FaRegBookmark } from "react-icons/fa6";
import { GoGear } from "react-icons/go";
import { HiMagnifyingGlass } from "react-icons/hi2";
import {
  MdOutlineDashboardCustomize,
  MdShoppingCartCheckout,
} from "react-icons/md";
import { NavLink } from "react-router-dom";
import CartDrawer from "../CartDrawer/CartDrawer";
import SettingModal from "../SettingModal/SettingModal";
import image from "../../../public/logo.png";

const headerArrays = [
  {
    path: "dashboard/overview",
    name: "Dashboard",
    icon: <MdOutlineDashboardCustomize className="text-lg" />,
  },
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
  {
    fn: true,
    func: () => document.getElementById("setting_modal").showModal(),
    name: "Settings",
    icon: <GoGear className="text-lg" />,
  },
];
const productCategories = ["electronics", "clothing", "books", "toys"];

const Header = () => {
  return (
    <>
      <SettingModal />
      <div className="navbar bg-base-100 mb-6">
        <div className="flex-1 flex gap-5">
          <img src={image} className="object-contain" alt="" width={160}/>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <HiMagnifyingGlass className="text-lg" />
              </div>
            </div>
            <div
              tabIndex={0}
              className="card dropdown-content bg-base-300 z-20 mt-3 shadow p-6"
            >
              <p className="font-semibold mb-5 text-center">
                Product Name or Category
              </p>
              <form action="" className="flex flex-col items-end gap-3">
                <div className="flex join">
                  <input
                    type="text"
                    className="input input-bordered join-item"
                  />
                  <select className="select select-bordered join-item">
                    <option disabled selected>
                      Categories
                    </option>
                    {productCategories.map((cate, i) => (
                      <option key={i} value={cate} className="capitalize">
                        {cate}
                      </option>
                    ))}
                  </select>
                </div>
                <button className="btn btn-neutral px-8" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
          <CartDrawer />
          <div className="">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm gap-1 dropdown-content bg-base-100 rounded-box z-20 mt-3 w-52 p-2 shadow"
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
