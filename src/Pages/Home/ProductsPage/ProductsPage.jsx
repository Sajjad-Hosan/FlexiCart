import { BsGridFill } from "react-icons/bs";
import PageBanner from "../../../component/PageBanner/PageBanner";
import SideCategories from "../../../component/ProductCom/SideCategories";
import { FaListUl } from "react-icons/fa6";
import GridsCardsLayout from "../../../component/ProductCom/GridsCardsLayout";

const ProductsPage = () => {
  return (
    <div className="p-5">
      <PageBanner />
      <div className="flex gap-5">
        <SideCategories />
        <div className="flex flex-col gap-10 w-[80%]">
          <div className="flex items-center justify-between w-full border py-2 px-6 rounded-box">
            <p className="font-semibold">Showing 01 - 16 of 100</p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
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
              |
              <div className="">
                <select className="select select-bordered select-sm">
                  <option defaultChecked disabled>
                    Sort by
                  </option>
                  <option value="1">Default</option>
                  <option value="2">Price</option>
                  <option value="3">Rating</option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex">
            <GridsCardsLayout />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
