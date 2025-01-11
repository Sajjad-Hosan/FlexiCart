import { BsGridFill, BsLayoutSidebarInset } from "react-icons/bs";
import PageBanner from "../../component/PageBanner/PageBanner";
import SideCategories from "../../component/ProductCom/SideCategories";
import { FaListUl } from "react-icons/fa6";
import GridsCardsLayout from "../../component/ProductCom/GridsCardsLayout";
import ModalCategories from "../../component/ProductCom/ModalCategories";

const ProductsPage = () => {
  return (
    <>
    {/* the modal ui is not ready yet! it has many changes. i will be done by next time. */}
      <ModalCategories />
      <div className="p-5">
        <PageBanner
          heading="Product Page"
          afterPage="Products"
          beforePage="Home"
        />
        <div className="flex gap-5">
          <SideCategories />
          <div className="flex flex-col gap-10 lg:w-[80%] w-full">
            <div className="flex flex-col md:flex-row items-center justify-between gap-5 w-full border py-2 px-6 rounded-box">
              <p className="font-semibold">Showing 01 - 16 of 100</p>
              <div className="flex items-center justify-between gap-4 w-1/2 lg:w-[30%]">
                <div className="flex items-center gap-1">
                  <button
                    onClick={() =>
                      document.getElementById("Categories").showModal()
                    }
                    className="btn btn-ghost btn-sm text-lg flex tooltip"
                    data-tip="Side Bar"
                  >
                    <BsLayoutSidebarInset className="text-lg" />
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
            <div className="flex items-center justify-center">
              <GridsCardsLayout />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
