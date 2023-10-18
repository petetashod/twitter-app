/** @format */

const axios = require("axios");
const express = require("express");
const path = require("path");
const token = process.env.TOKEN;
const app = express();
const favTweetUrl =
  "https://api.twitter.com/2/tweets/search/recent?query=lebronjames";

app.use(
  "/assets",
  express.static(path.join(__dirname, "../frontend/dist/assets"))
);

app.get("/api/test", (req, res) => {
  //   res.send("working!");
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

app.get("/api/tweets", (req, res) => {
  //   const config = {
  //     headers: { Authorization: `Bearer ${token}` },
  //   };
  //   axios
  //     .get(favTweetUrl, config)
  //     .then((response) => {
  //       console.log(response);
  //       res.json(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       res.status(505).json({ error: "Internal Server Error" });
  //     });
});
app.listen(3000);
