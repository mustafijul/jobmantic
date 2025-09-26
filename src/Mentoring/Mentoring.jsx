import React from "react";
import btnlogo from "../assets/btnlogo.png";
import banner from "../assets/Mentoring_banner.png";
const Mentoring = () => {
  return (
    <div>
      <div className="font-sans">
        {/* platform banner section */}
        <div className="text-black flex flex-col lg:flex-row mt-6">
          {/*  banner left side */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-16 pt-1.5 order-2 lg:order-1">
            {/* Main content section, aligned to the left */}
            <h1 className="font-normal font-sans mt-3 text-3xl lg:text-5xl">
              Career Mentoring
            </h1>
            <p className="font-normal text-base lg:text-lg mt-2.5">
              Personalized Career Mentoring to position yourself strong in the
              Job market; Craft a job-winning resume and optimize your profile
              for maximum visibility. Step-by-step mentoring to align your
              skills, resume, and career path that helps you get interview and
              land on a Job with confidence.
            </p>

            {/* Call-to-action button, aligned to the left */}
            <button className="btn p-6 lg:p-8 bg-black rounded-full mt-2.5 flex items-center gap-2">
              <p className="text-base lg:text-lg py-8 lg:py-10 ps-4 lg:ps-6 pe-1 text-white">
                Go Mentoring
              </p>
              <img src={btnlogo} alt="button logo" className="pe-4 lg:pe-5" />
            </button>
          </div>

          {/* banner right side */}
          <div className="w-full lg:w-1/2 lg:me-32 mb-8 lg:mb-32 p-4 lg:p-8 mt-4 rounded-lg relative text-black order-1 lg:order-2">
            <img
              src={banner}
              alt="Main banner frame"
              className="relative w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentoring;
