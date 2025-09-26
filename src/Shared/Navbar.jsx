import React, { useState } from "react";
import logo1 from "../assets/logo1.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar bg-[#F9FBFF] text-black mt-12 mb-11 relative">
      <div className="navbar-start">
        <img src={logo1} alt="Logo" className="w-32 md:w-auto" />
      </div>

      {/* Mobile menu button */}
      <div className="navbar-end lg:hidden">
        <button
          className="btn btn-ghost btn-sm z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Center Section - Links (Desktop) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4 text-sm">
          <li>
            <a className="text-[#23A2FC] font-medium text-sm font-sans">
              AI Resume
            </a>
          </li>
          <li>
            <a className="text-sm font-medium font-sans">AI Coverletter</a>
          </li>
          <li>
            <a className="text-sm font-medium font-sans">Pricing</a>
          </li>
          <li>
            <details>
              <summary className="text-sm font-medium font-sans">
                Career
              </summary>
            </details>
          </li>
          <li>
            <a className="text-sm font-medium font-sans">Organization</a>
          </li>
          <li>
            <a className="text-sm font-medium font-sans">Blog</a>
          </li>
        </ul>
      </div>

      {/* Right Section - Buttons (Desktop) */}
      <div className="navbar-end hidden lg:flex gap-2">
        <a className="text-sm font-sans font-semibold">Log In</a>
        <a className="btn btn-sm rounded-full bg-[#000000] text-white hover:bg-gray-800 me-44 font-sans font-semibold">
          Sign Up
        </a>
      </div>

      {/* Mobile Menu - Fixed positioning */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-opacity-50 z-40"
            onClick={() => setIsOpen(false)}
          ></div>
        )}

        {/* Menu Sidebar */}
        <div
          className="fixed top-0 right-0 h-full w-64 bg-[#F9FBFF] shadow-lg z-50 transform transition-transform duration-300 overflow-y-auto"
          style={{ transform: isOpen ? "translateX(0)" : "translateX(100%)" }}
        >
          <div className="p-4 flex justify-end">
            <button
              className="btn btn-ghost btn-sm"
              onClick={() => setIsOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <ul className="menu menu-vertical px-6 py-4 gap-4 text-base w-full">
            <li>
              <a className="text-[#23A2FC] font-medium font-sans py-3 border-b border-gray-200">
                AI Resume
              </a>
            </li>
            <li>
              <a className="font-medium font-sans py-3 border-b border-gray-200">
                AI Coverletter
              </a>
            </li>
            <li>
              <a className="font-medium font-sans py-3 border-b border-gray-200">
                Pricing
              </a>
            </li>
            <li>
              <details className="border-b border-gray-200">
                <summary className="font-medium font-sans py-3">Career</summary>
              </details>
            </li>
            <li>
              <a className="font-medium font-sans py-3 border-b border-gray-200">
                Organization
              </a>
            </li>
            <li>
              <a className="font-medium font-sans py-3 border-b border-gray-200">
                Blog
              </a>
            </li>

            <li className="mt-8 space-y-4">
              <a className="block text-center font-sans font-semibold py-3">
                Log In
              </a>
              <a className="btn rounded-full bg-[#000000] text-white hover:bg-gray-800 font-sans font-semibold w-full py-3">
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
