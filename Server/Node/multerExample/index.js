const express = require("express");
const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");
const app = express();
const { connection } = require("./mongoDb");

/*

1. Create a post route "/sharedrawings", Don't forget to add multer middleware.

2. Send status code "200" with the text "All Drawings Submitted!".

3. Use "upload" (Already in the file) as middleware and call array function of it with two parameters "drawings" and 3.



For Example: upload.array("drawings", 3)



Note: Setup of "multer-gridfs-storage", "multer" and "mongodb" is already there, Make all the changes in the index.js file.
*/

const storage = new GridFsStorage({ db: connection });
const upload = multer({ storage });

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// don't change above code
app.post("/sharedrawings", /* remove this and add middleware*/upload.array("drawings", 3), (req, res) => {
  // write your code here
 try {
    Promise.all(
      req.files.map(async (file) => {
        const newUpload = new Uploads({drawings});

        return await newUpload.save();
      })
    );

    res.status(200).send('All Drawings Submitted!');
  } catch (e) {
    res
      .status(500)
      
  }
});

module.exports = { app, storage };
