/** @format */

import React from "react";
import "/src/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faRetweet } from "@fortawesome/free-solid-svg-icons";

const SearchTweetCard = ({ searchImage, userName, tweet }) => {
  return (
    <div className="row">
      <div className="col-md-4"></div>
      <div className="container tweetSearchCard" id="tweetCardSearch">
        <div className="col-md-4">
          <div className="panel panel-danger">
            <div className="panel-heading">
              <h3 className="panel-title">
                <i className="fa fa-twitter-square" aria-hidden="true"></i>
                <img src={searchImage} className="" />
                <span className="">{userName}</span>
              </h3>
            </div>
            <div className="">
              <p className="text-black tweetInfo">{tweet.text}</p>
              <footer>
                <div>
                  <span className="display">
                    <FontAwesomeIcon icon={faRetweet} />
                  </span>
                  <span className="display">
                    {tweet.public_metrics.retweet_count}
                  </span>
                  <span className="display">
                    <FontAwesomeIcon icon={faHeart} />
                  </span>
                  <span className="display">
                    {tweet.public_metrics.like_count}
                  </span>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4"></div>
    </div>
  );
};
export default SearchTweetCard;
