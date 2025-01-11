import { HiXMark } from "react-icons/hi2";
import { LuSend } from "react-icons/lu";

const CouponModal = () => {
  return (
    <>
      <dialog id="coupon_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-semibold">
            Write your Coupon Code . . .
          </h3>
          <div className="flex flex-col gap-8 mt-8">
            <input type="text" className="input input-bordered w-full" placeholder="Coupon"/>
            <div className="flex justify-end gap-4">
              <button className="btn btn-sm btn-warning">
                <LuSend className="text-lg" /> Apply
              </button>
              <form method="dialog">
                <button className="btn btn-sm btn-error">
                  <HiXMark /> Close
                </button>
              </form>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default CouponModal;
