import { LuPenLine } from "react-icons/lu";
import image1 from "../../assets/banner-1.png";
import { NavLink, useNavigate } from "react-router-dom";
import { TiInfoOutline } from "react-icons/ti";
import { IoIosArrowRoundBack } from "react-icons/io";

const profileInfo = [
  {
    userId: "u12345",
    name: "sajjad Hosan",
    email: "john.doe@example.com",
    phone: "+1234567890",
    address: {
      street: "123 Elm Street",
      city: "Springfield",
      state: "IL",
      zipCode: "62701",
      country: "USA",
    },
    accountDetails: {
      username: "johndoe",
      password: "hashed_password_here",
      dateJoined: "2025-01-01",
      lastLogin: "2025-01-10",
    },
    preferences: {
      language: "English",
      currency: "USD",
      newsletterSubscribed: true,
    },
    ordersInfos: {
      total_items_order: 24,
      total_amount: "$1000",
      return_items_order: 5,
      cancelled_items_order: 3,
      completed_items_order: 10,
      average_rating: 4.5,
    },
  },
];

const MenuArrays = [
  {
    path: "#profile",
    label: "Profile",
    icon: <TiInfoOutline className="text-lg" />,
  },
  {
    path: "privacy",
    label: "Privacy",
    icon: <TiInfoOutline className="text-lg" />,
  },
  {
    path: "account",
    label: "Account",
    icon: <TiInfoOutline className="text-lg" />,
  },
  {
    path: "payment",
    label: "Payment Setting",
    icon: <TiInfoOutline className="text-lg" />,
  },
];
const ProfilePage = () => {
  const navigate = useNavigate();
  // const class1 = 'flex items-center justify-end gap-10'
  const class1 = "grid md:grid-cols-2 gap-10";
  return (
    <div className="flex justify-center items-center p-10 w-full">
      <div className="card border border-dashed border-blue-700 p-8 w-full">
        <div className="flex items-center gap-3">
          <button className="btn btn-sm btn-ghost" onClick={() => navigate(-1)}>
            <IoIosArrowRoundBack className="text-lg" />
          </button>
          <p className="text-xl font-semibold">Profile Page</p>
        </div>
        <div className="card border border-dashed border-gray-400 mt-5 relative">
          <img src={image1} alt="" className="object-contain h-[15rem]" />
          <div className="absolute -bottom-10 overflow-hidden left-8 card rounded-full w-[10rem] h-[10rem] border border-dashed border-gray-600">
            <img src={image1} alt="" className="object-contain" />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-2 mt-10 p-4 w-full">
          <div className="w-[30%] hidden lg:flex">
            <ul className="menu gap-2 rounded-box w-full">
              <p className="text-lg font-semibold mb-3">Profile Settings</p>
              {MenuArrays.map(({ path, label, icon }, i) => (
                <li key={i}>
                  <NavLink to={path}>
                    {icon}
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full lg:border-l border-dashed border-gray-500 lg:pl-10">
            <p className="font-semibold mb-4 text-xl">User Details</p>
            <div className="flex flex-col gap-2">
              {profileInfo.map(
                (
                  {
                    userId,
                    name,
                    email,
                    phone,
                    accountDetails,
                    address,
                    ordersInfos,
                  },
                  i
                ) => (
                  <ul className="space-y-2">
                    <div className={class1}>
                      <li
                        key={i}
                        className="flex items-center gap-2 font-semibold shadow px-10 py-3 rounded-lg"
                      >
                        <span>UserID: </span>
                        <span className="font-bold">{userId}</span>
                      </li>
                      <li
                        key={i}
                        className="flex items-center gap-2 font-semibold shadow px-10 py-3 rounded-lg"
                      >
                        <span>Username: </span>
                        <span className="font-bold">
                          {accountDetails.username}
                        </span>
                      </li>
                    </div>
                    <div className={class1}>
                      <li
                        key={i}
                        className="flex items-center gap-2 font-semibold shadow px-8 py-3 rounded-lg"
                      >
                        <span>Name: </span>
                        <span className="font-bold">{name}</span>
                      </li>
                      <li
                        key={i}
                        className="flex items-center gap-2 font-semibold shadow px-8 py-3 rounded-lg"
                      >
                        <span>Email: </span>
                        <span className="font-bold">{email}</span>
                      </li>
                    </div>
                    <li
                      key={i}
                      className="flex items-center gap-2 font-semibold shadow px-8 py-3 rounded-lg h-[3em]"
                    >
                      <span>Phone: </span>
                      <span className="font-bold">{phone}</span>
                    </li>
                    <div className={class1}>
                      <div className="flex flex-col gap-2">
                        <p className="my-3 font-semibold">Orders Details</p>
                        <li
                          key={i}
                          className="flex items-center gap-2 font-semibold shadow px-8 py-3 rounded-lg"
                        >
                          <span>Total Products: </span>
                          <span className="font-bold">
                            {ordersInfos.total_items_order}
                          </span>
                        </li>
                        <li
                          key={i}
                          className="flex items-center gap-2 font-semibold shadow px-8 py-3 rounded-lg"
                        >
                          <span>Completed Order: </span>
                          <span className="font-bold">
                            {ordersInfos.completed_items_order}
                          </span>
                        </li>
                        <li
                          key={i}
                          className="flex items-center gap-2 font-semibold shadow px-8 py-3 rounded-lg"
                        >
                          <span>Return Products: </span>
                          <span className="font-bold">
                            {ordersInfos.return_items_order}
                          </span>
                        </li>
                        <li
                          key={i}
                          className="flex items-center gap-2 font-semibold shadow px-8 py-3 rounded-lg"
                        >
                          <span>Cancelled Items: </span>
                          <span className="font-bold">
                            {ordersInfos.cancelled_items_order}
                          </span>
                        </li>
                      </div>
                      <div className="flex flex-col gap-2">
                        <p className="my-3 font-semibold">Address</p>
                        <li
                          key={i}
                          className="flex items-center gap-2 font-semibold shadow px-8 py-3 rounded-lg"
                        >
                          <span>City: </span>
                          <span className="font-bold">{address.city}</span>
                        </li>
                        <li
                          key={i}
                          className="flex items-center gap-2 font-semibold shadow px-8 py-3 rounded-lg"
                        >
                          <span>Country: </span>
                          <span className="font-bold">{address.country}</span>
                        </li>
                        <li
                          key={i}
                          className="flex items-center gap-2 font-semibold shadow px-8 py-3 rounded-lg"
                        >
                          <span>State: </span>
                          <span className="font-bold">{address.state}</span>
                        </li>
                        <li
                          key={i}
                          className="flex items-center gap-2 font-semibold shadow px-8 py-3 rounded-lg"
                        >
                          <span>Street: </span>
                          <span className="font-bold">{address.street}</span>
                        </li>
                      </div>
                    </div>
                  </ul>
                )
              )}
            </div>
            <div className="flex justify-end mt-10">
              <button className="btn btn-warning px-8">
                <LuPenLine className="text-lg" /> Update Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
