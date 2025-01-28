import { useState } from "react";
import { BsCartPlus } from "react-icons/bs";
import { FaRegBookmark } from "react-icons/fa6";
import { IoReaderOutline } from "react-icons/io5";

const AllProducts = () => {
  const [tab, setTab] = useState(1);
  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row justify-between items-center mb-10">
        <div className="flex flex-col mb-5">
          <h2 className="font-semibold text-left mb-1">
            &#10040; Shop Products
          </h2>
          <h1 className="text-4xl font-semibold">Our All Products</h1>
        </div>
        <div role="tablist" className="tabs tabs-boxed px-4 py-4">
          {[
            {
              id: 1,
              name: "Best Sellers",
            },
            {
              id: 2,
              name: "New Products",
            },
            {
              id: 3,
              name: "Sale Products",
            },
          ].map(({ name, id }, i) => (
            <a
              onClick={() => setTab(id)}
              role="tab"
              className={`tab ${tab === id ? "tab-active" : ""}`}
              key={i}
            >
              {name}
            </a>
          ))}
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div className="card bg-base-200 p-8 lg:p-4 shadow">
            <img
              src={`https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/shop/product-${i}-2.jpg`}
              alt=""
              className="p-2 rounded-box"
            />

            <div className="pr-2 flex justify-end gap-2 transition duration-100 my-2">
              <button
                className="btn btn-sm btn-circle btn-ghost flex tooltip"
                data-tip="Wishlist"
              >
                <FaRegBookmark className="text-lg" />
              </button>
              <button
                className="btn btn-sm btn-circle btn-ghost flex tooltip"
                data-tip="Add to cart"
              >
                <BsCartPlus className="text-lg" />
              </button>
              <button
                className="btn btn-sm btn-circle btn-ghost flex tooltip"
                data-tip="View"
              >
                <IoReaderOutline className="text-lg" />
              </button>
            </div>
            <div className="flex gap-2 p-3 mt-3">
              <div className="flex flex-col justify-between items-start">
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star"
                  />
                </div>
                <p className="text-xs font-semibold mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  voluptas doloribus rem mollitia dolorem laboriosam placeat sit
                  sequi!
                </p>
              </div>
              <span className="flex flex-col items-center gap-1 font-semibold">
                $15.88 <p className="line-through text-gray-600">$34.00</p>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
