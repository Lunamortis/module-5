require("dotenv").config();

const express = require("express");

const cors = require("cors");
const routes = require("./routers/router");
const app = express();
const port = process.env.PORT || 3000;

const servers = [];


//need this line to make sure your index.html file in the public directory is loaded on the base endpoint
app.use('/', express.static('public'))


//register the routes

routes(app);


app.listen(port, (error) => {
  if (!error) {
    console.log(`Server is running on port ${port}`);
  } else {
    console.log("Error occurred", error);
  }
});

