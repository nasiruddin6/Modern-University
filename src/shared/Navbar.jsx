import React from 'react';
import { NavLink } from 'react-router-dom';
import icon from '../assets/education.png'
import { CiSearch } from 'react-icons/ci';

const Navbar = () => {
    const nav = <>
        <li> <NavLink>Home</NavLink></li>
        <li> <NavLink>Elements</NavLink></li>
        <li> <NavLink>Pages</NavLink></li>
        <li> <NavLink>News</NavLink></li>
        <li> <NavLink>Campus</NavLink></li>
        <li> <NavLink>Contacts</NavLink></li>
    </>
    return (
        <div className="navbar  bg-black bg-opacity-50">
            <div className='navbar w-11/12 mx-auto'>
                <div className="navbar-start ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {nav}
                        </ul>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <img
                            className='w-12'
                            src={icon} alt="" />
                        <h2 className='text-2xl font-bold'>Modern University</h2>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {nav}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="text-2xl"><CiSearch /></a>

                </div>
            </div>
        </div>
    );
};

export default Navbar;