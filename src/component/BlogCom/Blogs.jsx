import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import image from "../../assets/blog-sm-5.png";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <>
      <Link
        className="flex flex-col md:flex-row p-7 border-y border-dashed w-full justify-between items-center transition-all duration-100 hover:scale-95 cursor-pointer"
        to={`/blog-view/${0}`}
      >
        <img src={image} alt="" className="card object-contain" />
        <div className="p-8 flex flex-col gap-3">
          <h1 className="text-3xl font-semibold">
            3 unexpected hacks to unleash your hidden creativity.
          </h1>
          <p className="font-semibold text-sm">
            Feeling like your well of creativity has run dry? This post dives
            into surprising strategies to spark your imagination, even if you
            consider yourself uncreative. Get ready to discover unconventional
            methods
          </p>
          <div className="flex gap-8">
            <p className="text-sm font-semibold">Shopify</p>
            <p className="text-sm">&#10040;</p>
            <p className="text-sm font-semibold">March 12, 2024</p>
          </div>
        </div>
      </Link>
    </>
  );
};

const Blogs = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-5">
      <div className="flex flex-col gap-0 p-4">
        {[...Array(3).keys()].map((i) => (
          <BlogCard key={i} />
        ))}

        <div className="flex mt-8 gap-2">
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
            <button className="join-item btn btn-sm btn-outline">...</button>
          </div>
        </div>
      </div>
      <div className="flex lg:flex-col gap-10 lg:w-[40%]">
        <div className="card flex-col gap-5 p-12 bg-base-300 w-1/2 lg:w-full">
          <span className="badge badge-neutral px-8 py-4 text-xl">
            Big Sale
          </span>
          <p className="flex font-semibold flex-col my-3">
            <h1 className="text-4xl">40% </h1>
            off Each Products
          </p>
          <button className="btn btn-neutral px-8">Shop Now</button>
        </div>
        <div className="card flex-col gap-4 p-10 bg-base-200 border w-1/2 lg:w-full">
          <p className="text-2xl font-semibold">Our Newsletters</p>
          <p className="text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
            quisquam?
          </p>
          <form className="flex flex-col gap-5 mt-10">
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Write Your Email"
            />
            <button className="btn btn-neutral w-1/2">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
