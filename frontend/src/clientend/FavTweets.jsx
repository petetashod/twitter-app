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
  const [userName, setUserName] = useState("");
  const button = (e) => {
    const index = Math.floor(Math.random() * favTwitterUsers.length);
    const id = favTwitterUsers[index].id;
    const url = `http://localhost:3000/api/tweets?user_id=${id}`;
    e.preventDefault();
    let favTweetInfo = async () => {
      let response = await axios.get(url);
      let tweetInformation = response.data.data;
      let tweetUsersImage = response.data.includes.users[0].profile_image_url;
      let tweetUserName = response.data.includes.users[0].username;
      setUserName(tweetUserName);
      setImageUrl(tweetUsersImage);
      setId(tweetInformation);
    };
    favTweetInfo();
  };

  // create a new .map on the image url inside the tweet card

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
            userName={userName}
            tweetText={tweet.text}
          />
        ))}
      </div>
    </>
  );
}

export default FavTweets;
