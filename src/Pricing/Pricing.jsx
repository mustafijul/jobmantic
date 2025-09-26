import React, { useState } from "react";
import { Check } from "lucide-react";

const Pricing = () => {
  const [billing, setBilling] = useState("monthly");

  return (
    <div className="w-full bg-gradient-to-br from-sky-50 to-violet-50 p-8 py-12 pt-24">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Title */}
        <h2 className="text-3xl font-bold text-black mb-6">Pricing</h2>

        {/* Toggle */}
        <div className="flex items-center justify-center mb-10">
          <button
            onClick={() => setBilling("monthly")}
            className={`px-4 py-1 rounded-l-full text-sm font-medium border ${
              billing === "monthly"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-600"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBilling("yearly")}
            className={`relative px-4 py-1 rounded-r-full text-sm font-medium border ${
              billing === "yearly"
                ? "bg-blue-600 text-black"
                : "bg-white text-gray-600"
            }`}
          >
            Yearly
            <span className="absolute -top-4 -right-2 text-xs bg-[#FF6B6B] text-white px-1 rounded-full">
              80% off
            </span>
          </button>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-6 text-left">
          {/* Free */}
          <div className="bg-white text-black shadow p-6 rounded-2xl h-[415px]">
            <h3 className="text-lg font-normal text-sky-500">FREE</h3>
            <p className="text-3xl font-normal mt-2">
              ৳0<span className="text-base font-normal">/month</span>
            </p>
            <button className="w-full mt-4 bg-gray-200 text-gray-800 py-2 rounded-lg font-medium hover:bg-gray-300">
              Get Started
            </button>
            <ul className="mt-6 space-y-3 text-gray-600 text-sm">
              <li className="flex items-center gap-2">
                <Check size={16} /> 3 AI resume generations
              </li>
              <li className="flex items-center gap-2">
                <Check size={16} /> 2 cover letter templates
              </li>
              <li className="flex items-center gap-2">
                <Check size={16} /> Basic job tracking
              </li>
              <li className="flex items-center gap-2">
                <Check size={16} /> Email support
              </li>
            </ul>
          </div>

          {/* Pro */}
          <div className="bg-white shadow-lg border-2 border-blue-300 p-6 rounded-2xl relative text-black h-[595px]">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-white bg-blue-500 text-xs px-3 py-1 rounded-full">
              MOST POPULAR
            </span>
            <h3 className="text-lg font-normal text-sky-500">PRO</h3>
            <p className="text-3xl font-normal mt-2">
              ৳3000<span className="text-base font-normal">/month</span>
            </p>
            <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700">
              Let’s Get You Hired
            </button>
            <ul className="mt-6 space-y-3 text-gray-600 text-sm">
              <li className="flex items-center gap-2">
                <Check size={16} /> Unlimited AI resume generations
              </li>
              <li className="flex items-center gap-2">
                <Check size={16} /> Create job applications in seconds
              </li>
              <li className="flex items-center gap-2">
                <Check size={16} /> Unlimited resume + cover letter
              </li>
              <li className="flex items-center gap-2">
                <Check size={16} /> Host your resume online + translate it
              </li>
              <li className="flex items-center gap-2">
                <Check size={16} /> Advanced job tracking & analytics
              </li>
              <li className="flex items-center gap-2">
                <Check size={16} /> AI interview preparation
              </li>
              <li className="flex items-center gap-2">
                <Check size={16} /> Interview Buddy
              </li>
              <li className="flex items-center gap-2">
                <Check size={16} /> Priority support
              </li>
            </ul>
          </div>

          {/* Organization */}
          <div className="bg-white  p-2 rounded-2xl text-black h-[499px]">
            <h3 className="text-lg font-normal text-sky-500">ORGANIZATION</h3>
            <p className="text-3xl font-normal mt-2">Custom</p>
            <button className="w-full mt-4 bg-gray-200 text-gray-800 py-2 rounded-lg font-normal hover:bg-gray-300">
              Talk To Our Team
            </button>
            <ul className="mt-6 space-y-3 text-gray-600 text-sm">
              <li className="flex items-center gap-2">
                <Check size={16} /> Everything in Pro
              </li>
              <li className="flex items-center gap-2">
                <Check size={16} /> Team management dashboard
              </li>
              <li className="flex items-center gap-2">
                <Check size={16} /> Advanced analytics & reporting
              </li>
              <li className="flex items-center gap-2">
                <Check size={16} /> Custom integrations
              </li>
              <li className="flex items-center gap-2">
                <Check size={16} /> Dedicated account manager
              </li>
              <li className="flex items-center gap-2">
                <Check size={16} /> 24/7 phone support
              </li>
            </ul>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-12 max-w-2xl mx-auto text-center text-gray-600 text-sm">
          <p>
            AIApply transformed my job search! … I started getting 3x more
            interview invites within weeks.
          </p>
          <div className="flex items-center justify-center mt-3">
            <img
              src="https://randomuser.me/api/portraits/women/65.jpg"
              alt="Customer"
              className="w-8 h-8 rounded-full mr-2"
            />
            <span className="font-medium text-gray-800">
              Sophie K, Pro Customer
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
