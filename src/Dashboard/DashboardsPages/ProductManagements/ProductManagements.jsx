import { FaRegTrashCan } from "react-icons/fa6";
import { FiEdit3 } from "react-icons/fi";
import { Link } from "react-router-dom";

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
const ProductManagements = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Products Management</h1>
        <div className="flex items-center gap-3">
          <button className="btn btn-sm">Refresh</button>
          <button className="btn btn-sm">Export</button>
          <Link to={"new-product"} className="btn btn-sm">
            New Product
          </Link>
          <button className="btn btn-sm">Import CSV</button>
        </div>
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
      <div className="mt-6">
        <div className="overflow-x-auto">
          <table className="table table-xs">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox checkbox-sm" />
                  </label>
                </th>
                <th></th>
                <th>Product</th>
                <th>Category</th>
                <th>Stock</th>
                <th>Price</th>
                <th></th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {[...Array(10).keys()].map((i) => (
                <tr key={i}>
                  <th>{i}</th>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox checkbox-sm" />
                    </label>
                  </th>
                  <td></td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-9 w-9">
                          <img
                            src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-semibold text-md">
                          Hart Hagerty
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>Shop</td>
                  <td>{i * 4 - 2}</td>
                  <td>$415</td>
                  <td></td>
                  <th>
                    <button className="btn btn-ghost btn-xs">
                      <FaRegTrashCan />
                    </button>
                    <button className="btn btn-ghost btn-xs">
                      <FiEdit3 />
                    </button>
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
      </div>
    </div>
  );
};

export default ProductManagements;
