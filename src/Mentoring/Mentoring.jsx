import React from "react";
import btnlogo from "../assets/btnlogo.png";
import banner from "../assets/Mentoring_banner.png";
const Mentoring = () => {
  return (
    <div>
      <div className="font-sans">
        {/* platform banner section */}
        <div className="text-black flex mt-6">
          {/*  banner left side */}
          <div className="w-1/2 mt-16 pt-1.5">
            {/* Main content section, aligned to the left */}
            <h1 className="font-normal font-sans mt-3 text-5xl">
              Career Mentoring
            </h1>
            <p className="font-normal text-lg mt-2.5">
              Personalized Career Mentoring to position yourself strong in the
              Job market; Craft a job-winning resume and optimize your profile
              for maximum visibility. Step-by-step mentoring to align your
              skills, resume, and career path that helps you get interview and
              land on a Job with confidence.
            </p>

            {/* Call-to-action button, aligned to the left */}
            <button className="btn p-8 bg-black rounded-full mt-2.5 flex items-center gap-2">
              <p className="text-lg py-10 ps-6 pe-1 text-white">Go Mentoring</p>
              <img src={btnlogo} alt="button logo" className="pe-5" />
            </button>
          </div>

          {/* banner right side */}

          <div className="w-1/2 me-32 mb-32 p-8 mt-4 rounded-lg relative text-black">
            <img src={banner} alt="Main banner frame" className="relative" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentoring;
