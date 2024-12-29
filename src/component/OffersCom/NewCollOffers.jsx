import { LuSend } from "react-icons/lu";

const NewCollOffers = () => {
  return (
    <div className="flex flex-col gap-5 mt-20">
     <div className="flex gap-5">
     <div className="card gap-4 border p-12 w-[40%] bg-gradient-to-r from-[#6F5D83] to-[#AF99C7]">
        <span className="badge badge-lg badge-neutral px-8 py-4 font-semibold">
          Up to 40%
        </span>
        <h1 className="text-4xl font-semibold">
          Shop new Collection For Women
        </h1>
        <span className="w-1/2 border border-dashed border-gray-400"></span>
        <button className="btn btn-outline w-1/2 rounded-full mt-8">
          <LuSend className="text-lg" /> Shop Now
        </button>
      </div>
      <div className="card border p-12 w-[60%] bg-gradient-to-r from-[#EFEEFE] to-[#FAEFF5]">
        <span className="text-4xl mb-3 font-bold">45% Off</span>
        <span className="border border-neutral w-24 "></span>
        <h1 className="text-5xl font-semibold mt-4">
          Discover the Latest Women's Collection
        </h1>
        <button className="btn btn-outline w-1/2 rounded-full mt-8">
          <LuSend className="text-lg" /> Shop Now
        </button>
      </div>
     </div>
     <div className="flex flex-row-reverse gap-5">
     <div className="card gap-4 border p-12 w-[40%] bg-gradient-to-r from-[#866657] to-[#D6A890]">
        <span className="badge badge-lg badge-neutral px-8 py-4 font-semibold">
          Up to 40%
        </span>
        <h1 className="text-4xl font-semibold">
        Unveil New Trends in Women's Clothing
        </h1>
        <span className="w-1/2 border border-dashed border-gray-400"></span>
        <button className="btn btn-outline w-1/2 rounded-full mt-8">
          <LuSend className="text-lg" /> Shop Now
        </button>
      </div>
      <div className="card border p-12 w-[60%] bg-gradient-to-r from-[#EFEEFE] to-[#FAEFF5]">
        <span className="text-4xl mb-3 font-bold">35% Off</span>
        <span className="border border-neutral w-24 "></span>
        <h1 className="text-5xl font-semibold mt-4">
        Explore Fresh Arrivals in Women’s Fashion
        </h1>
        <button className="btn btn-outline w-1/2 rounded-full mt-8">
          <LuSend className="text-lg" /> Shop Now
        </button>
      </div>
     </div>
    </div>
  );
};

export default NewCollOffers;
