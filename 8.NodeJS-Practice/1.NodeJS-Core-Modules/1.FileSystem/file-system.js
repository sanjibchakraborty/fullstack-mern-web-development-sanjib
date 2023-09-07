// //--------
// // Create a file
// //--------
// const fs = require("fs");
// fs.writeFile("index.html", "Hello Welcome", function (error) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("File Created");
//   }
// });

// //--------
// // Create a file using async await
// //--------
// const fsPromise = require("fs/promises");

// const createFileUsingAsyncAwait = async (fileName, content) => {
//   try {
//     await fsPromise.writeFile(fileName, content);
//     console.log("File Created using async await");
//   } catch (error) {
//     console.log(error);
//   }
// };

// createFileUsingAsyncAwait("aboutUs.pdf", "This is my first pdf file created");

//-------
// Read from a file
//-------

// // Read synchronously
// const fs = require("fs");
// const result = fs.readFileSync("aboutUs.pdf");
// console.log(result.toString());

// // Read asynchronously
// const fs = require("fs");
// fs.readFile("aboutUs.pdf", function (error, data) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(data.toString());
//   }
// });

// //-------
// // Rename a file
// //-------
// const fs = require("fs");
// fs.rename("aboutUs.pdf", "contactUs.pdf", (error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("File renamed successfully");
//   }
// });

// // ------
// // Copy a file
// // ------
// const fs = require("fs");
// fs.copyFile("aboutUs.docx", "contactUs.pdf", function (error) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("File copied");
//   }
// });

// //------
// // Append file
// //------
// const fs = require("fs");
// fs.appendFile("index.html", "  This is another content", function (error) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("File appended succesfully");
//   }
// });

// //------
// // Truncate a file
// //------
// const fs = require("fs");
// fs.truncate("index.html", 30, function (error) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("File truncated");
//   }
// });

// //------
// //stats of a file
// //------
// const fs = require("fs");
// fs.stat("index.html", function (error, stats) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(stats);
//   }
// });

// //------
// //Delete a file
// //------
// const fs = require("fs");
// fs.unlink("index.html", (error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("File deleted");
//   }
// });

// //-----
// // Working with Folders
// //-----

// // Create a folder

// const fs = require("fs");
// fs.mkdir("src", function (error) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Folder has been created successfully");
//   }
// });

// // Add file into it

// const fs = require("fs");
// fs.writeFile("src/index.html", "Hello, welcome", function (error) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("File created");
//   }
// });

// //------
// // Read directory
// //------
// const fs = require("fs");
// fs.readdir("src", function (error, files) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(files);
//   }
// });

// //-----
// // Delete directory
// //-----
// const fs = require("fs");
// fs.rmdir("pages", function (error) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Folder deleted");
//   }
// });
