const http = require("http");
const fs = require("fs");

// create server
const server = http.createServer(function (req, res) {});

// http://localhost:9000
// Listen to the server
server.listen(9000, () => {
  console.log("Server is up and running");
});

// Listen to the event
server.on("request", (req, res) => {
  console.log("Some event has fired");
  const url = req.url;

  if (req.method === "GET") {
    let htmlFileToRender;
    if (url === "/") {
      htmlFileToRender = "home.html";
    } else if (url === "/login") {
      htmlFileToRender = "login.html";
    } else if (url === "/register") {
      htmlFileToRender = "register.html";
    }

    fs.readFile(htmlFileToRender, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      }
    });
  } else if (req.method === "POST") {
    // parse incoming data(payload)
    if (url === "/create-post") {
      //Receive the incoming data
      const post = [];
      req
        .on("data", (chunk) => {
          post.push(chunk);
        })
        .on("end", function () {
          //parse the buffer data into string
          const paredData = Buffer.concat(post).toString();
          res.writeHead(200, { "Content-Type": "text/json" });
          console.log(paredData);
          res.write("Post created");
          res.end();
        });
    }
  } else {
    // Handle other http method
  }
});

//------
//Coding Challenge
//-------
//Create a server to render two html pages with different content
//Use the fs module to create a main folder(public) and two subfolders(pages and css)
//Create 3 files. Two in the pages folder: home.html, and about.html
//Create a file in the css folder: style.css
//Create a server to serve the files

// //--Solution---

// const http = require("http");
// const fs = require("fs");
// const path = require("path");

// // create folders
// fs.mkdir("public/css", (err) => {
//   if (err) console.log(err);
//   console.log("Folder has been created");
// });

// // create files
// fs.writeFile(
//   "public/css/style.css",
//   `
// h1{color:red}
// `,
//   function (err) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("File Created");
//     }
//   }
// );

// const server = http.createServer();

// //listen to the server
// server.listen(8000, console.log("Server is running"));

// //listen to event
// server.on("request", (req, res) => {
//   //get the url
//   const url = req.url;

//   if (url === "/") {
//     //read the file on the home.html
//     fs.readFile("public/pages/home.html", function (err, data) {
//       if (err) {
//         console.log(err);
//       } else {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.write(data);
//         res.end();
//       }
//     });
//   }

//   //about page
//   if (url === "/about") {
//     //read the file on the home.html
//     //get the file location
//     const filePath = path.join(__dirname, "public/pages", "about.html");
//     console.log(filePath);
//     fs.readFile(filePath, function (err, data) {
//       if (err) {
//         console.log(err);
//       } else {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.write(data);
//         res.end();
//       }
//     });
//   }
// });
