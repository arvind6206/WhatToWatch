import React from 'react'

function SearchBar({searchInput, setSearchInput, handleSearch}) {
  return (
    <div className="flex items-center justify-center mt-2 gap-3 bg-gray-100">
      <input className='h-12 w-100 border-2 rounded-sm' 
      type="text" 
      value={searchInput}
      placeholder="Enter the movie name"
      onChange={(e) => setSearchInput(e.target.value)} />
      <button 
      onClick={handleSearch}
      className='bg-purple-300 p-1 rounded-md cursor-pointer'
      >Search</button>
    </div>
  )
}

export default SearchBar
