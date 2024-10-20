const express = require("express");

const app = express();

// this will only handle Get call to /user
app.get("/user", (req, res) => {
  res.send({
    firstName: "Sujeet",
    LastName: "Sahu",
  });
});

app.post("/user", (req, res) => {
  // data has been added to the database Logic
  res.send("Data has been successfully added to the DB");
});

app.delete("/user", (req, res) => {
  // Data has been successfully deleted Logic
  res.send("Data has been successfully deleted from the DB");
});

app.patch("/user", (req, res) => {
  // Data has been successfully updated Logic
  res.send("Data has been successfully updated in the DB");
});

// this will match all the HTTP method API calls /test
app.use("/test", (req, res) => {
  res.send("hello from url /test url");
});

app.listen(7777, () => {
  console.log("Server is successfully listening on port 7777...");
});
