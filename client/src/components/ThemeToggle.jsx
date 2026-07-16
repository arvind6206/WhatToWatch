import { Moon, Sun } from "lucide-react";

function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className={`w-11 h-11 rounded-full flex items-center justify-center transition
        ${
          darkMode
            ? "bg-yellow-400 text-black"
            : "bg-gray-800 text-white"
        }`}
    >
      {darkMode ? <Sun size={22} /> : <Moon size={22} />}
    </button>
  );
}

export default ThemeToggle;