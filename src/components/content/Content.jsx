import React from 'react';
import './Content.css';
import SearchBar from '../searchBar/SearchBar';
import Snippets from '../snippets/Snippets';

function Content(props) {
  return (
    <div className="content">
        <SearchBar />
        <Snippets
          snippets={props.snippets}
        />
    </div>
  );
}

export default Content;