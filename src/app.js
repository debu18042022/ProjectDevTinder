const express = require("express");

const app = express();

app.use("/test", (req, res) => {
  res.send("Hi this a test Url Response");
});

app.use("/hello", (req, res) => {
  res.send("Hello from the /hello Url");
});

app.use("/", (req, res) => {
  res.send("Hello from the Dashboard");
});

app.listen(7777, () => {
  console.log("Server is listening");
});
