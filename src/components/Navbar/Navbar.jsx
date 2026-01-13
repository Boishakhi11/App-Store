import React from 'react';
import { FaGithub } from "react-icons/fa";
import logo from "/logo.png"
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    const Links = <>
                    <NavLink to="/" className={({ isActive }) =>
                    isActive ? "ml-4 text-[16px] text-purple-700 underline font-bold" 
                    : "ml-4 text-[16px]"}> 
                    <li>Home</li>
                    </NavLink> 

                    <NavLink to="/Apps" className={({ isActive }) =>
                    isActive ? "ml-4 text-[16px] text-purple-700 underline font-bold" 
                    : "ml-4 text-[16px]"}> 
                    <li>Apps</li>
                    </NavLink>

                    <NavLink to="/Installation" className={({ isActive }) =>
                    isActive ? "ml-4 text-[16px] text-purple-700 underline font-bold" 
                    : "ml-4 text-[16px]"}> 
                    <li>Installation</li>
                    </NavLink>

                    
                    </>
    return (
       <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex="-1"
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    {Links}
                </ul>
                </div>
                <Link to="./" className="btn btn-ghost text-[16px] text-purple-500"> 
                <img className='h-8 w-8' src={logo} alt='logo image'/> AppStore.io</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {Links}
                </ul>
            </div>
            <div className="navbar-end">
                <a href='https://github.com/Boishakhi11' target="_blank" className="btn text-white text-[16px] bg-gradient-to-r from-purple-700 via-purple-600 to-purple-400"> <FaGithub />Contribute</a>
            </div>
       </div>
    );
};

export default Navbar;