const OurBlogs = () => {
  return (
    <div className="p-4">
      <div className="flex flex-col text-center">
        <p className="font-semibold">&#10040; Our Blogs &#10040;</p>
        <h1 className="text-4xl">Explore Our Article</h1>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-2 gap-4">
          <div className="card p-4">
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
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="card p-4">
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBlogs;