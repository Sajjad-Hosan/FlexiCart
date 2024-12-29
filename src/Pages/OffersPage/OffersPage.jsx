import NewCollOffers from "../../component/OffersCom/NewCollOffers";
import TimeOffer from "../../component/OffersCom/TimeOffer";
import TodaysOffers from "../../component/OffersCom/TodaysOffers";
import PageBanner from "../../component/PageBanner/PageBanner";

const OffersPage = () => {
    return (
        <div className="p-5 mt-10">
            <PageBanner/>
            <TimeOffer/>
            <NewCollOffers/>
            <TodaysOffers/>
        </div>
    );
};

export default OffersPage;