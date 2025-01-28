import PageBanner from "../../component/PageBanner/PageBanner";
import image from "../../assets/product-1.png";
import { FaMinus, FaPlus } from "react-icons/fa6";

const WishlistCard = ({ i }) => {
  return (
    <>
      <li className="card relative flex-col lg:flex-row gap-9 items-end lg:justify-around border border-dashed border-gray-600 p-5">
        <div className="absolute bottom-3 left-12 lg:left-16">
          <span className="card border border-blue-700 border-dashed px-4 py-1 mb-3 font-semibold text-sm">
            Products 0
          </span>
        </div>
        <div className="flex gap-2">
          <img
            src={`https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/shop/product-${i}-2.jpg`}
            alt=""
            className="object-contain w-[35%] rounded-xl"
          />
          <div className="card flex-col gap-3 p-4">
            <h1 className="text-xl font-semibold">
              Lorem ipsum dolor sit amet.
            </h1>
            <div className="flex items-center gap-3 text-lg font-semibold">
              <span className="">Price: </span>
              <span className="font-bold">$100</span>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[...Array(4).keys()].map((i) => (
                <span className="card border border-dashed p-2 text-center capitalize">
                  red
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="card px-2 py-4 border border-dashed join join-vertical">
            <button className="btn btn-sm btn-ghost join-item">
              <FaPlus />
            </button>
            <button className="btn btn-sm btn-ghost join-item">
              <FaMinus />
            </button>
          </div>
          <button className="btn btn-outline px-8">Remove</button>
        </div>
      </li>
    </>
  );
};

const WishlistPage = () => {
  return (
    <div>
      <PageBanner heading="Wishlist" afterPage="Wishlist" beforePage="Home" />
      <div className="p-5 mt-5">
        <div>
          <ul className="flex flex-col gap-5">
            {[...Array(8).keys()].map((i) => (
              <WishlistCard key={i} i={i} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;
