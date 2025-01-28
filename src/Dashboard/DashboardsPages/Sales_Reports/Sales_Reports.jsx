import { useState } from "react";
import { BsDownload, BsThreeDotsVertical } from "react-icons/bs";
import { FaRegTrashCan } from "react-icons/fa6";
import { FiEdit3 } from "react-icons/fi";
import { HiDotsVertical } from "react-icons/hi";
import { LuScanEye } from "react-icons/lu";
import SalesTable from "../../../component/Sales_Reports_Com/SalesTable";
import ReportsTable from "../../../component/Sales_Reports_Com/ReportsTable";

// page edit mode - sales & reports table create , and update when i create ui!

const Dropdown = ({ name, array }) => {
  return (
    <>
      <select className="select select-sm select-bordered w-full">
        <option disabled selected>
          {name}
        </option>
        {array?.map(({ label, value }, i) => (
          <option key={i} value={value}>
            {label}
          </option>
        ))}
      </select>
    </>
  );
};

const SortArrays = [
  { label: "Newest", value: "newest" },
  { label: "Oldest", value: "oldest" },
  { label: "Price (Low to High)", value: "price_low_to_high" },
  { label: "Price (High to Low)", value: "price_high_to_low" },
];

const filterArrays = [
  { label: "All", value: "all" },
  { label: "Electronics", value: "electronics" },
  { label: "Clothing", value: "clothing" },
  { label: "Books", value: "books" },
  { label: "Toys", value: "toys" },
];

const Sales_Reports = () => {
  const [tab, setTab] = useState(0);
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-2xl">Sales & Reports</h1>
        <div className="flex items-center gap-4">
          <div role="tablist" className="tabs tabs-boxed">
            <a
              role="tab"
              className={`tab ${tab == 0 ? "tab-active" : ""}`}
              onClick={() => setTab(0)}
            >
              Sales
            </a>

            <a
              role="tab"
              className={`tab ${tab == 1 ? "tab-active" : ""}`}
              onClick={() => setTab(1)}
            >
              Reports
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-10 mt-8">
        {[...Array(3).keys()].map((i) => (
          <div className="card p-5 border border-dashed border-gray-500 w-full">
            <div className="flex justify-between items-center">
              <p className="text-sm font-semibold">Total Orders</p>
              <button className="btn btn-sm btn-circle btn-ghost">
                <BsThreeDotsVertical />
              </button>
            </div>
            <div className="flex justify-between items-center mt-3">
              <h1 className="text-4xl font-semibold">4,456</h1>
              <span className="border border-dashed border-gray-600 rounded-lg px-3 py-1 font-bold">
                ^ 20%
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-8 justify-between mt-5 bg-base-200 px-5 py-3 rounded-lg">
        <label className="input input-sm input-bordered flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
          <input type="text" className="grow" placeholder="Search" />
        </label>
        <div className="flex items-center gap-4">
          <Dropdown name="Sort by" array={SortArrays} />
          <Dropdown name="Filter by" array={filterArrays} />
        </div>
      </div>
      <div className="overflow-x-auto mt-6">
        {tab === 0 ? <SalesTable /> : <ReportsTable />}
      </div>
    </div>
  );
};
export default Sales_Reports;
