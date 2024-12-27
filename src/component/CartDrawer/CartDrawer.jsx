import { FaRegTrashCan } from "react-icons/fa6";
import { MdShoppingCartCheckout } from "react-icons/md";

const CartCard = ({ data }) => {
  return (
    <div className="card bg-base-100 shadow-xl p-5 z-50">
      <figure className="flex gap-3">
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Movie"
          className="w-52 object-cover rounded-lg"
        />
        <div className="">
          <button className="btn btn-circle btn-ghost btn-sm">
            <FaRegTrashCan className="text-lg" />
          </button>
        </div>
      </figure>
      <div className="mt-2 flex flex-col p-2">
        <div className="flex justify-between">
          <p className="font-semibold">Product Name</p>
          <p className="font-semibold">Quantity: +1</p>
        </div>
      </div>
    </div>
  );
};

const CartDrawer = () => {
  return (
    <>
      <div className="drawer drawer-end">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer"
            className="btn btn-ghost btn-circle drawer-button"
          >
            <div className="indicator">
              <MdShoppingCartCheckout className="text-lg" />
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </label>
        </div>
        <div className="drawer-side z-40">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="flex flex-col justify-between bg-base-200 h-full w-[22rem] lg:w-[26rem] p-4">
            <p className="font-semibold pb-3">Your Products</p>
            <div className="overflow-y-scroll">
              <div className="mt-5 grid gap-3 p-2 overflow-hidden">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
                  (i) => (
                    <CartCard key={i} data={i} />
                  )
                )}{" "}
              </div>
            </div>
            <div className="flex justify-between items-center px-2">
              <h1 className="flex items-end text-2xl">
                Tk. &nbsp;
                <span className="font-semibold text-lg">1220.00</span>
              </h1>
              <button className="btn btn-outline w-1/2">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
