import { GiPayMoney } from "react-icons/gi";
import { GrMapLocation } from "react-icons/gr";
import { MdPayment, MdPhoneInTalk } from "react-icons/md";

const OurOffers = () => {
  const cardClass =
    "card flex-col md:flex-row justify-center items-center text-center md:text-left gap-5 border p-8";
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-6 px-8">
      <div className={cardClass}>
        <GrMapLocation className="text-4xl" />
        <div className="flex flex-col gap-1">
          <h1 className="text-xl font-semibold">Free Shipping</h1>
          <p className="text-sm"> Free Shipping for orders over £130.</p>
        </div>
      </div>
      <div className={cardClass}>
        <GiPayMoney className="text-4xl" />
        <div className="flex flex-col gap-1">
          <h1 className="text-xl font-semibold">Money Guarantee</h1>
          <p className="text-sm"> Within 30 days for an exchange.</p>
        </div>
      </div>
      <div className={cardClass}>
        <MdPhoneInTalk className="text-4xl" />
        <div className="flex flex-col gap-1">
          <h1 className="text-xl font-semibold">Online Support</h1>
          <p className="text-sm"> Within 30 days for an exchange.</p>
        </div>
      </div>
      <div className={cardClass}>
        <MdPayment className="text-4xl" />
        <div className="flex flex-col gap-1">
          <h1 className="text-xl font-semibold">Flexible Payment</h1>
          <p className="text-sm"> Pay with Multiple Credit Cards.</p>
        </div>
      </div>
    </div>
  );
};

export default OurOffers;
