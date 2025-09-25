import React from 'react';
import logo1 from "../assets/stat_logo1.png"
import logo2 from "../assets/stat_logo2.png"
import logo3 from "../assets/stat_logo3.png"

const Stats = () => {
  return (
    <div className="bg-gradient-to-br from-sky-50 to-violet-50 p-8 flex flex-col items-center rounded-lg font-sans">
      <div className="container mx-auto">
        <h1 className='text-3xl sm:text-4xl text-black font-sans text-center mb-15 '>
          You are <span className='text-[#23A2FC] font-bold'>90% more likely</span> to get hired if you use AIApply
        </h1>

        {/* Stat cards container */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 lg:gap-20 px-4 md:px-10 lg:px-20">

          {/* Card 1: Quality Rating */}
          <div className="flex flex-col items-center p-8 w-full max-w-sm rounded-3xl ">
            <img src={logo1} alt="" />
            <span className="text-4xl font-bold mt-1 mb-2 text-center text-black">9.1/10</span>
            <span className="text-base font-medium mt-1 text-center text-black">Quality Improvement Rating</span>
          </div>

          {/* Card 2: Hours Saved */}
          <div className="flex flex-col items-center p-8 w-full max-w-sm rounded-3xl ">
             <img src={logo2} alt="" />
            <span className="text-4xl font-bold mt-1 mb-2 text-center text-black">5 Hrs</span>
            <span className="text-base font-medium mt-1 text-center text-black">Editing Hours saved per job</span>
          </div>

          {/* Card 3: Jobs Trained On */}
          <div className="flex flex-col items-center p-8 w-full max-w-sm rounded-3xl ">
          <img src={logo3} alt="" />
            <span className="text-4xl font-bold mb-2 mt-1 text-center text-black">10 Million</span>
            <span className="text-base font-medium mt-1 text-center text-black">Jobs our AI is trained on</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Stats;
