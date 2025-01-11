import { BsBank } from "react-icons/bs";
import { FaRegCreditCard } from "react-icons/fa6";
import { HiOutlineHand } from "react-icons/hi";
import { HiXMark } from "react-icons/hi2";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const CheckoutModal = () => {
  return (
    <>
      {/* only the cart method has added but not complete yet! also the hand and bank method not ready yet! */}
      <dialog id="checkout_modal" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-lg">Products Bills</h3>
            <form method="dialog">
              <button
                className="btn btn-sm btn-circle btn-ghost flex tooltip tooltip-bottom text-lg"
                data-tip="Close"
              >
                <HiXMark />
              </button>
            </form>
          </div>
          <div className="p-5 mt-5">
            <div className="flex justify-end gap-4">
              <button className="btn btn-outline px-6">
                <FaRegCreditCard className="text-lg" /> Cart
              </button>
              <button className="btn btn-outline px-6">
                <HiOutlineHand className="text-lg" /> Hand
              </button>
              <button className="btn btn-outline px-6">
                <BsBank className="text-lg" /> Bank
              </button>
            </div>
            <div className="flex flex-col">
              <div className="mt-6 grid grid-cols-2 gap-5">
                <form className="flex flex-col gap-4 p-8">
                  <p className="mb-2 font-semibold text-lg">Customer info</p>
                  <input
                    type="text"
                    className="input input-bordered"
                    placeholder="Customer Name"
                  />
                  <input
                    type="text"
                    className="input input-bordered"
                    placeholder="Customer Number"
                  />
                  <input
                    type="text"
                    className="input input-bordered"
                    placeholder="Customer Address"
                  />
                  <input
                    type="text"
                    className="input input-bordered"
                    placeholder="Customer Number"
                  />
                </form>
                <form className="flex flex-col gap-4 p-8">
                  <p className="mb-2 font-semibold text-lg">Credit Card info</p>

                  <input
                    type="text"
                    className="input input-bordered"
                    placeholder="Cart Number"
                  />
                </form>
              </div>
              <div className="flex justify-end gap-5 mt-4">
                <button className="btn btn-neutral px-8">
                  <IoCheckmarkCircleOutline className="text-lg" />
                  Confirm Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default CheckoutModal;
