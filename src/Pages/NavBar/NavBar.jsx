

import React, { useState } from "react";
import logo from '../../assets/college/Satkhira-govt-college.jpg'
import { Menu, User, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const groupItems = [
    { name: "Science", path: "/groups/science" },
    { name: "Humanities", path: "/groups/humanities" },
    { name: "Commerce", path: "/groups/commerce" },
  ];

  // Hover timers to prevent fast hide
  let hoverTimeout;

  const handleMouseEnter = () => {
    clearTimeout(hoverTimeout);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    hoverTimeout = setTimeout(() => setDropdownOpen(false), 150); // short delay
  };

  return (
    <nav className="w-full fixed top-0 z-50 bg-white/40 backdrop-blur-xl border-b border-white/30 shadow-lg transition-all duration-500">
      <div className=" mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo & Title */}
        <div className="flex items-center gap-3 cursor-pointer select-none">
          <img
            src={logo}
            alt="logo"
            className="w-11 h-11 rounded-full transition-all duration-500 hover:scale-125 hover:rotate-6 drop-shadow-lg"
          />
          <h1 className="text-2xl font-extrabold text-gray-900 hover:text-green-600 transition-all duration-500">
            MyUniversity
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-gray-800 font-medium">
          {menuItems.map((item) => (
            <li key={item.name} className="relative cursor-pointer">
              <Link
                to={item.path}
                className={`transition-all duration-300 ${
                  location.pathname === item.path
                    ? "text-green-600 font-bold"
                    : "hover:text-green-600"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}

          {/* Groups */}
          <li
            className="relative cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex items-center gap-1 hover:text-green-600">
              Groups <ChevronDown className="w-4 h-4" />
            </div>

            {/* Dropdown */}
            {dropdownOpen && (
              <div
                className="absolute top-8 left-0 bg-white/90 backdrop-blur-xl shadow-xl rounded-xl py-2 w-56 border border-gray-200 transition-all duration-150"
                onMouseEnter={handleMouseEnter} // keep open if mouse inside
                onMouseLeave={handleMouseLeave}
              >
                {groupItems.map((cat) => (
                  <Link
                    key={cat.name}
                    to={cat.path}
                    className={`block px-4 py-2 transition-all duration-150 hover:bg-green-100 hover:text-green-600 ${
                      location.pathname === cat.path ? "text-green-600 font-bold" : ""
                    }`}
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            )}
          </li>
        </ul>

        {/* User Icon */}
        <div className="hidden md:block cursor-pointer">
          <User className="w-8 h-8 text-gray-800 hover:text-green-600 transition-all duration-500 hover:scale-125 drop-shadow" />
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          <Menu className="w-8 h-8 text-gray-700" />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-inner px-6 py-4 space-y-3 transition-all duration-300">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`block hover:text-green-600 transition-all duration-300 ${
                location.pathname === item.path ? "text-green-600 font-bold" : ""
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          {/* Mobile Groups */}
          <details className="cursor-pointer">
            <summary className="font-medium text-gray-700">Groups</summary>
            <div className="ml-4 mt-2 space-y-2">
              {groupItems.map((cat) => (
                <Link
                  key={cat.name}
                  to={cat.path}
                  className={`block hover:text-green-600 transition-all duration-300 ${
                    location.pathname === cat.path ? "text-green-600 font-bold" : ""
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </details>

          <div className="pt-2">
            <User className="w-7 h-7 text-gray-700 hover:text-green-600 transition-all duration-500" />
          </div>
        </div>
      )}
    </nav>
  );
}
