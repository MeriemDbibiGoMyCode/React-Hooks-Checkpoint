import React from "react";
const SearchMovie = ({ setSearch }) => {
  return (
    <div>
      <h1> Our Movie App </h1>
      <input
        type="text"
        placeholder="search . . ."
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};
export default SearchMovie;
