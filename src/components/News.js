import React from "react";

function News() {
  const apiKey = "3f7642a057a8452cb5d5cdfb27830815";
  const url =
    "https://newsapi.org/v2/top-headlines?q=business&apiKey=3f7642a057a8452cb5d5cdfb27830815";
  var data = fetch(url);
  data
    .then((news) => {
      console.log(news);
    })
    .catch((err) => {
      console.log(err);
    });
  return <>news</>;
}

export default News;
