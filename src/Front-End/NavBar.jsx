/** @format */
import React from "react";
import App from "/src/App.jsx";
import nav from "./nav.css";
import Search from "./Search.jsx";
import FavTweets from "./FavTweets.jsx";

function NavBar() {
  // twitter as a navigation button
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Twitter
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/Home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Search">
                  Search
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/FavTweets">
                  FavTweets
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
