import React from "react";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Add this

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const [height, setHeight] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (menuRef.current) {
      setHeight(isOpen ? menuRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-3">
            <svg width="48" height="48" viewBox="0 0 100 100" fill="none">
              <g>
                <path d="M30 70 H70 L60 90 H40 Z" fill="#8D6E63" />
                <path d="M50 30 V70" stroke="#388E3C" strokeWidth="3" />
                <path
                  d="M50 30 Q40 20 30 30"
                  stroke="#388E3C"
                  strokeWidth="3"
                  fill="none"
                />
                <path
                  d="M50 30 Q60 20 70 30"
                  stroke="#388E3C"
                  strokeWidth="3"
                  fill="none"
                />
              </g>
            </svg>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-green-700">
                Plant Delivery
              </span>
              <span className="text-gray-500 text-sm italic">
                Bringing Nature Home
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <a
              href="#home"
              className="text-gray-700 hover:text-green-700 font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-green-700 font-medium"
            >
              About
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-green-700 font-medium"
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-green-700 font-medium"
            >
              Contact
            </a>
            <button
              className="bg-green-700 text-white px-4 py-1 rounded hover:bg-green-800 transition cursor-pointer"
              onClick={() => navigate("/auth", { state: { mode: "login" } })}
            >
              Login
            </button>
            <button
              className="bg-green-700 text-white px-4 py-1 rounded hover:bg-green-800 transition cursor-pointer"
              onClick={() => navigate("/auth", { state: { mode: "signup" } })}
            >
              Signup
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-green-700 focus:outline-none"
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        ref={menuRef}
        style={{ height: `${height}px` }}
        className="overflow-hidden transition-[height] duration-300 md:hidden bg-white shadow-md"
      >
        <div className="flex flex-col px-4 py-2">
          <a
            href="#home"
            className="block px-2 py-2 text-gray-700 hover:bg-green-50 rounded"
          >
            Home
          </a>
          <a
            href="#about"
            className="block px-2 py-2 text-gray-700 hover:bg-green-50 rounded"
          >
            About
          </a>
          <a
            href="#services"
            className="block px-2 py-2 text-gray-700 hover:bg-green-50 rounded"
          >
            Services
          </a>
          <a
            href="#contact"
            className="block px-2 py-2 text-gray-700 hover:bg-green-50 rounded"
          >
            Contact
          </a>
          <div className="flex flex-col gap-2 mt-2">
            <button className="bg-green-700 text-white px-4 py-1 rounded hover:bg-green-800 transition">
              Login
            </button>
            <button className="bg-green-700 text-white px-4 py-1 rounded hover:bg-green-800 transition">
              Signup
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
