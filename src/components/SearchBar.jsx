import React, { useState } from "react";

const SearchBar = ({ handleSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(searchQuery);
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input type="text" placeholder="Search..." value={searchQuery} onChange={handleChange} />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
