import React from "react";
import btnlogo from "../assets/btnlogo.png";

const Choose = () => {
  return (
    <div>
      <div className="text-black pt-12 lg:pt-24 bg-gradient-to-br from-sky-50 to-violet-50 p-4 sm:p-6 lg:p-8">
        <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl font-sans font-semibold">
          How Our <span className="text-[#23A2FC]">AI Resume </span>Builder
          Works
        </h1>

        {/* cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8 lg:mt-12 justify-center">
          {/* card1 */}
          <div className="bg-gradient-to-r from-sky-50 to-sky-100 p-4 sm:p-5 w-full max-w-80 mx-auto rounded-3xl">
            {/* heading and para */}
            <div className="font-sans text-center py-8 sm:py-12">
              <h1 className="font-semibold text-3xl sm:text-4xl text-center">
                85%
              </h1>
              <h2 className="mt-3 sm:mt-5 font-semibold text-base sm:text-lg">
                Higher Response Rate
              </h2>
              <p className="mt-3 sm:mt-5 font-normal text-sm sm:text-base">
                Users report significantly more interview invitations
              </p>
            </div>
          </div>
          {/* card2 */}
          <div className="bg-white p-4 sm:p-5 w-full max-w-80 mx-auto rounded-3xl">
            {/* heading and para */}
            <div className="font-sans text-center py-8 sm:py-12">
              <h1 className="font-semibold text-3xl sm:text-4xl text-center">
                5
              </h1>
              <h2 className="mt-3 sm:mt-5 font-semibold text-base sm:text-lg">
                Minute Resume Creation
              </h2>
              <p className="mt-3 sm:mt-5 font-normal text-sm sm:text-base">
                Go from blank page to professional resume in minutes
              </p>
            </div>
          </div>
          {/* card3 */}
          <div className="bg-white p-4 sm:p-5 w-full max-w-80 mx-auto rounded-3xl">
            {/* heading and para */}
            <div className="font-sans text-center py-8 sm:py-12">
              <h1 className="font-semibold text-3xl sm:text-4xl text-center">
                50+
              </h1>
              <h2 className="mt-3 sm:mt-5 font-semibold text-base sm:text-lg">
                Industry-Specific Optimization
              </h2>
              <p className="mt-3 sm:mt-5 font-normal text-sm sm:text-base">
                Templates and content tailored to your field
              </p>
            </div>
          </div>
          {/* card4 */}
          <div className="bg-gradient-to-r from-sky-50 to-sky-100 p-4 sm:p-5 w-full max-w-80 mx-auto rounded-3xl">
            {/* heading and para */}
            <div className="font-sans text-center py-8 sm:py-12">
              <h1 className="font-semibold text-3xl sm:text-4xl text-center">
                AI
              </h1>
              <h2 className="mt-3 sm:mt-5 font-semibold text-base sm:text-lg">
                Continuous Learning
              </h2>
              <p className="mt-3 sm:mt-5 font-normal text-sm sm:text-base">
                AI improves based on succesful job placement
              </p>
            </div>
          </div>
        </div>

        <button className="btn p-6 sm:p-8 bg-black rounded-full mt-12 lg:mt-24 flex items-center gap-2 mx-auto">
          <p className="text-base sm:text-lg py-8 sm:py-10 ps-4 sm:ps-6 pe-1 text-white">
            Buid your resume now
          </p>
          <img src={btnlogo} alt="button logo" className="pe-4 sm:pe-5" />
        </button>
      </div>
    </div>
  );
};

export default Choose;
