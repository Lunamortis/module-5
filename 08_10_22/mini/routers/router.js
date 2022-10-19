//router.js

"use strict";

const { userPostAPI } = require("../controllers/UserController");

module.exports = (app) => {
    var calculator = require("../controllers/CalculatorController");


    //Root router
    
    app.get("/", (req, res) => {
        res.send("Main Page");
    });

    //userapi router
    app.route("/userPostAPI").get(userPostAPI);

    // Handling 404 request from the client
    app.use((req, res, next) => {
        res.status(404).send("<h1>Page not found on the server</h1>");
    });
};
