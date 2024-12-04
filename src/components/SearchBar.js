import React from "react";

function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <input
      type="text"
      placeholder="Search for songs..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)} // Update search query
      className="w-[513px] h-[54px] px-4 text-black border-2 border-gray-300 rounded-lg"
    />
  );
}

export default SearchBar;
