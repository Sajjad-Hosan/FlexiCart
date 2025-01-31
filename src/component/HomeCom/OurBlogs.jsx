import { Link } from "react-router-dom";
import Newsletter from "../OffersCom/Newsletter";
import PropTypes from "prop-types";

const OurBlogs = ({ hide }) => {
  return (
    <div className="p-4">
      <div className="flex flex-col text-center">
        <p className="font-semibold">&#10040; Our Blogs &#10040;</p>
        <h1 className="text-4xl">Explore Our Article</h1>
      </div>
      <div className="my-14">
        <div className="grid lg:grid-cols-2 gap-4">
          <Link
            to={`/blog-view/${0}`}
            className="card p-4 cursor-pointer transition-all duration-150 hover:scale-95"
          >
            <img
              src="https://html.pixelfit.agency/pesco/assets/images/blog/blog-big-1.png"
              alt=""
              className="object-cover rounded-box"
            />
            <div className="flex flex-col mt-4 p-2">
              <h1 className="font-semibold text-2xl">
                From Clicks to Closets: Mastering the Art of Fashion E-commerce
                Marketing
              </h1>
              <p className="mt-2 text-sm text-gray-500 capitalize">
                dives into the world of fashion e-commerce marketing, guiding
                readers on how to turn online interest into sales. It likely
                explores strategies to attract potential customers, showcase
                products effectively, and create a smooth buying journey that
                converts clicks into clothes hanging in closets
              </p>
            </div>
          </Link>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 px-5">
            {[1, 2, 3, 4].map((i) => (
              <Link
                to={`/blog-view/${0}`}
                key={i}
                className="card p-4 cursor-pointer transition-all duration-150 hover:scale-95"
              >
                <img
                  src="https://html.pixelfit.agency/pesco/assets/images/blog/blog-sm-1.png"
                  alt=""
                  className="object-cover rounded-box"
                />
                <div className="flex flex-col gap-2 mt-4">
                  <h1 className="text-sm font-semibold">
                    Slay the Summer Style Game Must-Have Trends You Can Shop
                    Online
                  </h1>
                  <div className="flex justify-between">
                    <p className="text-sm text-gray-500 font-semibold">
                      By Admin
                    </p>
                    <p className="text-sm text-gray-500 font-semibold">
                      June 14, 2021
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      {hide && <Newsletter />}
    </div>
  );
};

export default OurBlogs;

OurBlogs.prototype = {
  hide: PropTypes.bool,
};
