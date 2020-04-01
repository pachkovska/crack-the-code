import React from "react";

function SearchBar(props) {
  return (
    <div className="searchBar">
      <input
        type="text"
        onChange={props.handleChange}
        placeholder="Search ..."
      ></input>
      <div className="searchBar-button" onClick={props.showSearch}>
        Search
      </div>
    </div>
  );
}

export default SearchBar;
