import React from "react";
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        
        <div className="flex items-center justify-between  px-10 py-4 rounded-full bg-white/80 shadow-md backdrop-blur-sm">
            <img src="/logo.svg" alt="logo" className="h-14 w-auto" />

            <ul className="flex gap-10 text-[#231f20] font-medium text-xl">
                <li className="hover:text-[#12a387]"><a href="#home">Home</a></li>
                <li className="hover:text-[#12a387]"><a href="#about">About</a></li>
                <li className="hover:text-[#12a387]"><a href="#services">Services</a></li>
                <li className="hover:text-[#12a387]"><a href="#contact">Contact</a></li>
            </ul>

            <a href="#contact" className="bg-gradient-to-r from-[#115f5c] to-[#12a387] px-6 py-2 rounded-br-3xl rounded-tl-3xl text-white text-lg shadow-md hover:scale-105 transition">Get Started</a>
                
                
         
        </div>
    );
};

export default Nav;
