const express = require("express");
const app = express();
const morgan = require("morgan");

// Use morgan middleware
app.use(morgan("combined"));

// Create and use a middleware
// const logger = (req, res, next) => {
//   console.log("I am a logger middleware");
//   next();
// };
// app.use(logger);

// Or use this way
// app.use((req, res, next) => {
//   console.log("I am a logger middleware");
//   next();
// });

// Middleware chaining
// app
//   .use((req, res, next) => {
//     console.log("First middleware");
//     next();
//   })
//   .use((req, res, next) => {
//     console.log("Second middleware");
//     next();
//   })
//   .use((req, res, next) => {
//     console.log("Third middleware");
//     next();
//   });

// -----Coding Challenge 1-----
// Create a middleware that will log the request method, url, and the date and time of the request.

// const codingChallengeLogger = (req, res, next) => {
//   console.log(`${req.method} ${req.url} ${new Date().toISOString()}`);
//   next();
// };
// app.use(codingChallengeLogger);

// -----Coding Challenge 2-----
// Create a middleware that will check the number of requests made to the server.
// If the number of requests is greater than 10, return a response with a status code of 429. (To Many Requests)
// If the number of requests is less than 10, call the next middleware.

// let requestCountValue = 0;
// const requestCountMiddleware = (req, res, next) => {
//   requestCountValue++;
//   if (requestCountValue > 10) {
//     return res.status(429).json("Too Many Requests");
//   }
//   next();
// };
// app.use(requestCountMiddleware);

// Protected route middleware
const protected = (req, res, next) => {
  let userLoginDetails = {
    isLogin: true,
    name: "John",
  };

  if (userLoginDetails.isLogin) {
    next();
  } else {
    return res.json("You must login first");
  }
};

// isAdmin route middleware
const isAdmin = (req, res, next) => {
  let userLoginDetails = {
    isLogin: true,
    name: "John",
    isAdmin: false,
  };

  if (userLoginDetails.isAdmin) {
    next();
  } else {
    return res.json("You are not admin");
  }
};

// Home Route
app.get("/", (req, res) => {
  res.send("Home page");
});

// Login Route
app.get("/login", (req, res) => {
  res.send("Login successful");
});

// @Role: Authenticated user
// Create Post request
app.post("/create-post", protected, (req, res) => {
  res.json({ message: "Post Created" });
});

// @Role: Public user
// Fetch all posts
app.get("/posts", (req, res) => {
  res.json({ message: "Posts fetched" });
});

// @Role: Admin
// Delete post
app.delete("/posts/:id", protected, isAdmin, (req, res) => {
  res.json({ message: "Posts deleted" });
});

//create a server
app.listen(9000, function () {
  console.log("Server is up and running");
});
