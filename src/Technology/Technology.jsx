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

      <div className="text-black flex flex-col lg:flex-row mt-6">
        {/* banner right side */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-16 lg:me-48 pt-1.5 order-2 lg:order-1">
          <div className="items-center ">
            <h1 className="font-semibold font-sans ms-0 lg:ms-4 text-2xl lg:text-3xl mb-5">
              Smart Content Generation
            </h1>
            <div className="flex">
              <img src={tik} className="h-5 w-5 lg:h-6 lg:w-6" alt="" />
              <p className="text-base lg:text-lg ms-2">
                AI-powered bullet point writer creates achievement-focused
                descriptions
              </p>
            </div>
            <div className="flex mt-1">
              <img src={tik} className="h-5 w-5 lg:h-6 lg:w-6" alt="" />
              <p className="text-base lg:text-lg ms-2">
                Automatic quantification of accomplishments with
                industry-specific metrics
              </p>
            </div>
            <div className="flex mt-1">
              <img src={tik} className="h-5 w-5 lg:h-6 lg:w-6" alt="" />
              <p className="text-base lg:text-lg ms-2">
                Professional summary generator tailored to your career level and
                goals
              </p>
            </div>
            <div className="flex mt-1">
              <img src={tik} className="h-5 w-5 lg:h-6 lg:w-6" alt="" />
              <p className="text-base lg:text-lg ms-2">
                Skills section optimization based on job market trends
              </p>
            </div>
          </div>
        </div>

        {/* banner left side */}

        <div className="w-full lg:w-1/2 lg:me-32 mb-8 lg:mb-32 p-4 lg:p-8 mt-4 rounded-lg relative text-black order-1 lg:order-2">
          <img
            src={feature1}
            alt="Main banner frame"
            className="relative lg:max-w-2xs w-1/2"
          />
        </div>
      </div>

      {/* feature 2 */}

      <div className="text-black flex flex-col lg:flex-row mt-6">
        {/* banner left side */}

        <div className="w-full lg:w-1/2 lg:me-32 mb-8 lg:mb-32 p-4 lg:p-8 rounded-lg relative text-black order-1 lg:order-1">
          <img
            src={feature2}
            alt="Main banner frame"
            className="relative lg:max-w-2xs w-1/2"
          />
        </div>

        {/* banner right side */}
        <div className="w-full lg:w-1/2 lg:me-48 pt-1.5 font-sans order-2 lg:order-2">
          <div className="items-center ">
            <h1 className="font-semibold font-sans ms-0 lg:ms-4 text-2xl lg:text-3xl mb-5">
              ATS Optimization Engine
            </h1>
            <div className="flex">
              <img src={tik} className="h-5 w-5 lg:h-6 lg:w-6" alt="" />
              <p className="text-base lg:text-lg ms-2">
                Real-time ATS compatibility scoring (0-100 scale)
              </p>
            </div>
            <div className="flex mt-1">
              <img src={tik} className="h-5 w-5 lg:h-6 lg:w-6" alt="" />
              <p className="text-base lg:text-lg ms-2">
                Keyword density analysis and optimization
              </p>
            </div>
            <div className="flex mt-1">
              <img src={tik} className="h-5 w-5 lg:h-6 lg:w-6" alt="" />
              <p className="text-base lg:text-lg ms-2">
                Format checking for maximum readability by ATS systems
              </p>
            </div>
            <div className="flex mt-1">
              <img src={tik} className="h-5 w-5 lg:h-6 lg:w-6" alt="" />
              <p className="text-base lg:text-lg ms-2">
                Industry-specific template recommendations
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* feature 3 */}

      <div className="text-black flex flex-col lg:flex-row mt-6">
        {/* banner right side */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-16 lg:me-48 pt-1.5 order-2 lg:order-1">
          <div className="items-center ">
            <h1 className="font-semibold font-sans ms-0 lg:ms-4 text-2xl lg:text-3xl mb-5">
              Multi-Version Resume Management
            </h1>
            <div className="flex">
              <img src={tik} className="h-5 w-5 lg:h-6 lg:w-6" alt="" />
              <p className="text-base lg:text-lg ms-2">
                Create unlimited resume variations for different job types
              </p>
            </div>
            <div className="flex mt-1">
              <img src={tik} className="h-5 w-5 lg:h-6 lg:w-6" alt="" />
              <p className="text-base lg:text-lg ms-2">
                Master resume with all experience that branches into targeted
                versions
              </p>
            </div>
            <div className="flex mt-1">
              <img src={tik} className="h-5 w-5 lg:h-6 lg:w-6" alt="" />
              <p className="text-base lg:text-lg ms-2">
                One-click customization for specific job applications
              </p>
            </div>
            <div className="flex mt-1">
              <img src={tik} className="h-5 w-5 lg:h-6 lg:w-6" alt="" />
              <p className="text-base lg:text-lg ms-2">
                Version history and comparison tools
              </p>
            </div>
          </div>
        </div>

        {/* banner left side */}

        <div className="w-full lg:max-w-2xl lg:me-32 mb-8 lg:mb-32 p-4 lg:p-8 mt-4 rounded-lg relative text-black order-1 lg:order-2">
          <img
            src={feature3}
            alt="Main banner frame"
            className="relative lg:max-w-2xs w-1/2"
          />
        </div>
      </div>
    </div>
  );
};

export default Technology;
