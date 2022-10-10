require("dotenv").config();

const express = require("express");
// const swaggerUi = require("swagger-ui-express");
const routes = require("./routers/router");
const app = express();
const port = process.env.PORT || 3000;

// swaggerDocument = require("./swagger.json");

// app.use('api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//register the route 

routes(app);


app.listen(port, (error) => {
  if (!error) {
    console.log(`Server is running on port ${port}`);
  } else {
    console.log("Error occurred", error);
  }
});

