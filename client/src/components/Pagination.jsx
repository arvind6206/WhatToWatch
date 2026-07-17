import React from "react";

function Pagination({ page, setPage, totalResults, darkMode }) {
  const totalPages = Math.ceil(totalResults / 10);

  return (
    <div className="flex items-center justify-center gap-6 mt-10 mb-6">
      <button
        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        disabled={page === 1}
        className={`px-5 py-2 rounded-lg font-semibold transition ${
          page === 1
            ? "bg-gray-400 cursor-not-allowed text-white"
            : "bg-yellow-400 hover:bg-yellow-300 text-black"
        }`}
      >
        ⬅ Previous
      </button>

      <div
        className={`text-lg font-bold ${
          darkMode ? "text-white" : "text-black"
        }`}
      >
        Page {page} of {totalPages || 1}
      </div>

      <button
        onClick={() => setPage((prev) => prev + 1)}
        disabled={page === totalPages || totalPages === 0}
        className={`px-5 py-2 rounded-lg font-semibold transition ${
          page === totalPages || totalPages === 0
            ? "bg-gray-400 cursor-not-allowed text-white"
            : "bg-yellow-400 hover:bg-yellow-300 text-black"
        }`}
      >
        Next ➡
      </button>
    </div>
  );
}

export default Pagination;