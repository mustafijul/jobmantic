import React from "react";
import btnlogo from "../assets/btnlogo.png";

const Choose = () => {
  return (
    <div>
      <div className="text-black pt-24 bg-gradient-to-br from-sky-50 to-violet-50 p-8">
        <h1 className="text-center text-4xl font-sans font-semibold">
          How Our <span className="text-[#23A2FC]">AI Resume </span>Builder
          Works
        </h1>

        {/* cards */}
        <div className="grid grid-cols-4 gap-4 mt-12">
          {/* card1 */}
          <div className="bg-gradient-to-r from-sky-50 to-sky-100 p-5 w-80 rounded-3xl">
            {/* heading and para */}
            <div className="font-sans text-center py-12">
              <h1 className="font-semibold text-4xl text-center">85%</h1>
              <h2 className="mt-5 font-semibold text-lg">
                Higher Response Rate
              </h2>
              <p className="mt-5 font-normal text-base">
                Users report significantly more interview invitations
              </p>
            </div>
          </div>
          {/* card2 */}
          <div className="bg-white p-5 w-80 rounded-3xl">
            {/* heading and para */}
            <div className="font-sans text-center py-12">
              <h1 className="font-semibold text-4xl text-center">5</h1>
              <h2 className="mt-5 font-semibold text-lg">
                Minute Resume Creation
              </h2>
              <p className="mt-5 font-normal text-base">
                Go from blank page to professional resume in minutes
              </p>
            </div>
          </div>
          {/* card3 */}
          <div className="bg-white p-5 w-80 rounded-3xl">
            {/* heading and para */}
            <div className="font-sans text-center py-12">
              <h1 className="font-semibold text-4xl text-center">50+</h1>
              <h2 className="mt-5 font-semibold text-lg">
                Industry-Specific Optimization
              </h2>
              <p className="mt-5 font-normal text-base">
                Templates and content tailored to your field
              </p>
            </div>
          </div>
          {/* card4 */}
          <div className="bg-gradient-to-r from-sky-50 to-sky-100 p-5 w-80 rounded-3xl">
            {/* heading and para */}
            <div className="font-sans text-center py-12">
              <h1 className="font-semibold text-4xl text-center">AI</h1>
              <h2 className="mt-5 font-semibold text-lg">
                Continuous Learning
              </h2>
              <p className="mt-5 font-normal text-base">
                AI improves based on succesful job placement
              </p>
            </div>
          </div>
        </div>

        <button className="btn p-8 bg-black rounded-full mt-24 flex items-center gap-2 mx-auto">
          <p className="text-lg py-10 ps-6 pe-1 text-white">
            Buid your resume now
          </p>
          <img src={btnlogo} alt="button logo" className="pe-5" />
        </button>
      </div>
    </div>
  );
};

export default Choose;
