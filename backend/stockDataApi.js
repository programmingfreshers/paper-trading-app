const express = require("express");
const router = express.Router();
const bodyparser = require("body-parser");
let { SmartAPI, WebSocket } = require("smartapi-javascript");
const userID = ""; // your angel user id
const userPassword = ""; // your angel password
const apiKey = ""; // your api key

router.get("/", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  let smart_api = new SmartAPI({
    api_key: apiKey,
  });
  smart_api
    .generateSession(userID, userPassword)
    .then((data) => {
      return smart_api.getProfile();
    })
    .then((data) => {
      console.log("hello");
      console.log(data);
      res.json({ work: "done" });
    })
    .catch((ex) => {
      //Log error
    });
});
module.exports = router;
