import React from "react";
import banner from "../assets/match_banner.png";
import line from "../assets/plat_line.png";
import logo from "../assets/match_logo.png";

const Matching = () => {
  return (
    <div>
      <div className="font-sans">
        {/* platform banner section */}
        <div className="text-black flex mt-6">
          {/* banner left side */}

          <div className="w-1/2 me-32 mb-32 p-8 mt-4 rounded-lg relative text-black">
            <img src={banner} alt="Main banner frame" className="relative" />
          </div>

          {/*  banner right side */}
          <div className="w-1/2 mt-16 me-48 pt-1.5">
            <div className="items-center">
              {/* Main content section, aligned to the left */}
              <h1 className="font-normal font-sans mt-3 text-5xl">
                Lightning-Fast Job Matching
              </h1>
              <p className="font-normal text-lg mt-5">
                AI-powered 1:1 Job to Resume matching that positions you
                perfectly aligned in the competitive Job market with your
                skills, salary expectations, and career goals.
              </p>
              <div className="flex gap-2 items-center mt-2.5">
                <img src={line} className="h-1 w-48" alt="" />
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
