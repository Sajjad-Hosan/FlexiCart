import React from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const Reviews = () => {
  return (
    <div className="flex flex-col md:flex-row gap-5 items-center p-4">
      <div className="flex flex-col gap-14 flex-grow p-10 md:w-[40%]">
        <h1 className="text-4xl capitalize text-left">
          What Our client say about us,
        </h1>
        <div className="flex md:flex-col items-center gap-4 ml-auto">
          <button className="btn btn-circle btn-neutral">
            <FaAngleUp className="text-lg" />
          </button>
          <button className="btn btn-circle btn-neutral">
            <FaAngleDown className="text-lg" />
          </button>
        </div>
      </div>
      <div className="overflow-scroll flex w-full md:w-60%] p-2">
        <div className="flex gap-5">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="card bg-base-300 border-gray-600 p-14 w-[39rem]"
            >
              <p className="font-semibold">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
                iure sunt, placeat amet quisquam facere quo? Quis molestiae
                voluptatem quibusdam.
              </p>
              <div className="flex justify-between items-center mt-8">
                <div className="flex">
                  <div className="flex gap-5 items-end">
                    <img
                      src="https://html.pixelfit.agency/pesco/assets/images/testimonial/author-2.png"
                      alt=""
                      className="avatar"
                    />
                    <div className="pb-2">
                      <h3 className="text-2xl font-semibold">John Doe</h3>
                      <div className="rating rating-sm">
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                          defaultChecked
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                      </div>
                    </div>
                  </div>
                  <span></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
