import React from "react";
import "./search.scss";

const Search = () => (
  <div className="search-form">
    <div className="input-group">
      <input
        className="form-control"
        type="text"
        placeholder="Search within 26 milion photos, Illustrations & videos"
        aria-label="Search"
      />
      <div className="input-group-append">
        <button className="search-btn" type="submit">
          <i className="fas fa-search" />
        </button>
      </div>
    </div>
  </div>
);

export default Search;
