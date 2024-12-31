import { GiPayMoney } from "react-icons/gi";
import { GrMapLocation } from "react-icons/gr";
import { MdPayment, MdPhoneInTalk } from "react-icons/md";

const OurOffers = () => {
  return (
    <div className="flex justify-between items-center gap-6 px-8">
      <div className="card flex-row gap-5 border p-8">
        <GrMapLocation className="text-4xl" />
        <div className="flex flex-col gap-1">
          <h1 className="text-xl font-semibold">Free Shipping</h1>
          <p className="text-sm"> Free Shipping for orders over £130.</p>
        </div>
      </div>
      <div className="card flex-row gap-5 border p-8">
        <GiPayMoney className="text-4xl" />
        <div className="flex flex-col gap-1">
          <h1 className="text-xl font-semibold">Money Guarantee</h1>
          <p className="text-sm"> Within 30 days for an exchange.</p>
        </div>
      </div>
      <div className="card flex-row gap-5 border p-8">
        <MdPhoneInTalk className="text-4xl" />
        <div className="flex flex-col gap-1">
          <h1 className="text-xl font-semibold">Online Support</h1>
          <p className="text-sm"> Within 30 days for an exchange.</p>
        </div>
      </div>
      <div className="card flex-row gap-5 border p-8">
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
