import Contact from "../../component/AboutCom/Contact";
import OurOffers from "../../component/AboutCom/OurOffers";
import TeamMems from "../../component/AboutCom/TeamMems";
import PageBanner from "../../component/PageBanner/PageBanner";

const AboutPage = () => {
  return (
    <div>
      <PageBanner heading="About Us" afterPage="About" beforePage="Home" />
      <OurOffers />
      <Contact />
      <TeamMems />
      {/* 1/2 new section have too added */}
    </div>
  );
};

export default AboutPage;
