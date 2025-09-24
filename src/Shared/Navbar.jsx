import React from "react";
import logo1 from "../assets/logo1.png"
const Navbar = () => {
  return (
    <div className="navbar bg-[#F9FBFF] text-black px-6 mt-12">
      
      <div className="navbar-start ms-44">
        <img src={logo1} alt="" />
      </div>

      {/* Center Section - Links */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4 text-sm">
          <li>
            <a className="text-[#23A2FC] font-medium text-sm font-sans">AI Resume</a>
          </li>
          <li>
            <a className="text-sm font-medium font-sans">AI Coverletter</a>
          </li>
          <li>
            <a className="text-sm font-medium font-sans" >Pricing</a>
          </li>
          <li>
            <details>
              <summary className="text-sm font-medium font-sans">Career</summary>
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

      {/* Right Section - Buttons */}
      <div className="navbar-end gap-2">
        <a className="text-sm font-sans font-semibold">Log In</a>
        <a className="btn btn-sm rounded-full bg-[#000000] text-white hover:bg-gray-800 me-44 font-sans font-semibold">
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default Navbar;
