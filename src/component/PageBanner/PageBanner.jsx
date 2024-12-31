import { FaArrowRight } from "react-icons/fa6";
import image from "../../assets/page-img-1.png";

const PageBanner = ({ heading='undefiend', afterPage='undifirend', beforePage='undefiend' }) => {
  return (
    <div>
      <div className="card flex-row justify-between border-b-2 mb-20">
        <div className="flex flex-col justify-center gap-3 mx-auto">
          <h1 className="text-6xl font-semibold">{heading}</h1>
          <p className="text-xl font-semibold flex items-center gap-4">
            {beforePage} <FaArrowRight /> {afterPage}
          </p>
        </div>
        <img src={image} alt="" className="object-contain mt-10 w-1/2 " />
      </div>
    </div>
  );
};
export default PageBanner;
