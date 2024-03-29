/** @format */

const axios = require("axios");
const { response } = require("express");
const express = require("express");
const path = require("path");
require("dotenv").config();
const token = process.env.TOKEN;
const app = express();

app.use(
  "/assets",
  express.static(path.join(__dirname, "../frontend/dist/assets"))
);

app.get(`/api/tweets`, (req, res) => {
  const favTweetUrl = `https://api.twitter.com/2/users/${req.query.user_id}/tweets?tweet.fields=public_metrics,author_id&user.fields=profile_image_url&expansions=author_id`;
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  axios
    .get(favTweetUrl, config)
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.get(`/api/Search`, (req, res) => {
  const searchUrl = `https://api.twitter.com/2/tweets/search/recent?query=${req.query.search_name}&tweet.fields=public_metrics,author_id&user.fields=profile_image_url&expansions=author_id`;
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  axios
    .get(searchUrl, config)
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.get(`/api/SearchUserTweet`, async (req, res) => {
  const favTweetUrl = `https://api.twitter.com/2/users/by/username/${req.query.user_id}`;

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const response = await axios.get(favTweetUrl, config);
  console.log(response.data.data.id);
  let favSearchUrl = `https://api.twitter.com/2/users/${response.data.data.id}/tweets?tweet.fields=public_metrics,author_id&user.fields=profile_image_url&expansions=author_id`;
  const tweets = await axios.get(favSearchUrl, config);

  res.send(tweets.data);
});
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

// const port = process.env.PORT || 3000 will be needed when deploying app
app.listen(3000);
