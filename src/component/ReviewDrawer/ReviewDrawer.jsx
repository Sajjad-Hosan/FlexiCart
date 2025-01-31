import { MdOutlineReviews } from "react-icons/md";

const ReviewDrawer = () => {
  return (
    <>
      <div className="drawer drawer-end z-20">
        <input id="review_drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="review_drawer"
            className="drawer-button btn btn-ghost btn-circle btn-sm "
          >
            <MdOutlineReviews className="text-lg" />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="review_drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="bg-base-200 text-base-content min-h-full w-[35rem] md:w-[40rem] p-10">
            <p className="text-lg font-semibold">Customer Reviews</p>
            <div className="flex flex-col gap-5 mt-8">
              {[...Array(5).keys()].map((i) => (
                <div className="p-6 card flex-row gap-6 border border-dashed border-gray-400">
                  <img
                    src={`https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/shop/product-${2}-2.jpg`}
                    alt=""
                    className="object-contain"
                    width={80}
                  />
                  <div className="flex flex-col gap-2">
                    <p className="text-sm font-semibold">Product Title</p>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Libero placeat quas corporis at totam odio, veritatis
                      obcaecati, iusto dolorem dolorum molestias, magni quae ut
                      saepe vero omnis dignissimos pariatur tempore esse nihil
                      earum distinctio? Ullam molestias rem aliquid labore
                      ducimus.
                    </p>
                    <p className="text-sm font-semibold text-right">
                      19 jun, 2025
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewDrawer;
