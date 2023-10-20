/** @format */
import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import "/src/App.css";
import axios from "axios";

function FavTweets() {
  // let twitterData = {
  //   name: "Luke Skywalker",
  //   height: "172",
  //   mass: "77",
  //   hair_color: "blond",
  //   skin_color: "fair",
  //   eye_color: "blue",
  //   birth_year: "19BBY",
  //   gender: "male",
  //   homeworld: "https://swapi.dev/api/planets/1/",
  //   films: [
  //     "https://swapi.dev/api/films/2/",
  //     "https://swapi.dev/api/films/6/",
  //     "https://swapi.dev/api/films/3/",
  //     "https://swapi.dev/api/films/1/",
  //     "https://swapi.dev/api/films/7/",
  //   ],
  //   species: ["https://swapi.dev/api/species/1/"],
  //   vehicles: [
  //     "https://swapi.dev/api/vehicles/14/",
  //     "https://swapi.dev/api/vehicles/30/",
  //   ],
  //   starships: [
  //     "https://swapi.dev/api/starships/12/",
  //     "https://swapi.dev/api/starships/22/",
  //   ],
  //   created: "2014-12-09T13:50:51.644000Z",
  //   edited: "2014-12-20T21:17:56.891000Z",
  //   url: "https://swapi.dev/api/people/1/",
  // };

  const [tweetsDisplay, setTweetsDisplay] = useState("");

  const [url, setUrl] = useState("http://localhost:3000/api/tweets");
  useEffect(() => {
    let favTweetInfo = () => {
      let response = axios.get(url);
      let tweetInformation = response.data;
      setTweetsDisplay(tweetInformation);
    };
    console.log(tweetsDisplay);
    favTweetInfo();
  }, [url]);

  const button = (e) => {
    e.preventDefault();
    //  let properties = Object.keys(twitterData)
    setTweetsDisplay(tweetsDisplay);
  };

  console.log(tweetsDisplay);
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

      <ul>
        {tweetsDisplay.map((person, index) => (
          <li key={index}>{person.data}</li>
        ))}
      </ul>
    </>
  );
}

export default FavTweets;
