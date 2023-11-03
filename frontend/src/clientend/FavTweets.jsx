/** @format */
import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import "/src/App.css";
import axios from "axios";

function FavTweets() {

  const [tweetsDisplay, setTweetsDisplay] = useState([]);
  
  const url = "http://localhost:3000/api/tweets"
  

  const button = (e) => {
    e.preventDefault();
    let favTweetInfo = async () => {
      let response = await axios.get(url);
      let tweetInformation = response.data.data;
      // console.log(tweetInformation);
      setTweetsDisplay(tweetInformation);
      
    };
    favTweetInfo();
  };
  // const tweetsDisplayArray = [...tweetsDisplay];

  return (
    <>
      <div>
        <h1>Twitter</h1>
        <p>
          Get a random tweets from these 5 celebrities users:
          <br />
          Lebron James, Drake, Ohio State Football, Marvel Studios, GameStop
        </p>
        <form action="" method="GET" className=" favForm">
          <button
            type="submit"
            className="btn btn-dark favButton"
            onClick={button}
          >
            random tweets
          </button>
        </form>
      </div>
      <div className="card-container">
        {tweetsDisplay.map((tweet, index) => (
          <ul className="card" key={index}>
            <h5 className="card-title">{tweet.id}</h5>
            <p className="card-text">{tweet.text}</p>
          </ul>
        ))}
      </div>
    </>
  );
}

export default FavTweets;
