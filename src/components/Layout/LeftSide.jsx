import { Link, useLocation } from "react-router-dom";
import { layout } from "../../data/layout/layout";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useState } from "react";

const LeftSide = () => {
  const { pathname } = useLocation();
  const [isExtend, setIsExtend] = useState(true);

  const handleArrow = () => {
    setIsExtend((prev) => !prev);
  };

  return (
    <div className="relative z-0">
      <div
        className={`${
          isExtend ? "w-60" : "w-14"
        } h-screen overflow-y-auto border border-t-0 custom-bar duration-300`}
      >
        <div className="flex flex-col gap-2 py-4">
          {layout.left_side.map(({ name, icon, link }) => (
            <Link
              className={`flex items-center gap-3 ${!isExtend && 'gap-6 py-3'} px-4 py-2 duration-200 text-lg ${
                pathname == link ? "bg-stech text-white" : ""
              }`}
              to={`${link}`}
              title={name}
              key={name}
            >
              <span>{icon}</span>
              {isExtend && <span>{name}</span>}
            </Link>
          ))}
        </div>
      </div>
      <div
        onClick={handleArrow}
        className="absolute top-6 -right-[10px] w-6 h-6 bg-white rounded-full border flex items-center justify-center z-20"
      >
        {isExtend ? <FaAngleLeft className="text-lg" /> : <FaAngleRight className="text-lg" />}
      </div>
    </div>
  );
};

export default LeftSide;
