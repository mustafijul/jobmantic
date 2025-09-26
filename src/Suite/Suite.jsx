import React from "react";
import line from "../assets/plat_line.png";
import logo from "../assets/plat_logo.png";
import s1 from "../assets/suite1.png";
import s2 from "../assets/suite2.png";
import s3 from "../assets/suite3.png";
import s4 from "../assets/suite4.png";
import s5 from "../assets/suite5.png";
import s6 from "../assets/suite6.png";

const Suite = () => {
  return (
    <div className="pt-20 bg-gradient-to-br from-sky-50 to-violet-50 p-5">
      {/* line and logo */}
      <div className="mb-12 px-44">
        <h1 className="text-4xl sm:text-4xl font-bold text-black font-sans">
          Comprehensive ai-powered <br /> job placement suite
        </h1>
        <div className="flex gap-2  items-center">
          <img src={line} className="h-1 w-48" alt="" />
          <img src={logo} alt="" />
        </div>
      </div>

      {/* cards */}
      <div className="grid grid-cols-3 gap-7 px-44 mt-12 text-black">
        {/* card1 */}
        <div className="bg-white p-5 w-96 rounded-3xl">
          {/* heading and para */}
          <div className="font-sans text-center py-12 flex flex-col items-center">
            <img src={s1} className="flex justify-center" alt="" />
            <h2 className="mt-5 font-normal text-xl">AI Resume writer</h2>
            <p className="mt-5 font-normal text-base">
              Generate compelling bullet points, professional summaries, and
              achievement-focused content that showcases your expertise and
              captures employer attention.
            </p>
          </div>
        </div>
        {/* card2 */}
        <div className="bg-white p-5 w-96 rounded-3xl">
          {/* heading and para */}
          <div className="font-sans text-center py-12 flex flex-col items-center">
            <img src={s2} className="flex justify-center" alt="" />
            <h2 className="mt-5 font-normal text-xl">Keyword Optimization</h2>
            <p className="mt-5 font-normal text-base">
              Automatically incorporate job-specific keywords without stuffing,
              ensuring your resume ranks high in ATS systems while maintaining
              natural readability.
            </p>
          </div>
        </div>
        {/* card3 */}
        <div className="bg-white p-5 w-96 rounded-3xl">
          {/* heading and para */}
          <div className="font-sans text-center py-12 flex flex-col items-center">
            <img src={s3} className="flex justify-center" alt="" />
            <h2 className="mt-5 font-normal text-xl">ATS Checker</h2>
            <p className="mt-5 font-normal text-base">
              Ensure 99% ATS compatibility with instant scoring and detailed
              feedback on format, keywords, and structure optimization.
            </p>
          </div>
        </div>
        {/* card4 */}
        <div className="bg-white p-5 w-96 rounded-3xl">
          {/* heading and para */}
          <div className="font-sans text-center py-12 flex flex-col items-center">
            <img src={s4} className="flex justify-center" alt="" />
            <h2 className="mt-5 font-normal text-xl">Cover Letter Writer</h2>
            <p className="mt-5 font-normal text-base">
              Create personalized cover letters that complement your tailored
              resume and tell your unique professional story effectively.
            </p>
          </div>
        </div>
        {/* card5 */}
        <div className="bg-white p-5 w-96 rounded-3xl">
          {/* heading and para */}
          <div className="font-sans text-center py-12 flex flex-col items-center">
            <img src={s5} className="flex justify-center" alt="" />
            <h2 className="mt-5 font-normal text-xl">
              Job Application Tracker
            </h2>
            <p className="mt-5 font-normal text-base">
              Organize applications, interviews, and follow-ups in one
              comprehensive dashboard with automated reminders and status
              updates.
            </p>
          </div>
        </div>
        {/* card6 */}
        <div className="bg-white p-5 w-96 rounded-3xl">
          {/* heading and para */}
          <div className="font-sans text-center py-12 flex flex-col items-center">
            <img src={s6} className="flex justify-center" alt="" />
            <h2 className="mt-5 font-normal text-xl">Interview Preparation</h2>
            <p className="mt-5 font-normal text-base">
              AI-powered practice sessions with role-specific questions,
              personalized feedback, and confidence-building exercises.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suite;
