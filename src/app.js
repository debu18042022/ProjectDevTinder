const express = require("express");

const app = express();

app.use("/", (err, req, res, next) => {
  if (err) {
    res.send("somenthing went wrong");
  }
});

app.get("/user/getData", (req, res) => {
  // try {
    // logic to fetch data from DB
    throw new Error("aaaaaaaa");
    res.send("Data has been fetched successfully");
  // } catch (err) {
  //   res.status(500).send("some error occured");
  // }
});

app.use("/", (err, req, res, next) => {
  if (err) {
    res.send("somenthing went wrong");
  }
});

app.listen(7777, () => {
  console.log("Server is successfully listening on port 7777...");
});
