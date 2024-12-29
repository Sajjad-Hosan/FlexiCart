import PageBanner from "../../../component/PageBanner/PageBanner";
import SideCategories from "../../../component/ProductCom/SideCategories";

const ProductsPage = () => {
  return (
    <div className="p-5">
      <PageBanner />
      <div className="flex gap-5">
        <SideCategories/>
      </div>
    </div>
  );
};

export default ProductsPage;
