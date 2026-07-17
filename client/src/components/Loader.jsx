import React from "react";

function Loader({ darkMode }) {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center">
      <div
        className="
          w-16
          h-16
          rounded-full
          border-4
          border-gray-300
          border-t-yellow-400
          animate-spin
        "
      ></div>

      <h2
        className={`mt-6 text-2xl font-bold ${
          darkMode ? "text-white" : "text-gray-900"
        }`}
      >
        Loading Movies...
      </h2>

      <p
        className={`mt-2 ${
          darkMode ? "text-gray-400" : "text-gray-600"
        }`}
      >
        Fetching the latest movies for you 🎬
      </p>
    </div>
  );
}

export default Loader;