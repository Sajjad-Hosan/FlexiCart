import { useState } from "react";
import image from "../../assets/deal-2.png";

const TodayOfferCard = () => {
  return (
    <div className="card flex-col lg:flex-row items-center p-5"> 
      <img src={image} alt="" className="rounded-xl z-10 transform transition-all duration-150 hover:scale-95 hover:-translate-y-5 cursor-pointer" />
      <div className="flex flex-col gap-2 border p-10 h-[16rem] rounded-xl -ml-2">
        <div className="flex items-center justify-between ">
          <p className="text-xl font-semibold">Brand: Sofoli</p>
          <div className="rating rating-sm">
            <input type="radio" name="rating-1" className="mask mask-star" />
            <input
              type="radio"
              name="rating-1"
              className="mask mask-star"
              defaultChecked
            />
            <input type="radio" name="rating-1" className="mask mask-star" />
            <input type="radio" name="rating-1" className="mask mask-star" />
            <input type="radio" name="rating-1" className="mask mask-star" />
          </div>
        </div>
        <p className="font-semibold">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, itaque!
        </p>
        <div className="">
          <div className="grid grid-flow-col gap-2 text-center auto-cols-max">
            <div className="flex flex-col p-2">
              <span className="countdown font-mono text-xl">
                <span style={{ "--value": 15 }}></span>
              </span>
              days
            </div>
            <div className="flex flex-col p-2">
              <span className="countdown font-mono text-xl">
                <span style={{ "--value": 10 }}></span>
              </span>
              hours
            </div>
            <div className="flex flex-col p-2">
              <span className="countdown font-mono text-xl">
                <span style={{ "--value": 24 }}></span>
              </span>
              min
            </div>
            <div className="flex flex-col p-2">
              <span className="countdown font-mono text-xl">
                <span></span>
              </span>
              sec
            </div>
          </div>
        </div>
        <p className="text-2xl font-semibold">
          $15.00 <span className="line-through text-gray-500">$43.40</span>
        </p>
      </div>
    </div>
  );
};

const TodaysOffers = () => {
  const [counter, setCounter] = useState();
  return (
    <div className="mt-20 w-full flex">
      
        <div className="grid md:grid-cols-2 gap-2">
          {[1, 2, 3,4].map((i) => (
            <TodayOfferCard key={i}/>
          ))}
        </div>
  
    </div>
  );
};

export default TodaysOffers;
