import React from "react";
import keygen from "Helpers/keygen";
import "./navigation.scss";

const Navigation = () => {
  const navItmes = [
    { title: "Categories", url: "#" },
    { title: "Images", url: "#" },
    { title: "Vectors", url: "#" },
    { title: "Videos", url: "#" },
  ];
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-xl">
        <a className="navbar-brand d-lg-none" href="#">
          <img src="./assets/header-logo.png" alt="Colourbox" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample07XL"
          aria-controls="navbarsExample07XL"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars" />
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample07XL">
          <ul className="navbar-nav mr-auto">
            {navItmes.map((item) => (
              <li className="nav-item" key={keygen()}>
                <a className="nav-link" href={item.url}>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <ul className="navbar-nav right-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Prices
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Signup
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
