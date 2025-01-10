import { LuSend } from "react-icons/lu";
import image from "../../assets/newsletter-1.png";

const Newsletter = () => {
  return (
    <div className="card md:flex-row bg-orange-300">
      <div className="flex flex-col gap-4 py-20 px-14">
        <p className="font-semibold lg:text-lg">Our Newsletter</p>
        <h1 className="text-xl lg:text-3xl">
          Get weekly update. Sign up and get up to{" "}
          <span className="text-orange-500">20% off</span> your first purchase
        </h1>
        <div className="join">
          <input
            type="text"
            className="join-item input bg-gray-600 rounded-full"
            placeholder="Write your email address"
          />
          <button className="btn btn-neutral join-item px-8 rounded-full">
            <LuSend className="text-lg" /> Subscribe
          </button>
        </div>
      </div>
      <img src={image} alt="" />
    </div>
  );
};

export default Newsletter;
