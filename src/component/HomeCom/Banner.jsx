import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../../index.css";

// import required modules
import { Mousewheel, Pagination } from "swiper/modules";
import { MdAddShoppingCart, MdShoppingCartCheckout } from "react-icons/md";

export default function Banner() {
  return (
    <div className="h-[550px] relative">
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        {[1, 2, 3, 4, 5].map((i) => (
          <SwiperSlide key={i}>
            <img src={`https://swiperjs.com/demos/images/nature-${i}.jpg`} />
            <div className="absolute bottom-20 left-5 lg:left-14 lg:w-1/2 text-black text-left p-4">
              <h1 className="lg:text-4xl font-semibold">Product Heading</h1>
              <p className="text-sm lg:text-md font-semibold mt-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consectetur itaque vero doloremque sed necessitatibus minus
                maiores possimus repudiandae aliquid saepe. Quo velit facere eos
                dolores possimus dicta accusantium quam esse.
              </p>
              <div className="flex items-center gap-3 mt-6">
                <button className="btn btn-neutral px-8">
                  <MdAddShoppingCart className="text-2xl" /> Add Cart
                </button>
                <button className="btn btn-accent px-8">
                  <MdShoppingCartCheckout className="text-2xl" /> Buy Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
