const express = require("express");

const app = express();

// // this will only handle Get call to /user
// // /user,/user/xyz, /user/1
// app.get("/user", (req, res) => {
//   res.send({firstName: "Sujeet",LastName: "Sahu",
//   });
// });

/* Advance Routing Techniques */

// // /ac, /abc  here ? means b is an optional
// app.get("/ab?c", (req, res) => {
//   res.send({ firstName: "Sujeet", LastName: "Sahu" });
// });

// // /abc, /abbbc, /abbbbbbbbbbbbc, this + here means a and c should be at last and between these a and c we can add b as much as we want.
// app.get("/ab+c", (req, res) => {
//   res.send({ firstName: "Sujeet", LastName: "Sahu" });
// });

// // /abcd, /abSUJEETcd, /abSAhuabdjbajbajskbacd but we have to make sure it starts with ab and end with cd and in between these that can be anything eg. /abSUJEETcd, /abSAhuabdjbajbajskbacd these will perfectly work. for /abSUJEETc it won't work
// app.get("/ab*cd", (req, res) => {
//   res.send({ firstName: "Sujeet", LastName: "Sahu" });
// });

// WE CAN GROUP THINGS TOGETHER :

// abcd ,ab it will work but abc , acd it won't work
// app.get("/a(bc)?d", (req, res) => {
//   res.send({ firstName: "Sujeet", LastName: "Sahu" });
// });

// // abcbcbcbcbcbcbcbcbcbcbcbcd it will work so many bc as a group b/w a and d.
// app.get("/a(bc)+d", (req, res) => {
//   res.send({ firstName: "Sujeet", LastName: "Sahu" });
// });

// WE CAN WRITE REGEX OVER HERE INSTEAD OF STRING

// // it will work any path which contains in the url Eg. a,bad,cab,car,bacd,bacad,bcaad, etc
// app.get(/a/, (req, res) => {
//   res.send({ firstName: "Sujeet", LastName: "Sahu" });
// });

// // Complex Regex below: any path which end with fly it will work eg. Dragonfly,butterfly, fly etc and it won't work for Dragonfly1
// app.get(/.*fly$/, (req, res) => {
//   res.send({ firstName: "Sujeet", LastName: "Sahu" });
// });

// //How to read query params in the routes
// app.get("/user", (req, res) => {
//   console.log(req.query);
//   res.send({ firstName: "Sujeet", LastName: "Sahu" });
// });

// //How to read params in the dynamic routes
// app.get("/user/:id/:name/:password", (req, res) => {
//   console.log(req.params);
//   res.send({ firstName: "Sujeet", LastName: "Sahu" });
// });

app.listen(7777, () => {
  console.log("Server is successfully listening on port 7777...");
});
