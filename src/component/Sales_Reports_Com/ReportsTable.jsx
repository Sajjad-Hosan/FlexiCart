import { BsDownload } from "react-icons/bs";
import { FaRegTrashCan } from "react-icons/fa6";
import { FiEdit3 } from "react-icons/fi";
import { HiDotsVertical } from "react-icons/hi";
import { HiXMark } from "react-icons/hi2";
import { LuScanEye } from "react-icons/lu";
import image from "../../assets/product-1.png";

const MsgModal = () => {
  return (
    <>
      <dialog id="msg_modal" className="modal">
        <div className="modal-box w-11/12 max-w-2xl">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-lg">Report Details</h3>
            <form method="dialog">
              <button
                className="btn btn-circle btn-sm btn-ghost flex tooltip"
                data-tip="Close"
              >
                <HiXMark />
              </button>
            </form>
          </div>
          <div className="p-1 flex gap-5 mt-4">
            <div>
              <img src={image} alt="" className="object-cover w-[60rem] card" />
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="text-2xl font-semibold">Product Name</h1>

              <p className="text-sm">
                <span className="font-bold">Report Message: </span>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio asperiores maiores rem culpa quo, placeat officiis
                est tempora consectetur? Odit. Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Et, voluptatum laboriosam. Dolorem
                quos rerum est voluptate, ut officia, excepturi optio enim vitae
                id veritatis quam, iure dignissimos minima. Optio, dolorem!
              </p>
              <div className="flex items-center justify-end gap-3 mt-5">
                <button className="btn btn-outline">Replay</button>
                <button className="btn btn-outline" disabled>
                  Al Replay
                </button>
              </div>
              <div className="flex justify-end mt-5">
                <p className="text-sm font-semibold text-gray-400">
                  02-05-2005
                </p>
              </div>
            </div>
          </div>
        </div>
      </dialog>
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

const ReportsTable = () => {
  const message =
    "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolore nam illum ducimus eaque tenetur nisi? Rerum unde quod dolorum, recusandae placeat molestiae nobis aspernatur voluptate";
  return (
    <>
      <MsgModal />
      <div>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Profile</th>
              <th>Name</th>
              <th>Product Picture</th>
              <th>Report Msg</th>
              <th>Date</th>
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
                <td>
                  {message.length > 40 ? (
                    <>{message.slice(0, 40)}...</>
                  ) : (
                    message
                  )}
                </td>
                <td>2025-01-09</td>
                <th>
                  <button
                    className="btn btn-ghost btn-xs"
                    onClick={() =>
                      document.getElementById("msg_modal").showModal()
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

export default ReportsTable;
