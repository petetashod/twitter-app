/** @format */
import React from 'react';
import App from '/src/App.jsx';
import nav from "./nav.css";
import Search from "/Users/tashodpeterson/Desktop/twitter-app/src/Front-End/Search.jsx";

function NavBar() {
  // twitter as a navigation button
  return (
    <>
      <nav className="navStyling navbar-light bg-light navbar-expand-lg">
        {/* <a href="#" className="navbar-brand navAnchor">
          Twitter
        </a> */}
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <a
              className="nav-link active navbar-brand"
              aria-current="page"
              href={<App/>}
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link navbar-brand" href="#">
              Search
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link navbar-brand" href="#">
              Fav Tweets
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
