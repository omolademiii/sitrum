import React,  { useState } from 'react'

const SearchForm = ({onSearch}) => {
    const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };
  return (
    
      <div className="p-4">
      <form className="flex items-center">
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 rounded-l-md border-t border-b border-l text-gray-800 border-gray-300"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type="submit"
          onClick={handleSearch}
          className="px-4 py-2 bg-blue-500 text-white rounded-r-md border-t border-b border-r border-blue-700 hover:bg-blue-600 focus:outline-none"
        >
          Search
        </button>
      </form>
    </div>
    
  )
}

export default SearchForm
