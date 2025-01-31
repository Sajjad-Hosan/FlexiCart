import { FaPaperPlane } from "react-icons/fa6";
import { HiXMark } from "react-icons/hi2";

const CommentModal = () => {
  return (
    <>
      <dialog id="comment_modal" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-lg">Leave a comment</h3>
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost">
                <HiXMark />
              </button>
            </form>
          </div>
          <div className="p-5">
            <p className="text-lg font-semibold">Write a Comment</p>
            <form className="mt-4 card gap-3">
              <div className="grid grid-cols-2 gap-5">
                <input
                  type="text"
                  className="input input-bordered"
                  placeholder="Write your name"
                />
                <input
                  type="email"
                  className="input input-bordered"
                  placeholder="Write your email"
                />
              </div>
              <textarea
                name=""
                id=""
                className="textarea textarea-bordered"
                placeholder="Message"
                rows={4}
              ></textarea>
              <div className="flex mt-4">
                <button className="btn btn-outline px-8 ">
                  <FaPaperPlane /> Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};
export default CommentModal;
