/** @format */
import { useState } from "react";
import App from "/src/App";
import axios from "axios";
import "/src/App.css";
import SearchTweetCard from "./SearchTweetCard";
// import TweetCard from "./TweetCard";

function Search() {
  // user information
  const [userOrTweet, setUserOrtweet] = useState(false);
  const [searchName, setSearchName] = useState("");
  const [searchUserName, setSearchUserName] = useState("");
  const [searchImage, setSearchImage] = useState("");
  const [searchData, setSearchData] = useState([]);

  const SearchUserUrl = `http://localhost:3000/api/Search?search_name=${searchName}}`;
  const selection = (e) => {};
  const handleChangeInput = (e) => {
    e.preventDefault();
    setSearchName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let tweetInfo = async () => {
      let response = await axios.get(SearchUserUrl);
      let searchUserTweetInfo = response.data.data;
      let searchUserImage = response.data.includes.users[0].profile_image_url;
      let searchUserName = response.date.includes.users[0].user_name;

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
    </div>
  );
}

export default Search;
