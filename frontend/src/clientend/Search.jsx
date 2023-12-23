/** @format */
import { useState, useEffect } from "react";
import App from "/src/App";
import NavBar from "./NavBar";
import "/src/App.css";
import SearchTweetCard from "./SearchTweetCard";
function Search() {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <h1>Search</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 offset-lg-4">
            <div className="input-group mb-3 ">
              <form
                action=""
                method="GET"
                className="mb-2 input-group-append"
                id=""
              >
                <input
                  type="search"
                  className="form-control align-self-center"
                  id=""
                />
                <div className="col text-center">
                  <button
                    type="search"
                    className="btn  btn-small btn-dark searchButton"
                    onClick={handleSubmit}
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
