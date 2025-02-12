import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import icon from '../assets/education.png';
import { CiSearch } from 'react-icons/ci';
import { X } from 'lucide-react';

const Navbar = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const nav = (
        <div className='flex gap-2'>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/elements">Elements</NavLink></li>
            <li><NavLink to="/pages">Pages</NavLink></li>
            <li><NavLink to="/news">News</NavLink></li>
            <li><NavLink to="/campus">Campus</NavLink></li>
            <li><NavLink to="/contacts">Contacts</NavLink></li>
        </div>
    );

    return (
        <div className="navbar bg-yellow-100 bg-opacity-50 relative">
            <div className='navbar w-11/12 mx-auto'>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {nav}
                        </ul>
                    </div>
                    <div className='hidden md:flex gap-2 items-center'>
                        <img className='w-12' src={icon} alt="" />
                        <h2 className='text-2xl font-bold'>Modern University</h2>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {nav}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="text-2xl flex items-center gap-1">
                        <CiSearch /> Search
                    </button>
                </div>
            </div>

            {/* Search Bar */}
            {isSearchOpen && (
                <div className="absolute top-2 right-48 bg-white shadow-lg p-3 rounded-lg w-64">
                    <div className="flex justify-between items-center">
                        <input
                            type="text"
                            placeholder="Search here..."
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        />
                        <button onClick={() => setIsSearchOpen(false)} className="ml-2 text-gray-500 hover:text-gray-700">
                            <X size={24} />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
