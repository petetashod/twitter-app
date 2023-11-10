/** @format */
import { useState } from "react";
import NavBar from "./NavBar";
import "/src/App.css";
import axios from "axios";
import TweetCard from "./TweetCard.jsx";
const favTwitterUsers = [
  {
    id: "342601720",
    name: "Team LeBron 👑",
    username: "LeBronJames"
  },
  {
    id: "27195114",
    name: "Drizzy",
    username: "Drake"
  },
  {
    id: "776968879",
    name: "Ohio State Buckeyes",
    username: "Buckeyes"
  },
  {
    id: "750751206427860992",
    name: "Marvel Studios",
    username: "MarvelStudios"
  },
  {
    id: "22258315",
    name: "GameStop",
    username: "GameStop"
  },
];

function FavTweets() {
  const [tweetsDisplay, setTweetsDisplay] = useState([]);

  const url = "http://localhost:3000/api/tweets";

  const button = (e) => {
    e.preventDefault();
    let favTweetInfo = async () => {
      let response = await axios.get(url);
      let tweetInformation = response.data.data;
      // console.log(tweetInformation);
      setTweetsDisplay(tweetInformation);
    };
    favTweetInfo();

    // use get request to get tweet information


  };
  
 

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
      <div className="card-container cardDiv">
        {tweetsDisplay.map((tweet, index) => (
          <TweetCard key={index}tweet={tweet.id} tweetText={tweet.text} />
        ))}
      </div>
    </>
  );
}

export default FavTweets;
