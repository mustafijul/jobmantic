import React from "react";
import { Quote } from "lucide-react";
import quote from "../assets/quote.png";

const Feedback = () => {
  return (
    <div className="w-full bg-gradient-to-br from-sky-50 to-violet-50 p-8 py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title Section */}
        <div className="text-left mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 uppercase">
            Voice From The World
          </h2>
          <p className="text-gray-600 mt-2 max-w-xl">
            What our users say after using Jobmantick and how it helped them
            improve their Resume
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left Section - Avatars & Names */}
          <div className="flex flex-col md:flex-col gap-8">
            {/* Avatars */}
            <div className="flex flex-col gap-6 items-center justify-start mt-[216px] me-[280px]">
              <img
                src="https://randomuser.me/api/portraits/women/45.jpg"
                alt="user"
                className="w-8 h-8 rounded-xl object-cover shadow"
              />
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="user"
                className="w-16 h-16 ms-24 -mt-6 rounded-xl object-cover shadow"
              />
              <img
                src="https://randomuser.me/api/portraits/men/74.jpg"
                alt="user"
                className="w-8 h-8 ms-48 -mt-6 rounded-xl object-cover shadow"
              />
            </div>

            {/* Names & Roles */}
            <div className="flex flex-col justify-center text-gray-700 text-sm space-y-3">
              <p>
                <span className="font-semibold">Michelle V.</span> Sr. Digital
                Marketing Manager
              </p>
              <p>
                <span className="font-semibold">Shiva V.</span> Instructional
                Designer
              </p>
              <p>
                <span className="font-semibold">Ken D.</span> Senior Recruiter
              </p>
              <p>
                <span className="font-semibold">Ken D.</span> Senior Recruiter
              </p>
            </div>
          </div>

          {/* Right Section - Testimonials */}
          <div className="space-y-6">
            <div className="bg-white shadow rounded-xl p-6 relative w-[720px] me-[120px]">
              <img src={quote} alt="" />
              <p className="text-gray-700 text-sm leading-relaxed">
                omg i cannot believe i am getting a interview after using this,
                the recommendations is well thought off. highly recommend
                everyone to use this website.
              </p>
              <p className="mt-3 text-gray-900 font-semibold text-sm">
                Michelle V.{" "}
                <span className="font-normal text-gray-600">
                  / Sr. Digital Marketing Manager
                </span>
              </p>
            </div>

            <div className="bg-white shadow rounded-xl p-6 relative w-[600px]">
              <img src={quote} alt="" />
              <p className="text-gray-700 text-sm leading-relaxed">
                The custom resume feature saved me so much time and effort. It
                made sure my resume matched the job descriptions perfectly. I am
                gonna use it for every job I apply.
              </p>
              <p className="mt-3 text-gray-900 font-semibold text-sm">
                Shiva V.{" "}
                <span className="font-normal text-gray-600">
                  / Instructional Designer
                </span>
              </p>
            </div>

            <div className="bg-white shadow rounded-xl p-6 relative w-[640px]">
              <img src={quote} alt="" />
              <p className="text-gray-700 text-sm leading-relaxed">
                Really easy to use and understand. I loved how I could take
                direct action on suggestions and not just learn about them.
              </p>
              <p className="mt-3 text-gray-900 font-semibold text-sm">
                Ken D.{" "}
                <span className="font-normal text-gray-600">
                  / Senior Recruiter
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Load More */}
        <div className="mt-16 text-center">
          <button className="text-gray-700 text-sm font-medium hover:underline">
            Load more <span className="ml-1">▾</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
