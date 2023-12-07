/** @format */

const axios = require("axios");
const express = require("express");
const path = require("path");
require("dotenv").config();
const token = process.env.TOKEN;
const app = express();

app.use(
  "/assets",
  express.static(path.join(__dirname, "../frontend/dist/assets"))
);

app.get("/", (req, res) => {
  //   res.send("working!");
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

app.get(`/api/tweets`, (req, res) => {
  const favTweetUrl = `https://api.twitter.com/2/users/${req.query.user_id}/tweets?tweet.fields=public_metrics,author_id`;
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  axios
    .get(favTweetUrl, config)
    .then((response) => {
      // console.log(response.data);
      res.send(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});
app.get(`/api/tweets`, (req, res) => {
  const imageUrl = `https://api.twitter.com/2/users/${req.query.user_id}?user.fields=profile_image_url`;
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  axios
    .get(imageUrl, config)
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

// const port = process.env.PORT || 3000 will be needed when deploying app
app.listen(3000);
