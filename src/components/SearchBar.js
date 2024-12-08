import React from "react";

function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <input
      type="text"
      placeholder="Search for songs..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)} // Update search query
      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
    />
  );
}

export default SearchBar;
