import { IoReaderOutline } from "react-icons/io5";
import image from "../../assets/product-1.png";
import { BsCartPlus } from "react-icons/bs";
import { FaRegBookmark } from "react-icons/fa6";
import { Grid } from "swiper/modules";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const GridCard = () => {
  return (
    <div className="card p-6 border w-full transition-all duration-100">
      <img src={image} alt="" className="rounded-box object-contain transition duration-100 hover:scale-95 hover:skew-x-2 cursor-pointer" />
      <div className="flex flex-col gap-3 mt-8">
        <div className="flex items-center justify-between">
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
          <p className="font-semibold line-through">$001</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-md font-semibold">
            Lorem ipsum dolor sit elit. Laudantium, voluptatum!
          </p>
          <p className="font-semibold text-lg">$010</p>
        </div>
        <div className="pr-2 flex justify-end gap-2 transition duration-100">
          <button
            className="btn btn-sm btn-circle btn-ghost flex tooltip"
            data-tip="Whishlist"
          >
            <FaRegBookmark className="text-lg" />
          </button>
          <button
            className="btn btn-sm btn-circle btn-ghost flex tooltip"
            data-tip="Add to cart"
          >
            <BsCartPlus className="text-lg" />
          </button>
          <button
            className="btn btn-sm btn-circle btn-ghost flex tooltip"
            data-tip="View"
          >
            <IoReaderOutline className="text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
};

const GridsCardsLayout = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-3 gap-5">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <GridCard key={i} />
        ))}
      </div>
      <div className="flex justify-end mt-10 gap-2">
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
        <div className="join">
          <button className="join-item btn btn-sm btn-outline">1</button>
          <button className="join-item btn btn-sm btn-outline">2</button>
          <button className="join-item btn btn-sm btn-outline">3</button>
          <button className="join-item btn btn-sm btn-outline">4</button>
          <button className="join-item btn btn-sm btn-outline" >...</button>
        </div>
      </div>
    </div>
  );
};

export default GridsCardsLayout;
