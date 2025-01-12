import { HiXMark } from "react-icons/hi2";

const SettingModal = () => {
  return (
    <>
      <dialog id="setting_modal" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-lg">Setting</h3>
            <form method="dialog">
              <button
                className="btn btn-sm btn-circle btn-ghost flex tooltip tooltip-bottom text-lg"
                data-tip="Close"
              >
                <HiXMark />
              </button>
            </form>
          </div>
          <div className="p-5">
            <ul className="flex flex-col ">
              <li className="grid grid-cols-2 gap-10">
                <div className="flex flex-col gap-2">
                  <p className="font-semibold">Lights</p>
                  <li className="grid grid-cols-4 gap-5">
                    {[...Array(4).keys()].map((i) => (
                      <button className="btn btn-outline">Theme</button>
                    ))}
                  </li>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-semibold">Darks</p>
                  <li className="grid grid-cols-4 gap-5">
                    {[...Array(4).keys()].map((i) => (
                      <button className="btn btn-outline">Theme</button>
                    ))}
                  </li>
                </div>
              </li>
              <p className="font-semibold mt-4 mb-2">Language</p>
              <li className="grid grid-cols-5 gap-5">
                {[...Array(5).keys()].map((i) => (
                  <button className="btn btn-outline">English</button>
                ))}
              </li>
              <li className="flex flex-col gap-2 mt-4">
                <p className="font-semibold">Notification: </p>
                <div className="flex items-center gap-3">
                  <button className="btn btn-outline">Mute</button>
                  <button className="btn btn-outline">Popup</button>
                  <button className="btn btn-outline">Only Popup</button>
                </div>
              </li>
              <div className="flex justify-end">
                <span className="card px-8 py-3 font-semibold mt-10 text-xl text-right border border-dashed border-gray-400">
                  Coming Soon new methods
                </span>
              </div>
            </ul>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default SettingModal;
