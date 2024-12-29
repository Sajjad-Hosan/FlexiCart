import { useState } from "react";
import { BsCartPlus } from "react-icons/bs";
import { FaRegBookmark } from "react-icons/fa6";
import { IoReaderOutline } from "react-icons/io5";

const TrendingProducts = () => {
  const [tab, setTab] = useState(1);
  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <div className="flex flex-col mb-8">
          <h2 className="font-semibold text-left mb-1">
            &#10040; Trending Products
          </h2>
          <h1 className="text-4xl font-semibold">What's Trending Now</h1>
        </div>
      
      </div>
      <div className="grid lg:grid-cols-3 lg:gap-5 gap-y-40 mt-36">
        {[1, 2, 3].map((i) => (
          <div className="card justify-end border border-dashed border-gray-600 h-[25rem] p-8 lg:p-4 shadow relative">
            <img
              src="https://html.pixelfit.agency/pesco/assets/images/products/feature-product-2.png"
              alt=""
              className="p-2 rounded-box absolute -top-36 left-28 lg:left-14 h-[22rem] transition-all transform hover:translate-y-5 hover:skew-x-2 duration-200 cursor-pointer"
            />

            <div className="pr-2 flex justify-end gap-2 transition duration-100 my-2">
              <button
                className="btn btn-sm btn-circle btn-ghost flex tooltip"
                data-tip="Whishlist"
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

export default TrendingProducts;
