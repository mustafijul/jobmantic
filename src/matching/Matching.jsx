import React from "react";
import banner from "../assets/match_banner.png";
import line from "../assets/plat_line.png";
import logo from "../assets/match_logo.png";

const Matching = () => {
  return (
    <div>
      <div className="font-sans">
        {/* platform banner section */}
        <div className="text-black flex flex-col lg:flex-row mt-6">
          {/* banner left side */}
          <div className="w-full lg:w-1/2 lg:me-32 mb-8 lg:mb-32 p-4 lg:p-8 mt-4 rounded-lg relative text-black order-1 lg:order-1">
            <img
              src={banner}
              alt="Main banner frame"
              className="relative w-1/2 lg:w-full"
            />
          </div>

          {/* banner right side */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-16 lg:me-48 pt-1.5 order-2 lg:order-2">
            <div className="items-center">
              {/* Main content section, aligned to the left */}
              <h1 className="font-normal font-sans mt-3 text-3xl lg:text-5xl">
                Lightning-Fast Job Matching
              </h1>
              <p className="font-normal text-base lg:text-lg mt-3 lg:mt-5">
                AI-powered 1:1 Job to Resume matching that positions you
                perfectly aligned in the competitive Job market with your
                skills, salary expectations, and career goals.
              </p>
              <div className="flex gap-2 items-center mt-2.5">
                <img src={line} className="h-1 w-32 lg:w-48" alt="" />
                <img src={logo} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Matching;
