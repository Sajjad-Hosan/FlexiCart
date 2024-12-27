const TopCategories = () => {
  return (
    <div className="">
      <h2 className="text-2xl font-semibold text-left mb-6">Top Categories</h2>
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
                <h3 className="text-2xl font-semibold text-white">
                  Category {i}
                </h3>
                <p className="mt-1 text-sm text-gray-500">Collection +100</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopCategories;
