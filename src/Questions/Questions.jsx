import React from "react";
import up from "../assets/up.png";
import down from "../assets/down.png";

const Questions = () => {
  return (
    <div className="mx-auto py-12 bg-gradient-to-br from-sky-50 to-violet-50 p-8">
      <h2 className="text-2xl font-bold text-center mb-6 text-black">
        FREQUENTLY ASKED QUESTIONS
      </h2>

      <div className="flex justify-center mb-8 text-black">
        <input
          type="text"
          placeholder="Search your questions"
          className="w-full max-w-md px-4 py-2 border rounded-full shadow-sm focus:outline-none"
        />
      </div>

      <div className="space-y-4 flex flex-col items-center">
        {/* Question 1 */}
        <div className=" rounded-lg p-4 lg:w-[1080px] shadow-sm bg-white text-black">
          <div className="flex justify-between items-center">
            <span className="font-medium text-lg">
              Why should I use an AI Resume Editor?
            </span>
            <img src={up} alt="" />
          </div>
          <p className="mt-3 text-gray-700 whitespace-pre-line">
            Using an AI Resume Editor can help you in 3 major ways.
            {"\n\n"}
            1. It significantly saves you time so you can send a larger volume
            of applications. Our users on average save 2+ hrs of editing time
            per job application.
            {"\n\n"}
            2. The AI Resume Editor provides smart recommendations for how to
            optimize your resume to be more competitive for respective jobs.
            {"\n\n"}
            3. It can help you create a brand new, ATS friendly resume to
            increase your chances of grabbing the recruiter’s attention. All
            this saves you precious time and eliminates unnecessary guesswork
            from the job search process.
          </p>
        </div>

        {/* Question 2 */}
        <div className=" rounded-lg p-4 lg:w-[1080px] shadow-sm bg-white text-black">
          <div className="flex justify-between items-center">
            <span className="font-medium text-lg">
              Why is Jobright's AI Resume Editor the best?
            </span>
            <img src={down} alt="" />
          </div>
        </div>

        {/* Question 3 */}
        <div className=" rounded-lg p-4 lg:w-[1080px] shadow-sm bg-white text-black">
          <div className="flex justify-between items-center">
            <span className="font-medium text-lg">
              I have a resume, just need some feedback. Is the AI Resume Editor
              relevant for me?
            </span>
            <img src={down} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
