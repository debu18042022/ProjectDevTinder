const express = require("express");

const app = express();

const { adminAuth, userAuth } = require("./middlewares/auth");

app.use("/admin", adminAuth);

app.get("/user/login", (req, res) => {
  res.send("login successfully");
});

app.get("/user/getData", userAuth, (req, res) => {
  res.send("data has been got");
});

app.get("/admin/getAllData", (req, res) => {
  // if the request id Authorized
  res.send("fetched all data");
});

app.get("/admin/delete", (req, res) => {
  // if the request id Authorized
  res.send("dleted all data");
});

app.listen(7777, () => {
  console.log("Server is successfully listening on port 7777...");
});
