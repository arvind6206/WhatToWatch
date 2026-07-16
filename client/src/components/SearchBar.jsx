import React from 'react'

function SearchBar() {
  return (
    <div className="flex items-center justify-center mt-2 gap-3 bg-gray-100">
      <input className='h-12 w-100 border-2 rounded-sm' 
      type="text" placeholder="Enter the movie name"/>
      <button 
      className='bg-purple-300 p-1 rounded-md cursor-pointer'
      >Search</button>
    </div>
  )
}

export default SearchBar
