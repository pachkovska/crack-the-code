import React from "react";
import SearchBar from "./SearchBar";
import Snippets from "./Snippets";

function Content(props) {
  return (
    <div className="content">
      <SearchBar
        showSearch={props.showSearch}
        handleChange={props.handleChange}
      />
      <Snippets snippets={props.snippets} />
    </div>
  );
}

export default Content;
