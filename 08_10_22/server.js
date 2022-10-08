require("dotenv").config();

const express = require("express");
const routes = require("./routers/router");
const app = express();
const port = process.env.PORT || 3000;

//register the route
routes(app); 


app.listen(port, (error) => {
  if (!error) {
    console.log(`Server is running on port ${port}`);
  } else {
    console.log("Error occurred", error);
  }
});

