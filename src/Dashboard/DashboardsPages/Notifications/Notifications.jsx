import { BsCalendarCheck, BsPerson } from "react-icons/bs";
import NotificationModal from "../../../component/NotificationModal/NotificationModal";

const Notifications = () => {
  let message = ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                scelerisque, ipsum id eleifend vestibulum, justo dui laoreet
                tellus, a condimentum nisi nunc ac nisi. Lorem ipsum dolor sit
                amet consectetur, adipisicing elit. Repellat nulla cumque
                mollitia voluptate illo natus hic obcaecati nisi ut eveniet.`;
  return (
    <>
      <NotificationModal />
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Notifications</h1>
        <div className="flex items-center gap-2">
          <button className="btn btn-circle btn-sm btn-ghost">A</button>
          <button className="btn btn-circle btn-sm btn-ghost">A</button>
          <button className="btn btn-circle btn-sm btn-ghost">A</button>
        </div>
      </div>
      <div className="mt-6">
        <div className="grid grid-cols-2 gap-4">
          {[...Array(10).keys()].map((i) => (
            <div className="card p-5 border border-dashed">
              <div className="flex justify-between items-center gap-2">
                <p className="text-sm font-semibold">Notification {i + 1}</p>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <BsCalendarCheck />
                    <p className="text-xs font-semibold">2 days ago</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <BsPerson />
                    <p className="text-xs font-semibold">User Name</p>
                  </div>
                </div>
              </div>
              <p className="text-sm mt-2">
                {message.length > 50 ? message.slice(0, 190) + "..." : ""}
              </p>
              <div className="flex justify-end mt-2">
                <button
                  className="btn btn-sm btn-ghost"
                  onClick={() =>
                    document.getElementById("notification").showModal()
                  }
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-end items-center gap-4">
          <button className="btn btn-neutral px-8">More Notifications</button>
          <button className="btn btn-neutral px-8">New Notifications</button>
        </div>
      </div>
    </>
  );
};

export default Notifications;
