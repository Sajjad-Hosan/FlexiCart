import { BsGridFill, BsListCheck } from "react-icons/bs";
import PageBanner from "../../component/PageBanner/PageBanner";
import { FaListUl, FaMinus, FaPlus } from "react-icons/fa6";
import image from "../../assets/product-1.png";
import { GoPlus } from "react-icons/go";
import { IoBagCheckOutline } from "react-icons/io5";
import { useState } from "react";
import CouponModal from "../../component/ProductCom/CouponModal";
import BillsModal from "../../component/ProductCom/BillsModal";
import CheckoutModal from "../../component/ProductCom/CheckoutModal";

const CartCard = () => {
  const [products, setProducts] = useState(1);
  return (
    <>
      <div className="relative card flex-col p-5 border border-dashed shadow ">
        <div className="absolute -right-8 top-5">
          <div className="join join-vertical flex flex-col">
            <button
              className="btn btn-sm btn-outline join-item"
              onClick={() => setProducts((i) => (i < 10 ? i + 1 : i))}
            >
              <FaPlus />
            </button>
            <button
              className="btn btn-sm btn-outline join-item"
              onClick={() => setProducts((i) => (i > 1 ? i - 1 : i))}
            >
              <FaMinus />
            </button>
          </div>
        </div>
        <span className="card border border-blue-700 border-dashed px-4 py-1 lg:w-1/2 ml-auto mb-3 font-semibold text-sm">
          Products {products < 10 ? "0" + products : products}
        </span>
        <img
          src={image}
          alt=""
          className="card object-contain w-full transition duration-150 transform hover:scale-95 cursor-pointer"
        />
        <div className="flex flex-col gap-1 mt-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold">Product 1</h1>
            <p className="text-lg font-semibold">$180</p>
          </div>
          <div className="flex items-center gap-1">
            <p className="font-semibold">Color: </p>
            <p>Red</p>
          </div>
          <div className="flex items-center gap-1 border-t border-dashed border-gray-400 pt-3 mt-2">
            <p className="font-semibold">Total Price: </p>
            <p>$180</p>
          </div>
        </div>
      </div>
    </>
  );
};

const CartPage = () => {
  return (
    <>
      <CouponModal />
      <BillsModal />
      <CheckoutModal />
      <div>
        <PageBanner heading="Cart Page" afterPage="Carts" beforePage="Home" />
        <header className="card flex-row justify-between border-b p-4">
          <p className="text-xl font-semibold">Your All Carts</p>
          <div className="flex items-center gap-1">
            <button
              className="btn btn-ghost btn-sm text-lg flex tooltip"
              data-tip="Checkout"
              onClick={() =>
                document.getElementById("checkout_modal").showModal()
              }
            >
              <IoBagCheckOutline />
            </button>
            <button
              className="btn btn-active btn-sm text-lg flex tooltip"
              data-tip="Grids"
            >
              <BsGridFill />
            </button>
            <button
              className="btn btn-ghost btn-sm text-lg flex tooltip"
              data-tip="Lists"
            >
              <FaListUl />
            </button>
          </div>
        </header>
        <div className="mt-10">
          <div className="flex flex-wrap lg:flex-row gap-4 items-center justify-around my-5">
            <p className="text-xl font-semibold">
              Total Cart Products: <span className="text-gray-600">001</span>
            </p>
            <p className="text-xl font-semibold">
              Total Products Price: <span className="text-gray-600">$001</span>
            </p>
            <p className="text-xl font-semibold flex items-center gap-4">
              Do you have Cupon Code ?{" "}
              <div className="flex items-center gap-3">
                {/* if user click yes btn then it will show a modal and the modal will have a apply cupon and then calculate the price and then user can go checkout page */}
                <button
                  className="btn btn-sm btn-neutral"
                  onClick={() =>
                    document.getElementById("coupon_modal").showModal()
                  }
                >
                  Yes
                </button>
                <button className="btn btn-sm btn-error">No</button>
              </div>
            </p>
          </div>
          <div className="mt-6 p-5">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
              {[...Array(10).keys()].map((i) => (
                <CartCard key={i} />
              ))}
            </div>
            <div className="flex justify-end items-center gap-5 mt-10">
              <button
                className="btn btn-warning px-8"
                onClick={() =>
                  document.getElementById("bills_modal").showModal()
                }
              >
                <BsListCheck className="text-lg" /> Bills Check
              </button>
              <button
                className="btn btn-outline px-8"
                onClick={() =>
                  document.getElementById("checkout_modal").showModal()
                }
              >
                <IoBagCheckOutline className="text-lg" /> CheckOut
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
