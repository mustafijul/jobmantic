import React from "react";
import union from "../assets/union.png";
import logo1 from "../assets/un_logo1.png";
import logo2 from "../assets/un_logo2.png";
import logo3 from "../assets/un_logo3.png";
import logo4 from "../assets/un_logo4.png";
import logo5 from "../assets/un_logo5.png";
import logo6 from "../assets/un_logo6.png";

const Union = () => {
  return (
    <div className="mt-16 mb-60 mx-auto text-black relative">
      <img src={union} alt="" className="w-full h-80 absolute" />
      <div className="flex gap-24 items-center p-4 relative ">
        <div className="font-sans mt-24 ms-16 flex flex-col items-center">
          <img src={logo1} alt="" />
          <p className="text-center">
            Smart <br /> Resume Tailoring
          </p>
        </div>

        <div className="font-sans flex flex-col items-center ms-12 mt-8">
          <img src={logo2} alt="" />
          <p className="text-center">
            3X Higher <br /> Interview Rate
          </p>
        </div>
        <div className="font-sans flex flex-col items-center ms-12 mt-12">
          <img src={logo3} alt="" />
          <p className="text-center">
            Lightning-Fast <br />
            Job Matching
          </p>
        </div>
        <div className="font-sans flex flex-col items-center ms-16 mt-8">
          <img src={logo4} alt="" />
          <p className="text-center">
            ATS Score <br /> Optimization
          </p>
        </div>
        <div className="font-sans flex flex-col items-center ms-12 mt-12">
          <img src={logo5} alt="" />
          <p className="text-center">
            Premium <br />
            Job Placement
          </p>
        </div>
        <div className="font-sans flex flex-col items-center ms-12 mt-8">
          <img src={logo6} alt="" />
          <p className="text-center">
            Career <br /> Mentoring
          </p>
        </div>
      </div>
    </div>
  );
};

export default Union;
