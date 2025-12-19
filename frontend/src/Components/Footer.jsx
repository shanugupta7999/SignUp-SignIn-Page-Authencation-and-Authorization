import React from "react";

function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 py-6 mt-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Left */}
        <p className="text-sm">
          © {new Date().getFullYear()} Logo. All rights reserved.
        </p>

        {/* Center */}
        <div className="flex gap-6 text-sm">
          <span className="cursor-pointer hover:text-sky-400 transition">
            Privacy Policy
          </span>
          <span className="cursor-pointer hover:text-sky-400 transition">
            Terms
          </span>
          <span className="cursor-pointer hover:text-sky-400 transition">
            Support
          </span>
        </div>

        {/* Right */}
        <p className="text-sm">
          Made with ❤️ by <span className="text-sky-400 font-medium">Shanu</span>
        </p>

      </div>
    </footer>
  );
}

export default Footer;
