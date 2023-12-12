/** @format */
import { useState } from "react";
import NavBar from "./NavBar";
import "/src/App.css";
import axios from "axios";
import TweetCard from "./TweetCard.jsx";

const favTwitterUsers = [
  {
    id: "342601720",
  },
  {
    id: "27195114",
  },
  {
    id: "776968879",
  },
  {
    id: "750751206427860992",
  },
  {
    id: "22258315",
  },
];
// pass the user id into the https request for the back end

function FavTweets() {
  const [id, setId] = useState([]);
  const [imageUrl, setImageUrl] = useState("");
  const button = (e) => {
    const index = Math.floor(Math.random() * favTwitterUsers.length);
    const id = favTwitterUsers[index].id;
    const url = `http://localhost:3000/api/tweets?user_id=${id}`;
    e.preventDefault();
    let favTweetInfo = async () => {
      let response = await axios.get(url);
      let tweetInformation = response.data.data;
      let tweetUsersInfo = response.data.includes.users.profile_image_url;
      setImageUrl(tweetUsersInfo);
      setId(tweetInformation);
    };
    favTweetInfo();
  };

  //

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
        {id.map((tweet, index) => (
          <TweetCard
            key={index}
            imageUrl={imageUrl}
            userName={tweet.username}
            tweetText={tweet.text}
            // figure out how to get the user's name and image from twitter api
          />
        ))}
      </div>
    </>
  );
}

export default FavTweets;
