import React from 'react';
import line from "../assets/plat_line.png"
import logo from "../assets/plat_logo.png"
import banner from "../assets/plat_banner.png"
import btnlogo from "../assets/btnlogo.png"
import elipse from "../assets/ban_elip.png"

const Platform = () => {
  return (
    <div className='mt-32  font-sans'>
        <div className='mb-12'>
            <h1 className='text-3xl sm:text-4xl font-bold text-black font-sans'>Why Choose Our AI <br />Job Placement Platform?</h1>
            <div className='flex gap-2 items-center'>
                <img src={line} className='h-1 w-48' alt="" />
                <img src={logo} alt="" />
            </div>
        </div>


        {/* platform banner section */}
         <div className='text-black flex mt-6' >
                {/*  banner left side */}
    <div className='w-1/2 mt-16 pt-1.5'>
        
          {/* Main content section, aligned to the left */}
          <h1 className='font-normal font-sans mt-3 text-5xl'>
            Smart Resume Tailoring
          </h1>
          <p className='font-normal text-lg mt-2.5'>
            Let our smart AI craft the perfect resume for every job—packed with the right keywords, skills, and experiences to grab recruiters’ attention and land interviews faster.
          </p>
        
          {/* Call-to-action button, aligned to the left */}
          <button className='btn p-8 bg-black rounded-full mt-2.5 flex items-center gap-2'>
            <p className='text-lg py-10 ps-6 pe-1 text-white'>Create a resume</p>
            <img src={btnlogo} alt="button logo" className="pe-5" />
          </button>
        </div>
        
        {/* banner right side */}
        
        <div className='w-1/2 me-32 mb-32 p-8 mt-4 rounded-lg relative text-black'>
        <div className='items-center mx-auto'>
            <h1 className='text-gray-700 w-36 bg-white border-rounded p-2 justify-center ms-80'>job description</h1>
           
        </div>
        <div className='flex'>
          <h1 className='text-gray-700 w-36 h-10 bg-white border-rounded p-2 justify-center ms-12 mt-20'>Resume</h1>
            <img src={banner} alt="Main banner frame" className="relative" />
        </div>
             
        <div className='absolute top-0 right-0 items-end transform translate-x-1/4 translate-y-1.5 bg-gray-50 p-5 rounded-2xl'>
            <div className='flex items-center gap-1'>
                <p className='font-normal font-sans text-xs'>customize resume</p>
                <img src={elipse}  alt="" className="w-2 h-2 " />
                 
            </div>
            <div className='flex items-center gap-1'>
                <p className='font-normal font-sans text-xs'>experience match</p>
                <img src={elipse} alt="" className="w-2 h-2 "/>
            </div>
            <div className='flex items-center gap-1'>
                      <p className='font-normal font-sans text-xs'>keyword match</p>
                      <img src={elipse} alt="" className="w-2 h-2 " />
            </div>
            <div className='flex items-center gap-1'>
                    <p className='font-normal font-sans text-xs'>keyword match</p>
                      <img src={elipse} alt="" className="w-2 h-2 "/>
            </div>
               
                
          
            </div>
        </div>
        
            </div>
    </div>
  );
};

export default Platform;