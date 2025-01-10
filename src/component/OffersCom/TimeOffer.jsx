import { FaTags } from "react-icons/fa6";
import image1 from "../../assets/deal-1.png";
import { LuSend } from "react-icons/lu";

const TimeOffer = () => {
  return (
    <div className="card md:flex-row md:items-end capitalize border-2 px-5 lg:h-[35rem]">
      <div className="flex flex-col py-20 md:px-4 lg:px-8 gap-10">
        <p className="font-semibold text-xl flex items-center gap-2">
          <FaTags className="text-lg" /> deal of the week
        </p>
        <h1 className="text-3xl">
          Hurry Up! Offer ends in. Get <br />
          <span className="text-red-500"> UP TO 80% OFF</span>
        </h1>
        <div className="flex gap-8">
          <div className="card rounded-full p-6 border">
            <h1 className="text-xl lg:text-4xl font-semibold">02</h1>
            <p className="lg:text-xl">Days</p>
          </div>
          <div className="card rounded-full p-6 border">
            <h1 className="text-xl lg:text-4xl font-semibold">02</h1>
            <p className="lg:text-xl">Hours</p>
          </div>
          <div className="card rounded-full p-6 border">
            <h1 className="text-xl lg:text-4xl font-semibold">02</h1>
            <p className="lg:text-xl">Mins</p>
          </div>
          <div className="card rounded-full p-6 border">
            <h1 className="text-xl lg:text-4xl font-semibold">02</h1>
            <p className="lg:text-xl">Secs</p>
          </div>
        </div>
        <button className="btn btn-outline rounded-full w-1/2">
          <LuSend className="text-lg" /> Shop Now
        </button>
      </div>
      <img
        src={image1}
        alt={image1}
        className="object-contain md:w-1/2 ml-auto"
      />
    </div>
  );
};
export default TimeOffer;
