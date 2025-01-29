import { HiXMark } from "react-icons/hi2";

const NotificationModal = () => {
  return (
    <>
      <dialog id="notification" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-lg">Notification Box</h3>
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost">
                <HiXMark />
              </button>
            </form>
          </div>
          <div className="p-5">
            <div className="flex flex-col gap-10">
              <div>
                <h3 className="font-semibold text-lg">Notification Title</h3>
                <p className="text-sm mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  scelerisque, ipsum id eleifend vestibulum, justo dui laoreet
                  tellus, a condimentum nisi nunc ac nisi. Lorem ipsum dolor sit
                  amet consectetur, adipisicing elit. Repellat nulla cumque
                  mollitia voluptate illo natus hic obcaecati nisi ut eveniet.
                </p>

                <div className="flex justify-end items-center gap-2 mt-6">
                  <button className="btn btn-sm btn-error">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default NotificationModal;
