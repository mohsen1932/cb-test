import React from "react";
import Search from "components/Search";
import "./search-bar.scss";

const SearchBar = () => (
  <div className="search-bar fixed-top">
    <div className="container-xl">
      <div className="search-bar-row align-items-center">
        <a className="black-logo d-none d-lg-flex" href="#">
          <img src="./assets/logo.svg" alt="Colourbox" />
        </a>
        <Search />
        <a className="shopping-card" href="#">
          <i className="far fa-shopping-bag" />
        </a>
      </div>
    </div>
  </div>
);

export default SearchBar;
