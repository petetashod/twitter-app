/** @format */
import React from "react";
import App from "/src/App.jsx";

import { Link } from "react-router-dom";

function NavBar() {
  // twitter as a navigation button
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid bg-black">
          <Link className="navbar-brand text-white" to="/Home">
            Twitter
          </Link>
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
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/Home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/Search">
                  Search
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/FavTweets">
                  FavTweets
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
