import { BsDownload, BsThreeDotsVertical } from "react-icons/bs";
import { FaRegTrashCan } from "react-icons/fa6";
import { FiEdit3 } from "react-icons/fi";
import { HiDotsVertical } from "react-icons/hi";
import { LuScanEye } from "react-icons/lu";
import ViewModal from "./ViewModal/ViewModal";
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
const CustomerManagement = () => {
  return (
    <>
      <ViewModal />
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Customers Management</h1>
        <div className="flex items-center gap-2">
          <button className="btn btn-sm btn-neutral">New Customer</button>
          <button className="btn btn-sm btn-outline">Export</button>
        </div>
      </div>

      <div className="flex gap-10 mt-8">
        {[...Array(3).keys()].map((i) => (
          <div className="card p-5 border border-dashed border-gray-500 w-full">
            <div className="flex justify-between items-center">
              <p className="text-sm font-semibold">Total customer</p>
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

      <div className="flex items-center justify-between mt-5 bg-base-200 px-5 py-3 rounded-lg">
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
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Profile</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Total buy</th>
              <th>Status</th>
              <th>Join on</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(10).keys()].map((i) => (
              <tr key={i}>
                <td>{i}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle h-9 w-9">
                      <img
                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>Jhon dea</td>
                <td>jonedeo@gmail.com</td>
                <td>+0125685554</td>
                <td>1456</td>
                <td>
                  <span className="badge px-4 py-1 badge-success">Active</span>
                </td>
                <td>2025-01-09</td>
                <th>
                  <button
                    className="btn btn-ghost btn-xs"
                    onClick={() =>
                      document.getElementById("view_modal").showModal()
                    }
                  >
                    <LuScanEye />
                  </button>
                  <Actions />
                </th>
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
    </>
  );
};

export default CustomerManagement;
