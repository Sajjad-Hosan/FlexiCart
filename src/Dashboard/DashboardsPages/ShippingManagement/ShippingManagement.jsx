import React from "react";
import { BsChatSquareDots, BsDownload } from "react-icons/bs";
import { FaRegTrashCan } from "react-icons/fa6";
import { FiEdit3 } from "react-icons/fi";
import { HiDotsVertical } from "react-icons/hi";

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

const Actions = () => {
  return (
    <>
      <div className="dropdown dropdown-left">
        <div tabIndex={0} role="button" className="btn btn-xs btn-ghost m-1">
          <HiDotsVertical />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-200 rounded-box z-10 w-40 p-2 shadow"
        >
          <li>
            <a>
              <BsDownload /> Download
            </a>
          </li>
          <li>
            <a>
              <FiEdit3 /> Edit Order
            </a>
          </li>
          <li>
            <a>
              <FaRegTrashCan /> Delete
            </a>
          </li>
        </ul>
      </div>
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

const ShippingManagement = () => {
  const success = " bg-green-200 text-green-500 ";
  const error = "bg-red-200 text-red-500";
  const warning = "bg-yellow-200 text-yellow-500";
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-lg md:text-2xl font-semibold">
          Shipping Management
        </h1>
        <div className="flex items-center gap-5">
          <button className="btn btn-sm btn-ghost">A</button>
          <button className="btn btn-sm btn-ghost">A</button>
          <button className="btn btn-sm btn-ghost">A</button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-8 mt-8">
        {[...Array(8).keys()].map((i) => (
          <div className="card flex-row items-center justify-center gap-4 p-4 border border-dashed border-gray-500">
            <p className="text-lg font-semibold">Total Orders </p>
            <p className="font-semibold">098</p>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-8 justify-between mt-6 bg-base-200 px-5 py-3 rounded-lg">
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
      <div className="mt-8">
        <div className="overflow-x-auto">
          <table className="table table-xs">
            <thead>
              <tr className="font-semibold">
                <th>#</th>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Shipping</th>
                <th>Tracking</th>
                <th>Current</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(10).keys()].map((i) => (
                <tr key={i}>
                  <th>{i}</th>
                  <td>658545</td>
                  <td>Jhon Deo</td>
                  <td>Free shipping</td>
                  <td>1114586695665</td>
                  <td>
                    <span
                      className={`border border-dashed px-4 py-[1px] rounded-full font-semibold ${warning}`}
                    >
                      Delivered
                    </span>
                  </td>
                  <td>$08.34</td>
                  <td className="flex items-center">
                    <Actions />
                    <button className="btn btn-xs btn-ghost">
                      <BsChatSquareDots />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between items-center w-full mt-6">
            <p className="text-sm font-semibold text-gray-500">
              Showing 1 / 10 of 256 entries
            </p>
            <div className="flex items-center gap-2">
              <button className="btn btn-sm btn-ghost">Previous</button>
              <div className="join">
                <button className="btn btn-sm join-item">1</button>
                <button className="btn btn-sm join-item">2</button>
                <button className="btn btn-sm join-item">...</button>
                <button className="btn btn-sm join-item">5</button>
              </div>
              <button className="btn btn-sm btn-ghost">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingManagement;
