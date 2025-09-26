import React from "react";
import line from "../assets/plat_line.png";
import logo from "../assets/plat_logo.png";
import feature1 from "../assets/feature1.png";
import feature2 from "../assets/feature2.png";
import feature3 from "../assets/feature3.png";
import tik from "../assets/tik.png";

const Technology = () => {
  return (
    <div>
      {/* logo and heading */}
      <div className="mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-black font-sans">
          Revolutionary AI Resume <br /> Building Technology
        </h1>
        <div className="flex gap-2 items-center">
          <img src={line} className="h-1 w-48" alt="" />
          <img src={logo} alt="" />
        </div>
      </div>

      {/* feature 1 */}

      <div className="text-black flex mt-6">
        {/*  banner right side */}
        <div className="w-1/2 mt-16 me-48 pt-1.5">
          <div className="items-center ">
            <h1 className="font-semibold font-sans ms-4 text-3xl mb-5">
              Smart Content Generation
            </h1>
            <div className="flex">
              <img src={tik} className="h-6 w-6" alt="" />
              <p className="text-lg">
                AI-powered bullet point writer creates achievement-focused
                descriptions
              </p>
            </div>
            <div className="flex mt-1">
              <img src={tik} className="h-6 w-6" alt="" />
              <p className="text-lg">
                Automatic quantification of accomplishments with
                industry-specific metrics
              </p>
            </div>
            <div className="flex mt-1">
              <img src={tik} className="h-6 w-6" alt="" />
              <p className="text-lg">
                Professional summary generator tailored to your career level and
                goals
              </p>
            </div>
            <div className="flex mt-1">
              <img src={tik} className="h-6 w-6" alt="" />
              <p className="text-lg">
                Skills section optimization based on job market trends
              </p>
            </div>
          </div>
        </div>

        {/* banner left side */}

        <div className="w-1/2 me-32 mb-32 p-8 mt-4 rounded-lg relative text-black">
          <img src={feature1} alt="Main banner frame" className="relative" />
        </div>
      </div>

      {/* feature 2 */}

      <div className="text-black flex mt-6">
        {/* banner left side */}

        <div className="w-1/2 me-32 mb-32 p-8 rounded-lg relative text-black">
          <img src={feature2} alt="Main banner frame" className="relative" />
        </div>

        {/*  banner right side */}
        <div className="w-1/2  me-48 pt-1.5 font-sans">
          <div className="items-center ">
            <h1 className="font-semibold font-sans ms-4 text-3xl mb-5">
              ATS Optimization Engine
            </h1>
            <div className="flex">
              <img src={tik} className="h-6 w-6" alt="" />
              <p className="text-lg">
                Real-time ATS compatibility scoring (0-100 scale)
              </p>
            </div>
            <div className="flex mt-1">
              <img src={tik} className="h-6 w-6" alt="" />
              <p className="text-lg">
                Keyword density analysis and optimization
              </p>
            </div>
            <div className="flex mt-1">
              <img src={tik} className="h-6 w-6" alt="" />
              <p className="text-lg">
                Format checking for maximum readability by ATS systems
              </p>
            </div>
            <div className="flex mt-1">
              <img src={tik} className="h-6 w-6" alt="" />
              <p className="text-lg">
                Industry-specific template recommendations
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* feature 3 */}

      <div className="text-black flex mt-6">
        {/*  banner right side */}
        <div className="w-1/2 mt-16 me-48 pt-1.5">
          <div className="items-center ">
            <h1 className="font-semibold font-sans ms-4 text-3xl mb-5">
              Multi-Version Resume Management
            </h1>
            <div className="flex">
              <img src={tik} className="h-6 w-6" alt="" />
              <p className="text-lg">
                Create unlimited resume variations for different job types
              </p>
            </div>
            <div className="flex mt-1">
              <img src={tik} className="h-6 w-6" alt="" />
              <p className="text-lg">
                Master resume with all experience that branches into targeted
                versions
              </p>
            </div>
            <div className="flex mt-1">
              <img src={tik} className="h-6 w-6" alt="" />
              <p className="text-lg">
                One-click customization for specific job applications
              </p>
            </div>
            <div className="flex mt-1">
              <img src={tik} className="h-6 w-6" alt="" />
              <p className="text-lg">Version history and comparison tools</p>
            </div>
          </div>
        </div>

        {/* banner left side */}

        <div className="w-1/2 me-32 mb-32 p-8 mt-4 rounded-lg relative text-black">
          <img src={feature3} alt="Main banner frame" className="relative" />
        </div>
      </div>
    </div>
  );
};

export default Technology;
