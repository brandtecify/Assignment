import React, { useState } from "react";
import { MdSearch } from "react-icons/md";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <nav className="absolute top-0 left-0 w-full bg-transparent py-4">
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <div className="text-white text-xl font-bold">MyLogo</div>

        {/* Nav Items */}
        <ul className="flex items-center space-x-8 text-white bg-white/10 p-5 rounded-2xl gap-5">
          <li className="hover:text-gray-300 cursor-pointer">
            <a href="#home">Home</a>
          </li>
          <li className="relative group">
            <div className="flex items-center cursor-pointer hover:text-gray-300">
              <a href="#bicycle">Bicycle Category</a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            {/* Dropdown */}
            <ul className="absolute left-0 mt-2 hidden group-hover:block bg-white text-black shadow-lg rounded-lg w-40">
              <li className="px-4 py-2 hover:bg-gray-100">
                <a href="#">Mountain Bikes</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <a href="#">Road Bikes</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <a href="#">Electric Bikes</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <a href="#">Search</a>
              </li>
            </ul>
          </li>

          {/* Search Bar */}
          <div className="relative flex items-center w-full max-w-25 bg-transparent rounded-md shadow-lg">
            <MdSearch className="absolute left-3 text-white" size={15} />
            <input
              type="text"
              id="search"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full pl-10 pr-4 py-2 rounded-md bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-white"
            />
          </div>
        </ul>

        {/* Account Icon */}
        <div className="relative p-3 bg-white/10 p-4">
          <button className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5.121 17.804A5.978 5.978 0 0112 15c1.657 0 3.156.67 4.243 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
