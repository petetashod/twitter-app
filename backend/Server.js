/** @format */

const axios = require("axios");
const express = require("express");
const path = require("path");
require("dotenv").config();
const token = process.env.TOKEN;
const app = express();
const id = require.params;
const favTweetUrl = `https://api.twitter.com/2/users/${id}/tweets`;
// figure out how to pull information from the query string using pram

app.use(
  "/assets",
  express.static(path.join(__dirname, "../frontend/dist/assets"))
);

app.get("/", (req, res) => {
  //   res.send("working!");
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

app.get(`/api/tweets?users_id=${id}`, (req, res) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  axios
    .get(favTweetUrl, config)
    .then((response) => {
      res.send(id.data);
    })
    .catch((error) => {
      console.log(error);
    });
});
// const port = process.env.PORT || 3000 will be needed when deploying app
app.listen(3000);
