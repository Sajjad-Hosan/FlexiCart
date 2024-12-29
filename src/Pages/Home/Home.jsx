import Header from "../../component/Header/Header";
import AllProducts from "../../component/HomeCom/AllProducts";
import Banner from "../../component/HomeCom/Banner";
import OurBlogs from "../../component/HomeCom/OurBlogs";
import OurCollections from "../../component/HomeCom/OurCollections";
import Reviews from "../../component/HomeCom/Reviews";
import TopCategories from "../../component/HomeCom/TopCategories";
import TrendingProducts from "../../component/HomeCom/TrendingProducts";
import TimeOffer from "../../component/OffersCom/TimeOffer";

const Home = () => {
  return (
    <div>
      <Header />
      {/* ------------ */}
      <div className="flex flex-col gap-28 mb-10 w-full">
        <Banner />
        <TopCategories />
        <OurCollections />
        <AllProducts />
        <TrendingProducts />
        <Reviews />
        <TimeOffer/>
        <OurBlogs/>
      </div>
    </div>
  );
};

export default Home;
