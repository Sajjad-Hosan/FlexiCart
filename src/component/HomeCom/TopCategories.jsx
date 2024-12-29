import banner from "../../assets/line.png";
import image1 from "../../assets/banner-1.png";
import image2 from "../../assets/banner-2.png";
import { LuSend } from "react-icons/lu";

const imagesArray = [
  {
    id: 1,
    image: image1,
  },
  {
    id: 2,
    image: image2,
  },
];

const OfferCard = ({ image }) => {
  return (
    <div
      className="card flex-row border px-6 pt-8"
      style={{
        background: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col gap-2 p-6">
        <h1 className="text-xl">
          Up to <br />
          <span className="text-5xl">50%</span>
        </h1>
        <p className="text-xl font-semibold">
          Exclusive Kids & Adults Summer Outfits
        </p>
        <button className="btn btn-outline rounded-full px-8 mt-5">
          <LuSend className="text-lg" />
          Shop Now
        </button>
      </div>
      <img src={image} alt="" className="w-1/2 object-contain mt-auto"/>
    </div>
  );
};

const TopCategories = () => {
  return (
    <div className="">
      <h2 className="text-4xl font-semibold text-center mb-8">
        Top Categories
      </h2>
      <div className=" px-5 overflow-x-scroll flex">
        <div className="flex gap-8 items-center">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
            <div className="card w-[15rem]  overflow-hidden" key={i}>
              <img
                src="https://html.pixelfit.agency/pesco/assets/images/hero/hero-two_img1.jpg"
                alt=""
                className="w-full object-cover rounded-full"
              />
              <div className="flex flex-col my-2 p-2 text-center">
                <h3 className="text-2xl font-semibold ">Category {i}</h3>
                <p className="mt-1 text-sm text-gray-500">Collection +100</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-2 mt-20 lg:px-2">
        {imagesArray.map(({ image }, i) => (
          <OfferCard key={i} image={image} />
        ))}
      </div>
    </div>
  );
};

export default TopCategories;
