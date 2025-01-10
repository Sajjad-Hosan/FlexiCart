import PageBanner from "../../component/PageBanner/PageBanner";
import OurBlogsComp from "../../component/HomeCom/OurBlogs";
import Blogs from "../../component/BlogCom/Blogs";

const OurBlogs = () => {
  return (
    <div>
      <PageBanner heading="Our Blogs" afterPage="Our Blogs" beforePage="Home" />
      <OurBlogsComp hide={false} />
      <Blogs />
    </div>
  );
};

export default OurBlogs;
