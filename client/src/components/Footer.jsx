import React from "react";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white">Movie Search</h3>
            <p className="text-gray-400 text-sm mt-1">
              Discover your favorite movies
            </p>
          </div>
          
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Movie Search. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
