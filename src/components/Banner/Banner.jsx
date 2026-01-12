import React from 'react';
import { FaAppStore } from "react-icons/fa6";
import { BiLogoPlayStore } from "react-icons/bi";


const Banner = () => {
    return (
        <div className="hero bg-base-200">
            <div className="hero-content text-center">
                <div className="">
                <h1 className="text-center text-6xl font-bold">We Build <br/> <span className='text-purple-600'>Productive</span> Apps</h1>
                <p className="py-6 w-7/12 mx-auto text-xl text-gray-500">
                    At Appstore.io, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.
                </p>
                <div className='flex justify-center items-center gap-4 mb-7'>
                     <a href='https://play.google.com/store/apps?hl=en' target='_blank'className='p-2 border border-gray-300 rounded-2xl inline-flex gap-2 items-center'> <BiLogoPlayStore className='text-xl'/> Google Play</a>
                     <a href='https://www.apple.com/app-store/' target='_blank' className='p-2 border border-gray-300 rounded-2xl inline-flex items-center gap-2'> <FaAppStore className='text-xl'/> App Store</a>
                </div>
                   
                </div>
            </div>
        </div> 
    );
};

export default Banner;