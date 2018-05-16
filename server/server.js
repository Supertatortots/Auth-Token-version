const express = require("express");
// const session = require('express-session');

const userRoutes = require("./users/userRoutes");
const authRoutes = require("./auth/authRoutes");

const db = require("./_config/db");
const setupMiddleware = require("./_config/middleware");
const setupRoutes = require("./_config/routes");

const server = express();

db
  .connectTo("jwauth")
  .then(() => console.log("\n == API Connected to JWAuth DB == \n"))
  .catch(error => {
    console.log("\n *** Error Connecting to MongoDB *** \n", error);
  });

setupMiddleware(server);
setupRoutes(server);

module.exports = function(server) {
  // sanity check route
  server.get("/", function(req, res) {
    res.send({ api: "up and running" });
  });

  server.use("/api/users", userRoutes);
  server.use("/api/auth", authRoutes);
};

// server.get('/logout', (req, res) => {
//   if (req.session) {
//     res
//       .session
//       .destroy(function(err) {
//         if (err) {
//           res.send('Error');
//         } else {
//           res.send('Good Bye');
//         }
//     });
//   }
// });

server.listen(5500, () =>
  console.log("\n ~~~ API Running on port 5500 ~~~ \n")
);
