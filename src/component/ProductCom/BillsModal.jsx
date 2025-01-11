import { HiXMark } from "react-icons/hi2";
import { IoBagCheckOutline } from "react-icons/io5";
import { MdOutlineDeleteSweep } from "react-icons/md";

const BillsModal = () => {
  return (
    <>
      <dialog id="bills_modal" className="modal">
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
          <div className="p-5 flex flex-col justify-center items-center mt-6">
            <div className="card border border-dashed border-blue-700 shadow p-10 w-[25rem]">
              <h1 className="text-2xl font-semibold mb-6">Cart Total</h1>
              <div className="flex justify-between gap-5">
                <span>Subtotal:</span>
                <span className="font-semibold">$120.00</span>
              </div>
              <div className="flex justify-between gap-5 mt-5">
                <span>Shipping:</span>
                <div className="flex flex-col gap-2 items-end">
                  <div className="flex gap-2 items-center">
                    <span> &#10040;</span>
                    <span className="line-through">Free Shopping</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <span>Home Delivary: </span>
                    <span className="font-semibold"> $100</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <span>Total Products Price: </span>
                    <span className="font-semibold"> $100</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between gap-5 border border-dashed border-gray-400 rounded-box p-3 mt-5 font-semibold">
                <span>Total Price :</span>
                <span className="font-bold">$120.00</span>
              </div>
            </div>
            <div className="flex gap-5 ml-auto mt-10">
              <button
                className="btn btn-outline px-8"
                onClick={() =>
                  document.getElementById("checkout_modal").showModal()
                }
              >
                <IoBagCheckOutline className="text-lg" /> CheckOut
              </button>
              <button className="btn btn-error  px-8">
                <MdOutlineDeleteSweep className="text-lg" /> Delete Bills
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default BillsModal;
