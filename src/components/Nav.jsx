import React from "react";
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        
        <div className="flex items-center justify-between  px-10 py-4 rounded-full bg-white/80 shadow-md backdrop-blur-sm">
            <img src="/logo.svg" alt="logo" className="h-14 w-auto" />

            <ul className="flex gap-10 text-[#231f20] font-medium text-xl">
                <li className="hover:text-[#12a387]"><Link to="/">Home</Link></li>
                <li className="hover:text-[#12a387]"><Link to="/about">About</Link></li>
                <li className="hover:text-[#12a387]"><Link to="/services">Services</Link></li>
                <li className="hover:text-[#12a387]"><Link to="/contact">Contact</Link></li>
            </ul>

            <Link
                to="/contact"
                className="bg-gradient-to-r from-[#115f5c] to-[#12a387] px-6 py-2 rounded-br-3xl rounded-tl-3xl text-white text-lg shadow-md hover:scale-105 transition">
                Get Started
            </Link>
        </div>
    );
};

export default Nav;
