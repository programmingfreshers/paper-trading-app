const express = require("express");
const app = express();
const port = 4000;
let { SmartAPI, WebSocket } = require("smartapi-javascript");
const stockDataApiRouter = require('./stockDataApi')
const stockDetails = [
  {
    token: "6818",
    symbol: "LATENTVIEW-EQ",
    name: "LATENTVIEW",
    expiry: "",
    strike: "-1.000000",
    lotsize: "1",
    instrumenttype: "",
    exch_seg: "NSE",
    tick_size: "5.000000",
  },
  {
    token: "3063",
    symbol: "VEDL-EQ",
    name: "VEDL",
    expiry: "",
    strike: "-1.000000",
    lotsize: "1",
    instrumenttype: "",
    exch_seg: "NSE",
    tick_size: "5.000000",
  },
  {
    token: "1594",
    symbol: "INFY-EQ",
    name: "INFY",
    expiry: "",
    strike: "-1.000000",
    lotsize: "1",
    instrumenttype: "",
    exch_seg: "NSE",
    tick_size: "5.000000",
  },
  {
    token: "1660",
    symbol: "ITC-EQ",
    name: "ITC",
    expiry: "",
    strike: "-1.000000",
    lotsize: "1",
    instrumenttype: "",
    exch_seg: "NSE",
    tick_size: "5.000000",
  },
  {
    token: "3411",
    symbol: "TATAELXSI-EQ",
    name: "TATAELXSI",
    expiry: "",
    strike: "-1.000000",
    lotsize: "1",
    instrumenttype: "",
    exch_seg: "NSE",
    tick_size: "5.000000",
  },
];
const stock = {
  token: "3063",
  symbol: "VEDL-EQ",
  name: "VEDL",
  expiry: "",
  strike: "-1.000000",
  lotsize: "1",
  instrumenttype: "",
  exch_seg: "NSE",
  tick_size: "5.000000",
};

app.get("/",(req,res)=>{
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
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
