const express = require("express");
let { SmartAPI, WebSocket } = require("smartapi-javascript");
const app = express();
const port = 3000;

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
const userID = " "; // your angel user id
const userPassword = " "; // your angel password


app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);

  let smart_api = new SmartAPI({
    api_key: "BIdh60zo",
  });

  smart_api
    .generateSession(userID, userPassword)
    .then((data) => {
      smart_api
        .getProfile()
        .then((data) => {
          console.log(
            "========================================================================"
          );
          console.log("Welcome " + data["data"]["name"]);
          console.log(
            "========================================================================"
          );
        })
        .catch((err) => {});

      //      Historical Methods
      smart_api
        .getCandleData({
          exchange: "NSE",
          symboltoken: stock.token,
          interval: "ONE_DAY",
          fromdate: "2019-07-08 03:00",
          todate: "2022-07-08 03:00",
        })
        .then((data) => {
          var ls = [];
          var temp = 0;
          var high = 0;
          var ds = data["data"];
          ds.forEach((elem) => {
            ls.push(elem[3]);
          });
          ls.forEach((elem) => {
            temp = elem;
            if (high < temp) {
              high = temp;
              temp = 0;
            }
          });

          smart_api
            .getCandleData({
              exchange: "NSE",
              symboltoken: stock.token,
              interval: "ONE_DAY",
              fromdate: "2022-07-07 09:00",
              todate: "2022-07-08 03:00",
            })
            .then((data) => {
              var priceToday = data["data"][0][2];

              var priceCorrection = ((high - priceToday) * 100) / high;
              if (priceCorrection > 20) {
                smart_api
                  .placeOrder({
                    variety: "NORMAL",
                    tradingsymbol: stock.symbol,
                    symboltoken: stock.token,
                    transactiontype: "BUY",
                    exchange: "NSE",
                    ordertype: "LIMIT",
                    producttype: "DELIVERY",
                    duration: "DAY",
                    price: priceToday * (1 + 0.005),
                    squareoff: "0",
                    stoploss: "0",
                    quantity: "10",
                  })
                  .then((data) => {
                    console.log(
                      "Buy " +
                        stock.symbol +
                        "  [ " +
                        data["message"] +
                        " ]" +
                        " at " +
                        priceToday * (1 + 0.005)
                    );
                  })
                  .catch((err) => {
                    //   console.log("there is an error \n" + err)
                  });
              }
            })
            .catch((err) => {});

          //   .catch((err) => {
          //     console.log(err)
          //   })
        })
        .catch((err) => {
          //   console.log("errror 2" + err)
        });
    })
    .catch((err) => {
      //    console.log(err)
    });
});
