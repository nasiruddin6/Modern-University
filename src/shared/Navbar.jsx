import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import icon from '../assets/education.png';
import { CiSearch } from 'react-icons/ci';
import { X } from 'lucide-react';

const globalData = [
    // Navbar Links
    { name: "Home", path: "/" },
    { name: "Elements", path: "/elements" },
    { name: "Pages", path: "/pages" },
    { name: "News", path: "/news" },
    { name: "Campus", path: "/campus" },
    { name: "Contacts", path: "/contacts" },
    { name: "Developer List", path: "/developList" },

    // Other Sections Data (এইখানে ওয়েবসাইটের অন্যান্য ডাটা রাখো)
    { name: "Latest News - University Ranked Top", path: "/news" },
    { name: "Modern University Campus", path: "/campus" },
    { name: "New Courses Added for 2025", path: "/courses" },
    { name: "Best Teachers in our Faculty", path: "/faculty" },
    { name: "Scholarship Opportunities", path: "/scholarships" },
    { name: "Upcoming Events and Seminars", path: "/events" },
];

const Navbar = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredItems, setFilteredItems] = useState([]);

    // Search Functionality (Navbar + Other Sections)
    const handleSearch = (query) => {
        setSearchQuery(query);
        if (query.trim() === "") {
            setFilteredItems([]); 
        } else {
            const filtered = globalData.filter(item =>
                item.name.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredItems(filtered);
        }
    };

    return (
        <div className="bg-yellow-100 bg-opacity-50 fixed top-0 left-0 w-full z-50 shadow-md">
            <div className='navbar w-11/12 mx-auto py-3 flex justify-between items-center'>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-94 p-2 shadow">
                            {globalData.slice(0, 7).map((item) => (
                                <li key={item.path}>
                                    <NavLink to={item.path}>{item.name}</NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='hidden md:flex gap-2 items-center'>
                        <img className='w-8 text-2xl' src={icon} alt="" />
                        <h2 className='text-2xl font-bold'>Modern University</h2>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {globalData.slice(0, 7).map((item) => (
                            <li key={item.path}>
                                <NavLink to={item.path}>{item.name}</NavLink>
                            </li>
                        ))}
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
                            value={searchQuery}
                            onChange={(e) => handleSearch(e.target.value)}
                        />
                        <button onClick={() => {
                            setIsSearchOpen(false);
                            setSearchQuery("");
                            setFilteredItems([]);
                        }} className="ml-2 text-gray-500 hover:text-gray-700">
                            <X size={24} />
                        </button>
                    </div>

                    {/* Search Results */}
                    {searchQuery && (
                        <div className="mt-2 bg-white shadow-lg rounded-md max-h-40 overflow-y-auto">
                            {filteredItems.length > 0 ? (
                                filteredItems.map((item) => (
                                    <NavLink
                                        key={item.path}
                                        to={item.path}
                                        className="block px-4 py-2 hover:bg-gray-200"
                                        onClick={() => setIsSearchOpen(false)}
                                    >
                                        {item.name}
                                    </NavLink>
                                ))
                            ) : (
                                <p className="px-4 py-2 text-gray-500">No results found</p>
                            )}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Navbar;
