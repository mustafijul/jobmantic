import React from "react";
import w1 from "../assets/W1.png";
import w2 from "../assets/W2.png";
import w3 from "../assets/w3.png";
import w4 from "../assets/w4.png";
import w5 from "../assets/w5.png";
import w6 from "../assets/w6.png";

const Work = () => {
  return (
    <div className="text-black mt-32 bg-gradient-to-br from-sky-50 to-violet-50 p-8">
      <h1 className="text-center text-4xl font-sans font-semibold">
        How Our <span className="text-[#23A2FC]">AI Resume </span>Builder Works
      </h1>

      {/* cards */}
      <div className="grid grid-cols-3 gap-8 mt-12">
        {/* card1 */}
        <div className="bg-white p-5 w-80 rounded-3xl">
          {/* top section */}
          <div className="flex justify-between">
            <h1 className="bg-[#23A2FC1A] h-10 w-10 p-3 rounded-full">1</h1>
            <img src={w1} alt="" />
          </div>
          {/* heading and para */}
          <div className="font-sans">
            <h1 className="mt-5 font-medium text-xl">Upload or Import</h1>
            <p className="mt-5 font-normal text-lg">
              Start with existing resume, LinkedIn profile, or build from
              scratch
            </p>
          </div>
        </div>
        {/* card2 */}
        <div className="bg-white p-5 w-80 rounded-3xl">
          {/* top section */}
          <div className="flex justify-between">
            <h1 className="bg-[#23A2FC1A] h-10 w-10 p-3 rounded-full">2</h1>
            <img src={w2} alt="" />
          </div>
          {/* heading and para */}
          <div className="font-sans">
            <h1 className="mt-5 font-medium text-xl">AI Analysis</h1>
            <p className="mt-5 font-normal text-lg">
              Our system analyzes your background and identifies strengths
            </p>
          </div>
        </div>
        {/* card3 */}
        <div className="bg-white p-5 w-80 rounded-3xl">
          {/* top section */}
          <div className="flex justify-between">
            <h1 className="bg-[#23A2FC1A] h-10 w-10 p-3 rounded-full">3</h1>
            <img src={w3} alt="" />
          </div>
          {/* heading and para */}
          <div className="font-sans">
            <h1 className="mt-5 font-medium text-xl">Job Targeting</h1>
            <p className="mt-5 font-normal text-lg">
              Paste job descriptions for instant resume customization
            </p>
          </div>
        </div>
        {/* card4 */}
        <div className="bg-white p-5 w-80 rounded-3xl">
          {/* top section */}
          <div className="flex justify-between">
            <h1 className="bg-[#23A2FC1A] h-10 w-10 p-3 rounded-full">4</h1>
            <img src={w4} alt="" />
          </div>
          {/* heading and para */}
          <div className="font-sans">
            <h1 className="mt-5 font-medium text-xl">Content Enhancement</h1>
            <p className="mt-5 font-normal text-lg">
              AI improves bullet points, adds keywords, optimizes formatting
            </p>
          </div>
        </div>
        {/* card5 */}
        <div className="bg-white p-5 w-80 rounded-3xl">
          {/* top section */}
          <div className="flex justify-between">
            <h1 className="bg-[#23A2FC1A] h-10 w-10 p-3 rounded-full">5</h1>
            <img src={w5} alt="" />
          </div>
          {/* heading and para */}
          <div className="font-sans">
            <h1 className="mt-5 font-medium text-xl">ATS Scoring</h1>
            <p className="mt-5 font-normal text-lg">
              Real-time feedback ensures maximum compatibility
            </p>
          </div>
        </div>
        {/* card6 */}
        <div className="bg-white p-5 w-80 rounded-3xl">
          {/* top section */}
          <div className="flex justify-between">
            <h1 className="bg-[#23A2FC1A] h-10 w-10 p-3 rounded-full">6</h1>
            <img src={w6} alt="" />
          </div>
          {/* heading and para */}
          <div className="font-sans">
            <h1 className="mt-5 font-medium text-xl">Export & Apply</h1>
            <p className="mt-5 font-normal text-lg">
              Download in multiple formats (PDF, DOCX, ATS-friendly)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
