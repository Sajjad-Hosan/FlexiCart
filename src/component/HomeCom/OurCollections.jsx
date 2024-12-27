import { BsCartPlus } from "react-icons/bs";
import { FaRegBookmark } from "react-icons/fa6";
import { IoReaderOutline } from "react-icons/io5";

const OurCollections = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold text-left mb-6">Our Collections</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div className="card bg-base-200 p-8 lg:p-4 shadow">
            <img
              src="https://html.pixelfit.agency/pesco/assets/images/products/feature-product-2.png"
              alt=""
              className="p-2 rounded-box"
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
            <div className="flex flex-col gap-2 p-2 mt-3">
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-2">
                  Brand:
                  <p className="font-semibold">Sofali</p>
                </span>
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
              </div>
              <p className="text-sm font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                voluptas doloribus rem mollitia dolorem laboriosam placeat sit
                sequi!
              </p>
              <span className="flex items-center gap-2 text-2xl">
                $ 15.88 <p className="line-through text-gray-600">$34.00</p>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurCollections;
