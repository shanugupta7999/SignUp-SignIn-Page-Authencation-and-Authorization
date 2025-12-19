import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const isLoggedIn = localStorage.getItem("token");

  return (
    <nav className="bg-slate-900 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* Logo */}
        <h2 className="text-2xl font-bold text-sky-400">
          Logo
        </h2>

        {/* Links */}
        <ul className="flex gap-8 text-lg">
          <li>
            <Link to="/" className="hover:text-sky-400 transition duration-300">
              Home
            </Link>
          </li>

          <li>
            <Link to="/about" className="hover:text-sky-400 transition duration-300">
              About
            </Link>
          </li>

          <li>
            <Link to="/contact" className="hover:text-sky-400 transition duration-300">
              Contact
            </Link>
          </li>

          <li>
            {isLoggedIn ? (
              <Link to="/dashboard">
                <button className="bg-green-500 hover:bg-green-600 transition text-white py-2.5 px-4 rounded-xl text-lg">
                  Dashboard
                </button>
              </Link>
            ) : (
              <Link to="/signin">
                <button className="bg-pink-500 hover:bg-pink-600 transition text-white py-2.5 px-4 rounded-xl text-lg">
                  Get Started
                </button>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
