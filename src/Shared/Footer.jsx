import React from "react";
import logo1 from "../assets/logo1.png";
import linkedin from "../assets/linkedin.png";
import instagram from "../assets/instagram.png";
import tiktok from "../assets/tiktok.png";
import twitter from "../assets/twitter.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-sky-50 to-violet-50 p-4 sm:p-6 lg:p-8 text-black py-6 sm:py-8 lg:py-10">
      {/* Top Section - Logo and Social Icons */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-4 sm:mb-6 lg:mb-3 gap-4 sm:gap-0">
        <div className="w-full sm:w-auto">
          <img
            src={logo1}
            alt="Jobmantic Logo"
            className="w-32 sm:w-40 lg:w-auto"
          />
        </div>

        <div className="w-full sm:w-auto">
          {/* Social Icons */}
          <div className="flex space-x-3 sm:space-x-4 mt-2 sm:me-0 lg:me-56 pe-0 lg:pe-2 justify-start sm:justify-end">
            <a href="#" className="w-6 h-6 sm:w-7 sm:h-7 lg:w-auto lg:h-auto">
              <img src={linkedin} alt="LinkedIn" className="w-full h-full" />
            </a>
            <a href="#" className="w-6 h-6 sm:w-7 sm:h-7 lg:w-auto lg:h-auto">
              <img src={instagram} alt="Instagram" className="w-full h-full" />
            </a>
            <a href="#" className="w-6 h-6 sm:w-7 sm:h-7 lg:w-auto lg:h-auto">
              <img src={tiktok} alt="TikTok" className="w-full h-full" />
            </a>
            <a href="#" className="w-6 h-6 sm:w-7 sm:h-7 lg:w-auto lg:h-auto">
              <img src={twitter} alt="Twitter" className="w-full h-full" />
            </a>
          </div>
        </div>
      </div>

      {/* Grid Sections */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-5 lg:gap-5">
        {/* Features */}
        <div>
          <h6 className="font-semibold mb-3 text-sm sm:text-base">Features</h6>
          <ul className="space-y-2 font-sans font-normal text-xs sm:text-sm">
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                AI Resume
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                AI Coverletter
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Career
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Organization
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Outplacement
              </a>
            </li>
          </ul>
        </div>

        {/* Blog */}
        <div>
          <h6 className="font-semibold mb-3 text-sm sm:text-base">Blog</h6>
          <ul className="space-y-2 font-sans font-normal text-xs sm:text-sm">
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Is Jobright Legit?
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Success Stories from Jobright Users
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                What Top AI Companies Are Looking For
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Jobright AI Agent Launch
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Top Entry Level Jobs
              </a>
            </li>
          </ul>
        </div>

        {/* Related Tools*/}
        <div>
          <h6 className="font-semibold mb-3 text-sm sm:text-base">
            Related Tools
          </h6>
          <ul className="space-y-2 font-sans font-normal text-xs sm:text-sm">
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                AI Job Assistant
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                AI Cover Letter Generator
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                AI Resume Helper
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                AI Job Tracker
              </a>
            </li>
          </ul>
        </div>

        {/* Information */}
        <div>
          <h6 className="font-semibold mb-3 text-sm sm:text-base">
            Information
          </h6>
          <ul className="space-y-2 font-sans font-normal text-xs sm:text-sm">
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section - Optional Copyright */}
      <div className="mt-6 sm:mt-8 lg:mt-10 pt-4 sm:pt-6 border-t border-gray-200">
        <p className="text-xs sm:text-sm text-center text-gray-600 font-sans">
          © 2024 Jobmantic. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
