/** @format */
import { useState, useEffect } from "react";
import App from "/src/App";
import NavBar from "./NavBar";
import "/src/App.css";
function Search() {
  const [search, setSearch] = useState("");
  const twitterData = {}
  

  const handleSubmit = (e) => {
    e.preventDefault();
   
  };
  return (
    <>
      <h1>Search</h1>
      <div className="input-group mb-3 searchDiv">
        <form action="" method="GET" className=" input-group mb-3 form">
          <input type="search" className="form-control input bg-light-subtle" />
          <button
            type="search"
            className="btn  btn-styling  btn-outline-secondary"
            onClick={handleSubmit}
          >
            Search
          </button>
        </form>
      </div>
    </>
  );
}

export default Search;
