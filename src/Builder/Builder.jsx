import React from "react";
import banner from "../assets/build_banner.png";

const Builder = () => {
  return (
    <div className="flex justify-center lg:justify-start items-center ms-0 lg:ms-44 mb-20 lg:mb-40 px-4 lg:px-0">
      <img src={banner} alt="" className="w-full max-w-md lg:max-w-5xl" />
    </div>
  );
};

export default Builder;
