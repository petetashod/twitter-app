/** @format */
import { useState } from "react";
import App from "/src/App";
import axios from "axios";
import "/src/App.css";
import SearchTweetCard from "./SearchTweetCard";

function Search() {
  const [searchName, setSearchName] = useState("");
  const [searchUserName, setSearchUserName] = useState("");
  const [searchImage, setSearchImage] = useState("");
  const [searchData, setSearchData] = useState([]);

  const handleChangeInput = (e) => {
    e.preventDefault();
    setSearchName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = `http://localhost:3000/api/Search?search_name=${searchName}`;
    let getSearchInfo = async () => {
      let response = await axios.get(url);
      let searchTweetInfo = response.data.data;
      let searchUserImage = response.data.includes.users[0].profile_image_url;
      let searchUserName = response.date.includes.users[0].user_name;
      setSearchData(searchTweetInfo);
      setSearchImage(searchUserImage);
      setSearchUserName(searchUserName);
    };
    getSearchInfo();
  };

  return (
    <>
      <div>
        <h1>Search</h1>
        <p>Please enter a name!!!</p>
      </div>
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
                  value={searchName}
                  onChange={handleChangeInput}
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
      <div>
        {searchData.map((tweet, index) => (
          <SearchTweetCard
            key={index}
            searchImage={searchImage}
            userName={searchUserName}
            tweet={tweet}
          />
        ))}
      </div>
    </>
  );
}

export default Search;
