import React from 'react';
import headerImage from '../src/images/header.png';

const Header = () => {
  return (
    <header className="relative bg-white shadow-md">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={headerImage} alt="Header Background" className="w-full h-full object-cover" />
      </div>

      {/* Overlay */}
      <div className="relative bg-white bg-opacity-90">
        <div className="container mx-auto flex justify-between items-center px-4 py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/path-to-logo.png" alt="Logo" className="h-10" />
            <span className="ml-2 text-xl font-bold text-pink-500">Gift Wrap</span>
          </div>

          {/* Search Bar */}
          <div className="flex-1 mx-8">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-2 border rounded-full shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <a href="/wishlist" className="text-gray-600 hover:text-gray-800">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
                />
              </svg>
            </a>
            <a href="/cart" className="text-gray-600 hover:text-gray-800">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 5.45A2 2 0 007.6 21h8.8a2 2 0 001.95-2.55L17 13M7 13L5.4 5H3M17 13l1.35-5.45M5 6h14"
                />
              </svg>
            </a>
            <a href="/profile" className="text-gray-600 hover:text-gray-800">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5.121 17.804A9 9 0 1118.879 6.196a9 9 0 01-13.758 11.608z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

