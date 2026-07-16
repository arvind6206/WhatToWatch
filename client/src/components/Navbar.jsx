import React from "react";
import { Clapperboard, Moon } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

function Navbar({handleClipboard, darkMode, setDarkMode}) {
    
  return (
    <nav className="bg-gradient-to-r from-gray-900 via-black to-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo + Title */}
        <div className="flex items-center gap-3">
          <div className="bg-yellow-400 p-2 rounded-full shadow-md">
            <Clapperboard size={30} 
            onClick={handleClipboard}
            className="text-black cursor-pointer" />
          </div>

          <div>
            <h1 className="text-3xl font-bold text-white tracking-wide">
              Movie Search
            </h1>
            <p className="text-gray-400 text-sm">
              Discover your favorite movies
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className='flex items-center gap-6'>
          <button className="bg-yellow-400 text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition">
            Explore
          </button>

        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode}/>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;