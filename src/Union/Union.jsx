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
    <div className="mt-16 mb-32 lg:mb-60 mx-auto text-black relative px-4 sm:px-6 lg:px-8">
      <img
        src={union}
        alt=""
        className="w-full h-32 sm:h-40 lg:h-80 absolute"
      />
      <div className="flex justify-between items-center p-4 relative overflow-x-auto">
        <div className="font-sans mt-8 lg:mt-24 flex flex-col items-center min-w-[60px] sm:min-w-[80px] lg:min-w-0">
          <img
            src={logo1}
            alt=""
            className="w-6 h-6 sm:w-8 sm:h-8 lg:w-auto lg:h-auto"
          />
          <p className="text-center text-xs sm:text-sm lg:text-base mt-1 lg:mt-2">
            Smart <br /> Resume Tailoring
          </p>
        </div>

        <div className="font-sans flex flex-col items-center mt-4 lg:mt-8 min-w-[60px] sm:min-w-[80px] lg:min-w-0">
          <img
            src={logo2}
            alt=""
            className="w-6 h-6 sm:w-8 sm:h-8 lg:w-auto lg:h-auto"
          />
          <p className="text-center text-xs sm:text-sm lg:text-base mt-1 lg:mt-2">
            3X Higher <br /> Interview Rate
          </p>
        </div>

        <div className="font-sans flex flex-col items-center mt-6 lg:mt-12 min-w-[60px] sm:min-w-[80px] lg:min-w-0">
          <img
            src={logo3}
            alt=""
            className="w-6 h-6 sm:w-8 sm:h-8 lg:w-auto lg:h-auto"
          />
          <p className="text-center text-xs sm:text-sm lg:text-base mt-1 lg:mt-2">
            Lightning-Fast <br />
            Job Matching
          </p>
        </div>

        <div className="font-sans flex flex-col items-center mt-4 lg:mt-8 min-w-[60px] sm:min-w-[80px] lg:min-w-0">
          <img
            src={logo4}
            alt=""
            className="w-6 h-6 sm:w-8 sm:h-8 lg:w-auto lg:h-auto"
          />
          <p className="text-center text-xs sm:text-sm lg:text-base mt-1 lg:mt-2">
            ATS Score <br /> Optimization
          </p>
        </div>

        <div className="font-sans flex flex-col items-center mt-6 lg:mt-12 min-w-[60px] sm:min-w-[80px] lg:min-w-0">
          <img
            src={logo5}
            alt=""
            className="w-6 h-6 sm:w-8 sm:h-8 lg:w-auto lg:h-auto"
          />
          <p className="text-center text-xs sm:text-sm lg:text-base mt-1 lg:mt-2">
            Premium <br />
            Job Placement
          </p>
        </div>

        <div className="font-sans flex flex-col items-center mt-4 lg:mt-8 min-w-[60px] sm:min-w-[80px] lg:min-w-0">
          <img
            src={logo6}
            alt=""
            className="w-6 h-6 sm:w-8 sm:h-8 lg:w-auto lg:h-auto"
          />
          <p className="text-center text-xs sm:text-sm lg:text-base mt-1 lg:mt-2">
            Career <br /> Mentoring
          </p>
        </div>
      </div>
    </div>
  );
};

export default Union;
