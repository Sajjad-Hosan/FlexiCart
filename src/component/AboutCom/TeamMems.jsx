import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa6";
import image from "../../assets/team-1.jpg";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const SocialsArray = [
  {
    id: 1,
    name: "Facebook",
    icon: <FaFacebook className="text-lg" />,
    href: "https://www.facebook.com",
  },
  {
    id: 2,
    name: "Instagram",
    icon: <FaInstagram className="text-lg" />,
    href: "https://www.facebook.com",
  },
  {
    id: 3,
    name: "Youtube",
    icon: <FaYoutube className="text-lg" />,
    href: "https://www.facebook.com",
  },
  {
    id: 4,
    name: "Linkedin",
    icon: <FaLinkedin className="text-lg" />,
    href: "https://www.facebook.com",
  },
];

const TeamCard = () => {
  return (
    <div className="min-w-[20rem] card p-8 border relative transition duration-150 cursor-pointer hover:shadow hover:scale-95">
      <div className="absolute right-5 top-5 flex gap-2">
        {SocialsArray.map(({ id, name, icon, href }) => (
          <button
            className="btn btn-sm btn-ghost flex tooltip tooltip-bottom"
            data-tip={name}
            key={id}
          >
            {icon}
          </button>
        ))}
      </div>
      <div className="flex flex-col gap-1 p-3 mb-2 mt-3">
        <h1 className="text-2xl font-semibold">Jhon Sina</h1>
        <p className="text-md font-semibold text-gray-600">
          Marketing Specialist
        </p>
      </div>
      <img src={image} alt="" className="card object-contain" />
    </div>
  );
};

const TeamMems = () => {
  return (
    <div className="p-5">
      <div className="flex flex-col mb-5">
        <h2 className="font-semibold text-left mb-1">&#10040; Team Members</h2>
        <h1 className="text-4xl font-semibold">Our members</h1>
      </div>
      <div className="flex justify-end items-center gap-4 mb-5">
        <button
          className="btn btn-neutral btn-sm text-lg flex tooltip "
          data-tip="Prev"
        >
          <GrFormPrevious />
        </button>
        <button
          className="btn btn-neutral btn-sm text-lg flex tooltip "
          data-tip="Next"
        >
          <GrFormNext />
        </button>
      </div>
      <div className="overflow-scroll flex gap-5">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
          <TeamCard key={i} />
        ))}
      </div>
    </div>
  );
};

export default TeamMems;
