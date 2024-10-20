import { Outlet } from "react-router-dom";
import LeftSide from "../components/Layout/LeftSide";
import Header from "../components/Header/Header";
import RightSide from "../components/Layout/RightSide";

const MainLayout = () => {
  return (
    <div className="flex h-full">
      <div className="grow">
        <div>
          <Header />
        </div>
        <div className="flex">
          <div className="bg-white">
            <LeftSide />
          </div>
          <div className="h-screen overflow-y-auto custom-bar my_container">
            <Outlet />
          </div>
        </div>
      </div>
      <div>
        <RightSide />
      </div>
    </div>
  );
};

export default MainLayout;
