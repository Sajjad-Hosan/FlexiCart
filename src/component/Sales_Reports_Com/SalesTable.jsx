import { BsDownload } from "react-icons/bs";
import { FaRegTrashCan } from "react-icons/fa6";
import { FiEdit3 } from "react-icons/fi";
import { HiDotsVertical } from "react-icons/hi";
import { LuScanEye } from "react-icons/lu";
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
const SalesTable = () => {
  return (
    <div>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Profile</th>
            <th>Name</th>
            <th>Total Buy</th>
            <th>Total Products</th>
            <th>Total Orders</th>
            <th>Order Confirm</th>
            <th>Cancel Order</th>
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
              <td>$11254</td>
              <td>528</td>
              <td>600</td>
              <td>530</td>
              <td>30</td>
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
  );
};

export default SalesTable;
