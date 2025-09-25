import React from "react";
import logo1 from "../assets/logo1.png";
import linkedin from "../assets/linkedin.png"
import instagram from "../assets/instagram.png"
import tiktok from "../assets/tiktok.png"
import twitter from "../assets/twitter.png"

const Footer = () => {
  return (
    <footer className="bg-[#F7F9FC] text-black py-10 px-2">
        <div className="flex justify-between items-end mb-3">
        <div>
          <img src={logo1} alt="Jobmantic Logo" />
        </div>

        <div className="justify-end">
        {/* Social Icons */}
          <div className="flex space-x-4 mt-2 me-56 pe-2 ">
            <a href="#"><img src={linkedin} alt="" /></a>
            <a href="#"><img src={instagram} alt="" /></a>
            <a href="#"><img src={tiktok} alt="" /></a>
            <a href="#"><img src={twitter} alt="" /></a>
          </div>
        </div>
        </div>
       
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-5">
        {/* Features */}
        <div>
          <h6 className="font-semibold mb-3">Features</h6>
          <ul className="space-y-2 font-sans font-normal text-sm">
            <li><a href="#">AI Resume</a></li>
            <li><a href="#">AI Coverletter</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Career</a></li>
            <li><a href="#">Organization</a></li>
            <li><a href="#">Outplacement</a></li>
          </ul>
        </div>

        {/* Blog */}
        <div>
          <h6 className="font-semibold mb-3">Blog</h6>
          <ul className="space-y-2 font-sans font-normal text-sm">
            <li><a href="#">Is Jobright Legit?</a></li>
            <li><a href="#">Success Stories from Jobright Users</a></li>
            <li><a href="#">What Top AI Companies Are Looking For</a></li>
            <li><a href="#">Jobright AI Agent Launch</a></li>
            <li><a href="#">Top Entry Level Jobs</a></li>
          </ul>
        </div>

        {/* Related Tools*/}
        <div>
          <div>
            <h6 className="font-semibold mb-3">Related Tools</h6>
            <ul className="space-y-2 font-sans font-normal text-sm">
              <li><a href="#">AI Job Assistant</a></li>
              <li><a href="#">AI Cover Letter Generator</a></li>
              <li><a href="#">AI Resume Helper</a></li>
              <li><a href="#">AI Job Tracker</a></li>
            </ul>
          </div>
        </div>

        <div>
  

            <div>
            <h6 className="font-semibold mb-3">Information</h6>
            <ul className="space-y-2 font-sans font-normal text-sm">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>

         
        </div>
      </div>
    </footer>
  );
};

export default Footer;
