import { BsCartPlus } from "react-icons/bs";
import {
  FaAngleDown,
  FaAngleLeft,
  FaAngleUp,
  FaRegBookmark,
} from "react-icons/fa6";
import { IoReaderOutline } from "react-icons/io5";
import { MdOutlineReviews } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import ReviewDrawer from "../../component/ReviewDrawer/ReviewDrawer";

const ProductView = () => {
  const navigate = useNavigate();
  return (
    <div className="p-5">
      <div className="card p-10">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <button
              className="btn btn-sm btn-ghost mt-1"
              onClick={() => navigate(-1)}
            >
              <FaAngleLeft />
            </button>
            <p className="text-2xl font-semibold">Product View</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="pr-2 flex justify-end gap-2 transition duration-100 my-2">
              <button
                className="btn btn-sm btn-circle btn-ghost flex tooltip"
                data-tip="Wishlist"
              >
                <FaRegBookmark className="text-lg" />
              </button>
              <ReviewDrawer />
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 mt-6">
          <div className="flex flex-col gap-3 lg:w-[30%]">
            <img
              src={`https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/shop/product-${2}-2.jpg`}
              alt=""
              className="object-contain rounded-box"
              width={450}
            />
            <div className="flex justify-center items-center gap-3">
              {[...Array(4).keys()].map((i) => (
                <img
                  width={70}
                  src={`https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/shop/product-${
                    i + 1
                  }-2.jpg`}
                  className="border border-dashed border-orange-500 rounded-box cursor-pointer transition-all duration-150 hover:scale-95"
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 py-10 flex-1">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Product Title</h2>
              <div className="rating rating-sm">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
            </div>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              quis optio perferendis perspiciatis deserunt, aperiam odit
              consequatur quae atque ad aliquam dolorum illo ipsam tempora nihil
              autem sint laudantium sit ipsa neque iste. Qui, eligendi? Alias,
              temporibus aspernatur? Nam veniam sint reiciendis, quasi hic
              eligendi incidunt est sequi perspiciatis porro.
            </p>

            <div className="flex flex-col lg:flex-row gap-6 justify-between">
              <div className="flex flex-col mt-5 gap-4">
                <div className="flex items-center gap-10">
                  <p className="text-sm font-semibold">Product Size </p>
                  <div className="flex items-center gap-1">
                    {[...Array(5).keys()].map((i) => (
                      <button className="btn btn-sm btn-circle btn-ghost px-6">
                        Xl
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-10">
                  <p className="text-sm font-semibold">Product Colors </p>
                  <div className="flex items-center gap-2">
                    {[...Array(5).keys()].map((i) => (
                      <button className="btn btn-sm btn-circle btn-neutral"></button>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-10">
                  <p className="text-sm font-semibold">Product Price</p>
                  <p className="text-2xl font-semibold">$ 200</p>
                </div>
              </div>
              <div className="card p-10 border border-dashed border-gray-500">
                <p className="text-lg mb-4 font-semibold border-b border-gray-400">
                  More infos
                </p>
                <div className="flex justify-between items-center gap-10">
                  <p className="text-sm font-semibold">Dimensions</p>
                  <p className="text-lg font-semibold">30 x 35 x 7 cm</p>
                </div>
                <div className="flex justify-between items-center gap-10">
                  <p className="text-sm font-semibold">Weight</p>
                  <p className="text-lg font-semibold">101g</p>
                </div>
              </div>
            </div>
            <div className="flex gap-3 mt-4 ml-auto">
              <button className="btn btn-neutral px-8">
                <BsCartPlus /> Add to Cart
              </button>
              <div className="join">
                <button
                  className="join-item btn btn-outline px-6 flex tooltip"
                  data-tip="Increase"
                >
                  <FaAngleUp />
                </button>
                <span className="card join-item btn btn-outline px-6">01</span>
                <button
                  className="join-item btn btn-outline px-6 flex tooltip"
                  data-tip="Decrease"
                >
                  <FaAngleDown />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductView;
