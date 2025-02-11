require("dotenv").config();
const express = require("express");
const app = express();
const port = 3005;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twiter", (req, res) => {
  res.send("twiter.com");
});

app.get("/login", (req, res) => {
  res.send("please login bapi");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>You become a backend developer</h2>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
