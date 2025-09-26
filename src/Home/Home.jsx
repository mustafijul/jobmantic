import React from "react";
import ban_frame from "../assets/Ban_Frame.png";
import ban_logo from "../assets/Ban_logo.png";
import frame_1 from "../assets/frame_1.png";
import frame_2 from "../assets/frame_2.png";
import frame_3 from "../assets/frame_3.png";
import star1 from "../assets/Star1.png";
import btnlogo from "../assets/btnlogo.png";

const Home = () => {
  return (
    <div className="text-black flex flex-col lg:flex-row mt-6">
      {/*  banner left side */}
      <div className="w-full lg:w-1/2 mt-16 pt-1.5">
        {/* TOP PICK badge section with stars, aligned to the left */}
        <div className="flex flex-col items-start p-4 relative">
          {/* This container holds both the wreath and the stars */}
          <div className="relative w-48">
            {/* Laurel wreath image */}
            <img
              src={ban_logo}
              alt="Laurel wreath icon"
              className="w-full h-auto"
            />
            {/* Stars positioned absolutely on top of the wreath */}
            <div className="flex absolute top-[-10px] left-1/2 transform -translate-x-1/2">
              <img src={star1} className="w-3 h-3" alt="small star" />
              <img src={star1} className="h-5 w-5 -my-2" alt="medium star" />
              <img src={star1} className="w-7 h-7 -my-4" alt="large star" />
              <img src={star1} className="h-5 w-5 -my-2" alt="medium star" />
              <img src={star1} className="w-3 h-3" alt="small star" />
            </div>
          </div>

          {/* "TOP PICK" text positioned absolutely over the wreath */}
          <div className="font-sans absolute top-8 left-28 transform -translate-x-1/2 mt-2">
            <p className="font-semibold text-lg text-gray-800">
              <span className="text-[#23A2FC]">TOP</span> PICK
            </p>
            <p className="text-gray-800 font-semibold text-xs text-center">
              -jobmantic-
            </p>
          </div>
        </div>

        {/* Main content section, aligned to the left */}
        <h1 className="font-normal font-sans mt-3 text-5xl">
          AI Resume Builder & Job Placement{" "}
          <span className="font-bold">– Get Hired 3X Faster</span>
        </h1>
        <p className="font-normal text-lg mt-2.5">
          Boost your job search with our AI-powered platform that tailors
          resumes, beats ATS, and helps you land better jobs faster.
        </p>

        {/* Call-to-action button, aligned to the left */}
        <button className="btn bg-black rounded-full mt-2.5 flex items-center gap-2">
          <p className="text-lg py-4 ps-5 pe-1 text-white">
            Improve your resume for FREE
          </p>
          <img src={btnlogo} alt="button logo" className="pe-5" />
        </button>
      </div>

      {/* banner right side - Made responsive */}

      <div className="w-full lg:w-1/2 lg:me-32 mb-32 p-8 mt-4 rounded-lg relative bg-gradient-to-br from-sky-100 to-violet-100 order-first lg:order-none">
        <img
          src={ban_frame}
          alt="Main banner frame"
          className="relative w-full"
        />
        <div className="absolute bottom-0 right-0 items-end transform translate-x-1/4 translate-y-1/4">
          <img src={frame_1} alt="Frame 1" className="ml-2" />
          <img src={frame_2} alt="Frame 2" className="-ml-4" />
          <img src={frame_3} alt="Frame 3" className=" -ml-8" />
        </div>
      </div>
    </div>
  );
};

export default Home;
