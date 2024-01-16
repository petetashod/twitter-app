/** @format */
import { useState } from "react";
import App from "/src/App";
import axios from "axios";
import "/src/App.css";
import SearchTweetCard from "./SearchTweetCard";

function Search() {
  // user information
  const [isUserSearch, setIsUserSearch] = useState();
  const [searchName, setSearchName] = useState("");
  const [searchUserName, setSearchUserName] = useState("");
  const [searchImage, setSearchImage] = useState("");
  const [searchData, setSearchData] = useState([]);

  let searchUserUrl = `http://localhost:3000/api/Search?search_name=${searchName}`;
  const selection = (e) => {
    e.preventDefault();
    setIsUserSearch(e.target.value);

    // set userSearch to true or false
  };
  const handleChangeInput = (e) => {
    e.preventDefault();
    setSearchName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isUserSearch);
    if (isUserSearch === "true") {
      searchUserUrl = `http://localhost:3000/api/SearchUserTweet?user_id=${searchName}`;
      // check and see if there is a different endpoint that allows you to search by username??
    }
    console.log("Search URL:", searchUserUrl);
    let tweetInfo = async () => {
      let response = await axios.get(searchUserUrl);
      let searchUserTweetInfo = response.data.data;
      let searchUserImage = response.data.includes.users[0].profile_image_url;
      let searchUserName = response.data.includes.users[0].username;

      setSearchData(searchUserTweetInfo);
      setSearchUserName(searchUserName);
      setSearchImage(searchUserImage);
    };

    tweetInfo();
  };

  return (
    <div>
      <div>
        <h1>Search</h1>
        <p>Please enter a name and choose to search by user/tweet</p>
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
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="dropdownCheck"
                    name="user"
                    value={true}
                    onChange={selection}
                  />
                  <label className="form-check-label">User</label>
                </div>

                <input
                  type="checkbox"
                  className="form-check-input"
                  id="dropdownCheck"
                  name="tweets"
                  value={false}
                  onChange={selection}
                />
                <label className="form-check-label">Tweets</label>

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
    </div>
  );
}

export default Search;
