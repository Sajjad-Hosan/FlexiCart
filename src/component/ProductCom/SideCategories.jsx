import image from "../../assets/shop-ads.png";

const categories = [];
const SideCategories = () => {
  return (
    <div className="card bg-base-100 rounded-box border">
      <ul className="flex flex-col gap-10 p-6">
        <li>
          <h2 className="text-2xl font-semibold mb-4">Products Categories</h2>
          <ul className="flex flex-col gap-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <li key={i}>
                <label className="font-semibold text-md flex items-center gap-3">
                  <input type="checkbox" className="" />
                  Electronic
                  <span className="text-sm font-bold text-gray-800">(000)</span>
                </label>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <h2 className="text-2xl font-semibold mb-4">Price Filter</h2>
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-sm">$09 - $100</p>
            <div className="flex"></div>
            <input
              type="range"
              min={0}
              max="100"
              className="w-full bg-transparent cursor-pointer appearance-none disabled:opacity-50 disabled:pointer-events-none focus:outline-none
  [&::-webkit-slider-thumb]:w-2.5
  [&::-webkit-slider-thumb]:h-2.5
  [&::-webkit-slider-thumb]:-mt-0.5
  [&::-webkit-slider-thumb]:appearance-none
  [&::-webkit-slider-thumb]:bg-white
  [&::-webkit-slider-thumb]:shadow-[0_0_0_4px_rgba(37,99,235,1)]
  [&::-webkit-slider-thumb]:rounded-full
  [&::-webkit-slider-thumb]:transition-all
  [&::-webkit-slider-thumb]:duration-150
  [&::-webkit-slider-thumb]:ease-in-out
  [&::-webkit-slider-thumb]:dark:bg-neutral-100

  [&::-moz-range-thumb]:w-2.5
  [&::-moz-range-thumb]:h-2.5
  [&::-moz-range-thumb]:appearance-none
  [&::-moz-range-thumb]:bg-white
  [&::-moz-range-thumb]:border-4
  [&::-moz-range-thumb]:border-blue-600
  [&::-moz-range-thumb]:rounded-full
  [&::-moz-range-thumb]:transition-all
  [&::-moz-range-thumb]:duration-150
  [&::-moz-range-thumb]:ease-in-out

  [&::-webkit-slider-runnable-track]:w-full
  [&::-webkit-slider-runnable-track]:h-2
  [&::-webkit-slider-runnable-track]:bg-gray-100
  [&::-webkit-slider-runnable-track]:rounded-full
  [&::-webkit-slider-runnable-track]:dark:bg-neutral-700

  [&::-moz-range-track]:w-full
  [&::-moz-range-track]:h-2
  [&::-moz-range-track]:bg-gray-100
  [&::-moz-range-track]:rounded-full"
            />
          </div>
        </li>
        <li>
          <h2 className="text-2xl font-semibold mb-4">Products Brands</h2>
          <ul className="flex flex-col gap-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <li key={i}>
                <label className="font-semibold text-md flex items-center gap-3">
                  <input type="checkbox" className="" />
                  Electronic
                  <span className="text-sm font-bold text-gray-800">(000)</span>
                </label>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <h2 className="text-2xl font-semibold mb-4">Products Colors</h2>
          <ul className="grid grid-cols-5 gap-y-3">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <li key={i}>
                <label>
                  <input type="radio" className="hidden peer" name="size" />
                  <span className="bg-transparent px-4 py-1 rounded-box cursor-pointer border peer-checked:bg-neutral-content"></span>
                </label>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <h2 className="text-2xl font-semibold mb-4">Products Sizes</h2>
          <ul className="grid grid-cols-5 gap-3">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <li key={i}>
                <label>
                  <input type="radio" className="hidden peer" name="size" />
                  <span className="bg-transparent px-4 py-1 rounded-box cursor-pointer border peer-checked:bg-neutral-content">
                    {i}
                  </span>
                </label>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <div className="card flex-row relative bg-base-300">
            <div className="flex flex-col gap-5 p-10">
              <span className="badge badge-neutral px-8 py-4 text-xl">
                Big Sale
              </span>
              <p className="flex font-semibold flex-col">
                <h1 className="text-4xl">40% </h1>
                off Each Products
              </p>
              <button className="btn btn-neutral px-8">Shop Now</button>
            </div>
            <img
              src={image}
              alt=""
              className="w-1/2 object-contain absolute right-0 bottom-0"
            />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default SideCategories;
