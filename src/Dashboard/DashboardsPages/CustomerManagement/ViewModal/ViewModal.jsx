import { BsThreeDotsVertical } from "react-icons/bs";
import { FiEdit3 } from "react-icons/fi";
import { HiXMark } from "react-icons/hi2";

const ViewModal = () => {
  return (
    <>
      <dialog id="view_modal" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-lg">Customer Details</h3>

            <div className="flex items-center gap-1">
              <button className="btn btn-circle btn-sm btn-ghost">
                <FiEdit3 />
              </button>
              <button className="btn btn-circle btn-sm btn-ghost">
                <BsThreeDotsVertical />
              </button>
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost">
                  <HiXMark />
                </button>
              </form>
            </div>
          </div>
          <div className="mt-5 flex items-center">
            <div className="flex flex-col justify-center items-center w-full">
              <div className="flex gap-10">
                <div className="avatar w-32 h-32 rounded-lg border border-dashed border-gray-500"></div>
                <div className="flex flex-col">
                  <h1 className="text-2xl font-semibold">Sajjad Hosan</h1>
                  <p className="text-xs font-semibold ml-auto">sajjadhosan@gail.com</p>
                  <button className="btn btn-sm btn-outline mt-6 ml-auto px-8">Follow</button>
                </div>
              </div>
              <div className="mt-8 flex justify-around items-center w-full">
                {[...Array(3).keys()].map((i) => (
                  <div key={i} className="flex flex-col text-center">
                    <span className="text-lg font-bold">1223</span>
                    <p className="text-sm">Brought</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col w-full">
              {[...Array(4).keys()].map((i) => (
                <div className="flex flex-col my-3" key={i}>
                  <p className="text-lg font-semibold">Email Address</p>
                  <p className="text-sm text-gray-500">
                    emailaddress@gmail.com
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default ViewModal;
