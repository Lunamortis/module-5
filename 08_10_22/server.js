require("dotenv").config();

const express = require("express");
//const port = 4000
const ports = [5000, 6000]
const swaggerUi = require("swagger-ui-express");
const cors = require("cors");
const routes = require("./routers/router");
const app = express();
const port = process.env.PORT || 3000;

const servers = [];


ports.forEach(port => {
  let app = express()
  servers.push(app)
})

servers.forEach(server => {
  let tempPort = ports.pop()

  server.use('/', express.static('public'))
  server.listen(tempPort, () => {
    console.log(`Example app listening at http://localhost:${tempPort}`)
  })


})


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

