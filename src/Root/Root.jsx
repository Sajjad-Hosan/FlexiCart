import { Outlet } from "react-router-dom";
import FlotingMenu from "../component/FlotingMenu/FlotingMenu";
import Home from "../Pages/Home/Home";
import Footer from "../component/Footer/Footer";

const Root = () => {
  return (
    <div className="relative h-screen px-2 lg:px-4 py-2">
      <FlotingMenu />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
